<template>
    <div :class="{ 'queue-ticket': true, 'ticket-passoff': ticket.passoff }" @click="removeTicket()">
        <div class="ticket-header">
            <h3>{{ ticket.name }}</h3>
            <h3>{{ this.from }}</h3>
        </div>
        <p v-if="!ticket.passoff" class="ticket-message">{{ ticket.question }}</p>
    </div>
</template>


<script>
let moment = require('moment');

export default {
    name: 'QueueTicket',
    data() {
        return {
            from: null
        }
    },
    props: {
        ticket: Object
    },
    mounted() {
        this.from = setInterval(() => {
            this.updateFrom(); 
        },1000)
    },
    methods: {
        updateFrom() {
            this.from = moment().hours(0).minutes(0).seconds(0).millisecond(moment().diff(moment(this.ticket.time))).format("mm:ss")
        }
    }
}
</script>


<style scoped>
.queue-ticket {
    padding: 8px 10px;
    background-color: var(--gray-1);
}

.ticket-passoff {
    background-color: var(--passoff);
}

.ticket-header {
    display: flex;
    justify-content: space-between;
}
</style>