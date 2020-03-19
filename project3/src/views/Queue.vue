<template>
    <div class="page">
        <h2>Being Helped</h2>
        <QueueTicket class="ticket" v-for="ticket in helping" :key="ticket.id" :ticket="ticket"/>
        <h3 v-if="this.helping.length == 0">Empty!</h3>
        <h2>Queue</h2>
        <QueueTicket class="ticket" v-for="ticket in waiting" :key="ticket.id" :ticket="ticket"/>
        <h3 v-if="this.waiting.length == 0">Empty!</h3>
    </div>
</template>

<script>
import QueueTicket from '@/components/QueueTicket.vue'

export default {
    name: 'Queue',
    components: {
        QueueTicket
    },
    computed: {
        helping() {
            return this.$root.$data.queue.filter(ticket => ticket.waitSeconds);
        },
        waiting() {
            return this.$root.$data.queue.filter(ticket => !ticket.waitSeconds);
        }
    }
}
</script>

<style scoped>
.page {
    max-width: 600px;
    margin: 0 auto;
}

.ticket {
    margin-bottom: 10px;
}
</style>
