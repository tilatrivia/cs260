<template>
    <div class="page">
        <h2>Being Helped</h2>
        <QueueTicket class="ticket" v-for="ticket in helping" :key="ticket._id" />
        <h3 v-if="this.helping.length == 0">Empty!</h3>
        <h2>Queue</h2>
        <QueueTicket class="ticket" v-for="ticket in waiting" :key="ticket._id" />
        <h3 v-if="this.waiting.length == 0">Empty!</h3>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import QueueTicket from '@/components/QueueTicket.vue'

export default {
    name: 'Queue',
    components: {
        QueueTicket
    },
    data() {
        return {
            tickets: [],
            interval: null,
        }
    },
    computed: {
        helping() {
            return this.$root.$data.queue.filter(ticket => ticket.waitSeconds).sort((first, second) => {
                return ((Math.floor(moment().diff(moment(second.enterTime)) / 1000) - second.waitSeconds) - 
                (Math.floor(moment().diff(moment(first.enterTime)) / 1000) - first.waitSeconds))
            });
        },
        waiting() {
            return this.$root.$data.queue.filter(ticket => !ticket.waitSeconds);
        }
    },
    methods: {
        async getTickets() {
            let res = await axios.get('/api/queue');
            this.$root.$data.queue = res.data.tickets;
        }
    },
    created() {
        this.getTickets();
        this.interval = setInterval(() => {
            this.getTickets();
        }, 5000);
    },
    destroyed() {
        clearInterval(this.interval);
    }
}
</script>

<style scoped>
.ticket {
    margin-bottom: 10px;
}
</style>
