<template>
    <div class="page">
        <h2>Being Helped</h2>
        <QueueTicket class="ticket" v-for="ticket in helping" :key="ticket.id" :ticket="ticket"/>
        <h2>Queue</h2>
        <QueueTicket class="ticket" v-for="ticket in queue" :key="ticket.id" :ticket="ticket"/>
    </div>
</template>

<script>
import QueueTicket from '@/components/QueueTicket.vue'

export default {
    name: 'Queue',
    components: {
        QueueTicket
    },
    data: function() {
        return {
            helping: this.$root.$data.queue.helping,
            queue: this.$root.$data.queue.waiting,
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
