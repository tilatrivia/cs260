<template>
    <div class="page">
        <h2>Statistics</h2>
        <h3>Features to Add</h3>
        <ul>
            <li>Chart of Entry Times</li>
            <li>Chart of Wait Times</li>
            <li>Chart of Help Times</li>
            <li>Various Averages</li>
            <li>Help Counts for Students and TAs</li>
        </ul>
        <br>

        <h3>Queue History</h3>
        <form class="pure-form">
            <label for="fname">Student Search</label><br>
            <input type="search" v-model="studentSearch" /><br>
            <label for="fname">TA Search</label><br>
            <input type="search" v-model="taSearch" /><br>
        </form>

        <div class="history-ticket" v-for="ticket in history" :key="ticket.id">
            <h3>{{ ticket.name }}</h3>
            <p>{{ ticket.helpedBy }}</p>
            <p>{{ ticket.enterTime | moment("MMM D") }}</p>
            <p>{{ ticket.enterTime | moment("h:mma") }}</p>
            <p>{{ secondsToString(ticket.waitSeconds) }}</p>
            <p>{{ secondsToString(ticket.helpedSeconds) }}</p>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            studentSearch: "",
            taSearch: ""
        }
    },
    computed: {
        history() {
            return this.$root.$data.history.filter(ticket => {
                return ((ticket.name.toLowerCase().search(this.studentSearch.toLowerCase()) >= 0) &&
                    (ticket.helpedBy.toLowerCase().search(this.taSearch.toLowerCase()) >= 0))
            });
        }
    },
    methods: {
        secondsToString(seconds) {
            return (Math.floor(seconds / 60)) + ':' + ((Math.abs(seconds % 60) < 10) ? "0" : "") + Math.abs(seconds % 60);
        }
    }
}
</script>