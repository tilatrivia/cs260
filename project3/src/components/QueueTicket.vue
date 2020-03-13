<template>
    <div :class="{ 'queue-ticket': true, 'ticket-passoff': ticket.isPassoff }">
        <p class="ticket-name">{{ ticket.name }}</p>
        <p class="ticket-time">{{ ticket.time }}</p>
        <p class="ticket-message">{{ ticket.message }}</p>
    </div>
</template>


<script>
export default {
    name: 'QueueTicket',
    computed: {
        ticket() {
            return this.key;
        }
    },
    props: {
        key: Object
    }
}
</script>


<style scoped>

</style>