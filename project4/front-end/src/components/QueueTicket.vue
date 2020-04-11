<template>
    <button type="button" :class="{ 'queue-ticket': true, 'ticket-passoff': ticket.isPassoff }" @click="clickTicket()">
        <div class="ticket-header">
            <h3>{{ ticket.name }}</h3>
            <h3>{{ this.fromString }}</h3>
        </div>
        <p v-if="!ticket.passoff" class="ticket-message">{{ ticket.question }}</p>
    </button>
</template>


<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'QueueTicket',
    data() {
        return {
            ticket: this.$root.$data.queue.filter(ticket => ticket._id === this.$vnode.key)[0],
            fromSeconds: 0,
            fromInterval: null,
        }
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
        clickTicket() {
            if (!this.ticket.waitSeconds) {
                this.helpTicket();
            } else {
                this.deleteTicket();
            }
        },
        async helpTicket() {
            this.ticket.waitSeconds = this.fromSeconds;
            let res = await axios.put('/api/queue/' + this.ticket._id, {
                helpedBy: this.$root.$data.user
            })
            this.ticket = res.data.ticket;
        },
        deleteTicket() {
            this.$root.$data.queue = this.$root.$data.queue.filter(ticket => ticket._id !== this.ticket._id);
            axios.delete('/api/queue/' + this.ticket._id);
        },
        // removeTicket() {
        //     if (!this.ticket.waitSeconds) {
        //         this.ticket.waitSeconds = this.fromSeconds;
        //         this.ticket.helpedBy = this.$root.$data.user;
        //     } else {
        //         this.$root.$data.history.push({
        //             id: this.ticket.id,
        //             name: this.ticket.name,
        //             enterTime: this.ticket.enterTime,
        //             waitSeconds: this.ticket.waitSeconds,
        //             helpedSeconds: this.fromSeconds,
        //             helpedBy: this.ticket.helpedBy,
        //         })
        //         if (this.$root.$data.myTicket && this.ticket.id === this.$root.$data.myTicket.id){
        //             this.$root.$data.myTicket = undefined;
        //         }
        //         this.$root.$data.queue = this.$root.$data.queue.filter(ticket => ticket.id !== this.ticket.id);
        //     }
        // }
    },
    created() {
        this.fronInterval = setInterval(() => {
            this.updateFrom();
        },200)
    },
    destroyed() {
        clearInterval(this.fromInterval);
    }
}
</script>


<style scoped>
.queue-ticket {
    width: 100%;
    padding: 8px 10px;
    border: none;

    background-color: var(--grey-200);
    font-family: 'Open Sans', sans-serif;
}

.queue-ticket:hover,
.queue-ticket:focus {
    border-top: 4px solid var(--main);
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