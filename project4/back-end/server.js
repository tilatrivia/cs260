const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://localhost:27017/helpqueue', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});



/* Schema */

const ticketSchema = new mongoose.Schema({
    name: String,
    enterTime: String,
    isPassoff: Boolean,
    question: String,
    waitSeconds: {
        type: Number,
        default: 0
    },
    helpedBy: {
        type: String,
        default: ""
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

const historySchema = new mongoose.Schema({
    name: String,
    enterTime: String,
    isPassoff: Boolean,
    waitSeconds: Number,
    helpSeconds: Number,
    helpedBy: String,
});

const History = mongoose.model('History', historySchema);



/* API Endpoints */

app.get('/queue', async (req, res) => {
    try {
        let tickets = await Ticket.find();
        res.send({tickets: tickets});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.get('/queue/stats', async (req, res) => {
    try {
        let tickets = await Ticket.find();
        let numHelping = tickets.filter(ticket => ticket.waitSeconds).length;
        let numWaiting = tickets.filter(ticket => !ticket.waitSeconds).length;
        let averageWait = tickets.filter(ticket => !ticket.waitSeconds > 0).reduce((avg, ticket, i, src) => {
            return avg + ((Math.floor(moment().diff(moment(ticket.enterTime)) / 1000)) / src.length);
        }, 0)

        return res.send({
            helping: numHelping,
            waiting: numWaiting,
            averageWait: averageWait
        })
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
})

app.get('/queue/:id', async (req, res) => {
    try {
        let tickets = await Ticket.find();
        let thisTicket = await Ticket.findOne({_id: req.params.id});
        let numHelping = tickets.filter(ticket => ticket.waitSeconds).length;
        let numWaiting = tickets.filter(ticket => !ticket.waitSeconds).length;
        let placeInLine = tickets.filter(ticket => {
            return (!ticket.waitSeconds) && (moment(thisTicket.enterTime).diff(ticket.enterTime) > 0)
        }).length + 1;

        return res.send({
            ticket: thisTicket,
            helping: numHelping,
            waiting: numWaiting,
            place: placeInLine
        })
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.post('/queue', async (req, res) => {
    if (!req.body.name || !(req.body.isPassoff || req.body.question)) {
        return res.status(400).send({
            message: "improper ticket sent"
        });
    }

    try {
        const ticket = new Ticket({
            name: req.body.name,
            enterTime: moment().format(),
            isPassoff: req.body.isPassoff,
            question: req.body.question
        })
        await ticket.save();
        return res.send({ticket: ticket});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.put('/queue/:id', async (req, res) => {
    if (!req.body.helpedBy) {
        return res.status(400).send({
            message: "improper ticket update"
        }); 
    }

    try {
        let ticket = await Ticket.findOne({_id: req.params.id});
        console.log(ticket);
        if (ticket.waitSeconds) {
            return res.status(400).send({
                message: "ticket already cliamed"
            })
        }

        ticket.waitSeconds = Math.floor(moment().diff(moment(ticket.enterTime)) / 1000);
        ticket.helpedBy = req.body.helpedBy;
        ticket.save();
        return res.send({ticket: ticket});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.delete('/queue/:id', async (req, res) => {
    try {
        let ticket = await Ticket.findOne({_id: req.params.id});
        if (ticket.waitSeconds) {
            const historyTicket = new History({
                name: ticket.name,
                enterTime: ticket.enterTime,
                isPassoff: ticket.isPassoff,
                waitSeconds: ticket.waitSeconds,
                helpSeconds: Math.floor(moment().diff(moment(ticket.enterTime)) / 1000) - ticket.waitSeconds,
                helpedBy: ticket.helpedBy,
            })
            historyTicket.save();
        }   

        await Ticket.deleteOne({_id: req.params.id});
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/history', async (req, res) => {
    try {
        let history = await History.find();
        res.send({history: history});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
