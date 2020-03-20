<template>
    <button type="button" :class="{ 'queue-ticket': true, 'ticket-passoff': ticket.isPassoff }" @click="removeTicket()">
        <div class="ticket-header">
            <h3>{{ ticket.name }}</h3>
            <h3>{{ this.fromString }}</h3>
        </div>
        <p v-if="!ticket.passoff" class="ticket-message">{{ ticket.question }}</p>
    </button>
</template>


<script>
let moment = require('moment');

export default {
    name: 'QueueTicket',
    data() {
        return {
            fromSeconds: 0,
            interval: setInterval(() => {
                this.updateFrom();
            },200)
        }
    },
    props: {
        ticket: Object
    },
    computed: {
        fromString() {
            return (Math.floor(this.fromSeconds / 60)) + ':' + ((Math.abs(this.fromSeconds % 60) < 10) ? "0" : "") + Math.abs(this.fromSeconds % 60);
        }
    },
    methods: {
        updateFrom() {
            this.fromSeconds = Math.floor(moment().diff(moment(this.ticket.enterTime)) / 1000) - this.ticket.waitSeconds;
        },
        removeTicket() {
            if (!this.ticket.waitSeconds) {
                console.log("Ticket " + this.ticket.id + " changed to being helped");
                this.ticket.waitSeconds = this.fromSeconds;
                this.ticket.helpedBy = this.$root.$data.user;
            } else {
                console.log("Ticket " + this.ticket.id + " moved into history");
                this.$root.$data.history.push({
                    id: this.ticket.id,
                    name: this.ticket.name,
                    enterTime: this.ticket.enterTime,
                    waitSeconds: this.ticket.waitSeconds,
                    helpedSeconds: this.fromSeconds,
                    helpedBy: this.ticket.helpedBy,
                })
                this.$root.$data.myTicket = undefined;
                this.$root.$data.queue = this.$root.$data.queue.filter(ticket => ticket.id !== this.ticket.id);
            }
        }
    },
    destroyed() {
        clearInterval(this.interval);
    }
}
</script>


<style scoped>
.queue-ticket {
    width: 100%;
    padding: 8px 10px;
    border: none;

    background-color: var(--gray-1);
    font-family: 'Open Sans', sans-serif;
}

.queue-ticket:hover,
.queue-ticket:focus {
    border-top: 4px solid var(--mainColor);
    padding: 4px 10px 8px;
}

.ticket-passoff {
    background-color: var(--passoff);
}

.ticket-header {
    display: flex;
    justify-content: space-between;
}
</style>