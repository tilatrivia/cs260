<template>
    <div class="page">
        <h2>Queue History</h2>
        <form>
            <input type="search" v-model="studentSearch" placeholder="All Students"/>
            <input type="search" v-model="taSearch" placeholder="All TAs"/>
        </form>

        <div class="history-ticket history-header">
            <p class="name">Student Name</p>
            <p class="ta">Helped By</p>
            <p class="date">Date</p>
            <p class="time">Entered</p>
            <p class="waited">Waited</p>
            <p class="helped">Helped</p>
        </div>
        <div class="history-ticket" v-for="ticket in history" :key="ticket.id">
            <p class="name">{{ ticket.name }}</p>
            <p class="ta">{{ ticket.helpedBy }}</p>
            <p class="date">{{ ticket.enterTime | moment("MMM D") }}</p>
            <p class="time">{{ ticket.enterTime | moment("h:mma") }}</p>
            <p class="waited">{{ secondsToString(ticket.waitSeconds) }}</p>
            <p class="helped">{{ secondsToString(ticket.helpedSeconds) }}</p>
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

<style scoped>
.page {
    max-width: 800px;
    padding: 0 10px;
}

input {
    width: 295px;
    margin: 5px;
}

.history-ticket {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.history-ticket:nth-child(even) {
    background-color: var(--grey-50);
}

.history-header {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
}

.history-ticket p {
    overflow-wrap: normal;
    word-wrap: normal;
    overflow: hidden;
}

.history-ticket .name {
    width: 100%;
    text-align: center;
}

.history-ticket .ta {
    width: 100%;
    text-align: center;
}

.history-ticket .date {
    width: 25%;
    text-align: center;
}

.history-ticket .time {
    width: 25%;
    text-align: center;
}

.history-ticket .waited {
    width: 25%;
    text-align: center;
}

.history-ticket .helped {
    width: 25%;
    text-align: center;
}

@media only screen and (min-width: 410px) and (max-width: 739px) {
    .history-ticket .name {
        width: 50%;
        text-align: right;
        padding-right: 10px;
    }

    .history-ticket .ta {
        width: 50%;
        text-align: left;
    }

    .history-ticket .date {
        width: 25%;
        text-align: center;
    }

    .history-ticket .time {
        width: 25%;
        text-align: center;
    }

    .history-ticket .waited {
        width: 25%;
        text-align: center;
    }

    .history-ticket .helped {
        width: 25%;
        text-align: center;
    }
}

@media only screen and (min-width: 740px) {
    .history-ticket .name {
        width: 200px;
        text-align: left;
    }

    .history-ticket .ta {
        width: 200px;
        text-align: left;
    }

    .history-ticket .date {
        flex: 1 0 80px;
        text-align: center;
    }

    .history-ticket .time {
        flex: 1 0 80px;
        text-align: center;
    }

    .history-ticket .waited {
        flex: 1 0 80px;
        text-align: center;
    }

    .history-ticket .helped {
        flex: 1 0 80px;
        text-align: center;
    }   
}
</style>