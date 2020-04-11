<template>
    <div class="page">
        <h2>Get Help</h2>
        <p>{{ this.queueMessage }}</p>
        <br>
        <div v-if="this.status === 'join'" class="join">
            <div class="info">
                <div class="info-tile">
                    <p class="info-value">{{ this.helping }}</p>
                    <p class="info-label">Being Helped</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.avgWaitString }}</p>
                    <p class="info-label">Average Wait</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.waiting }}</p>
                    <p class="info-label">Waiting</p>
                </div>
            </div>
            <br>

            <form id="create-ticket">
                <button type="button" id="ticket-passoff" :disabled="!this.$root.$data.open" :class="{ passoff: isPassoff }" @click.prevent="togglePassoff()">Pass Off</button>
                <textarea :disabled="isPassoff || !this.$root.$data.open" v-model="question" />
                <button type="button" :disabled="!this.$root.$data.open" id="ticket-submit" @click.prevent="submitTicket()">Join Queue</button>
            </form>
        </div>

        <div v-if="this.status === 'waiting'" class="waiting">
            <div class="info">
                <div class="info-tile">
                    <p class="info-value">{{ this.helping }}</p>
                    <p class="info-label">Being Helped</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.fromString }}</p>
                    <p class="info-label">Waited</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.place }}</p>
                    <p class="info-label">Place</p>
                </div>
            </div>
            <br>

            <h3 v-if="!this.$root.$data.myTicket.isPassoff">Your Question</h3>
            <h3 v-else>Pass Off</h3>
            <p class="question">{{ this.$root.$data.myTicket.question }}</p>
        </div>

        <div v-if="this.status === 'helped'" class="being helped">
            <div class="info">
                <div class="info-tile">
                    <p class="info-value">{{ this.helping }}</p>
                    <p class="info-label">Being Helped</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.fromString }}</p>
                    <p class="info-label">Helped</p> 
                </div>
                <div class="info-tile">
                    <p class="info-value">{{ this.waiting }}</p>
                    <p class="info-label">Waiting</p>
                </div>
            </div>
            <br>

            <h3 v-if="!this.$root.$data.myTicket.isPassoff">Your Question</h3>
            <h3 v-else>Pass Off</h3>
            <p class="question">{{ this.$root.$data.myTicket.question }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import moment from 'moment';

export default {
    name: 'Join',
    data() {
        return {
            queueMessage: this.$root.$data.settings.message,
            isPassoff: false,
            question: "",

            avgWaitSeconds: 0,
            fromSeconds: 0,
            waiting: 0,
            helping: 0,
            place: 0,

            interval: null,
            waitInterval: null,
        }
    },
    computed: {
        status() {
            if (this.$root.$data.myTicket && this.$root.$data.myTicket.waitSeconds === 0) {
                return 'waiting';
            }
            if (this.$root.$data.myTicket && this.$root.$data.myTicket.waitSeconds !== 0) {
                return 'helped';
            }
            return 'join';
        },
        fromString() {
            return (Math.floor(this.fromSeconds / 60)) + ':' + ((Math.abs(this.fromSeconds % 60) < 10) ? "0" : "") + Math.abs(this.fromSeconds % 60);
        },
        avgWaitString() {
            return (Math.floor(this.avgWaitSeconds / 60)) + ':' + ((Math.abs(this.avgWaitSeconds % 60) < 10) ? "0" : "") + Math.floor(Math.abs(this.avgWaitSeconds % 60));
        },
        placeInLine() {
            return this.$root.$data.queue.filter(ticket => {
                return (!ticket.waitSeconds) && (ticket.id < this.$root.$data.myTicket.id)
            }).length + 1;
        },
        numWaiting() {
            return this.$root.$data.queue.filter(ticket => !ticket.waitSeconds).length;
        },
        numBeingHelped() {
            return this.$root.$data.queue.filter(ticket => ticket.waitSeconds).length;
        }
    },
    methods: {
        togglePassoff() {
            if (!this.isPassoff) {
                this.isPassoff = true;
                this.question = "";
            } else {
                this.isPassoff = false;
            }
        },
        // submitTicket() {
        //     this.$root.$data.myTicket = {
        //         id: this.getId(),
        //         name: this.$root.$data.user,
        //         enterTime: moment().format(),
        //         waitSeconds: 0,
        //         helpedSeconds: 0,
        //         helpedBy: "",
        //         isPassoff: this.isPassoff,
        //         question: this.question,
        //     }
        //     this.$root.$data.queue.push(this.$root.$data.myTicket);
        // },
        async updateStats() {
            let res = await axios.get('/api/queue/stats');
            this.avgWaitSeconds = res.data.averageWait;
            this.waiting = res.data.waiting;
            this.helping = res.data.helping;
        },
        async submitTicket() {
            let res = await axios.post('/api/queue', {
                name: this.$root.$data.user,
                isPassoff: this.isPassoff,
                question: this.question
            })
            this.$root.$data.myTicket = res.data.ticket;
            this.place = res.data.place;
            this.question = "";
            this.isPassoff = false;
        },
        async updateTicket() {
            try {
                let res = await axios.get('/api/queue/' + this.$root.$data.myTicket._id);
                this.$root.$data.myTicket = res.data.ticket;
                this.place = res.data.place;
            } catch (error) {
                if (error.response.status === 404) {
                    this.$root.$data.myTicket = undefined;
                } else {
                    console.log(error);
                }
            }
            
        }
        // getId() {
        //     let newId = this.$root.$data.nextId;
        //     this.$root.$data.nextId++;
        //     return newId;
        // },
        // updateFrom() {
        //     if (this.status === 'waiting' || this.status === 'helped') {
        //         this.fromSeconds = Math.floor(moment().diff(moment(this.$root.$data.myTicket.enterTime)) / 1000) - this.$root.$data.myTicket.waitSeconds;
        //     }
        // },
        // updateAvgWait() {
        //     this.avgWait = this.$root.$data.queue.filter(ticket => !ticket.waitSeconds > 0).reduce((avg, ticket, i, src) => {
        //         return avg + ((Math.floor(moment().diff(moment(ticket.enterTime)) / 1000)) / src.length);
        //     }, 0)
        // },
    },
    created() {
        this.updateStats();
        this.interval = setInterval(() => {
            this.updateStats();
            if (this.status === "waiting" || this.status === "helped") {
                this.updateTicket();
            }
        },5000);
        this.waitInterval = setInterval(() => {
            this.avgWaitSeconds++;
            this.fromSeconds++;
        },1000);
    },
    destroyed() {
        clearInterval(this.interval);
        clearInterval(this.waitInterval);
    }
}
</script>

<style scpoed>
#create-ticket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
    margin: auto;
}

#create-ticket div label {
    user-select: none;
    position: relative;
    top: -6px;
    left: 4px;
}

#create-ticket textarea {
    height: 100px;
    margin: 10px 0;
}

#create-ticket button {
    height: 40px;
}

#ticket-passoff.passoff {
    background-color: var(--passoff);
}

#ticket-submit {
    color: var(--text-light);
    background-color: var(--main);
}

#ticket-submit:hover,
#ticket-submit:focus {
    border-color: var(--grey-200);
}

#ticket-submit:disabled {
    color: var(--grey-400);
    background-color: var(--grey-200);
}



.info {
    display: flex;
    flex-direction: column;
}

.info-tile {
    margin-bottom: 20px;
}

.info-value {
    font-family: 'Ubuntu', sans-serif;
    font-size: 42px;
    font-weight: 700;
}

.info-label {
    font-size: 24px;
    font-weight: 700;
}

@media only screen and (min-width: 620px) {
    .info {
        flex-direction: row;
        justify-content: center;
    }

    .info-tile {   
        width: 200px;
    }
}
</style>