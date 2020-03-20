<template>
    <div class="page">
        <h2>Get Help</h2>
        <p>{{ this.queueMessage }}</p>
        <br>
        <div v-if="this.status === 'join'" class="join">
            <form id="create-ticket">
                <div>
                    <input type="checkbox" id="passoff" v-model="isPassoff" />
                    <label for="passoff">Pass Off</label>
                </div>
                <textarea name="question" v-model="question" />
                <button type="button" @click.prevent="submitTicket()">Join Queue</button>
            </form>
        </div>

        <div v-if="this.status === 'waiting'" class="waiting">
            <h3>Waited for {{ this.fromString }}</h3>
            <p class="question">{{ this.$root.$data.myTicket.question }}</p>
        </div>

        <div v-if="this.status === 'helped'" class="being helped">
            <h3>Helped for {{ this.fromString }}</h3>
            <p class="question">{{ this.$root.$data.myTicket.question }}</p>
        </div>
    </div>
</template>

<script>
let moment = require('moment');

export default {
    name: 'Join',
    data() {
        return {
            queueMessage: this.$root.$data.settings.message,
            isPassoff: false,
            question: "",
            fromSeconds: 0,
            interval: setInterval(() => {
                this.updateFrom();
            },200)
        }
    },
    computed: {
        fromString() {
            return (Math.floor(this.fromSeconds / 60)) + ':' + ((Math.abs(this.fromSeconds % 60) < 10) ? "0" : "") + Math.abs(this.fromSeconds % 60);
        },
        status() {
            if (this.$root.$data.myTicket && this.$root.$data.myTicket.waitSeconds === 0) {
                return 'waiting';
            }
            if (this.$root.$data.myTicket && this.$root.$data.myTicket.waitSeconds !== 0) {
                return 'helped';
            }
            return 'join';
        }
    },
    methods: {
        submitTicket() {
            this.$root.$data.myTicket = {
                id: this.getId(),
                name: this.$root.$data.user,
                enterTime: moment().format(),
                waitSeconds: 0,
                helpedSeconds: 0,
                helpedBy: "",
                isPassoff: this.isPassoff,
                question: this.question,
            }
            this.$root.$data.queue.push(this.$root.$data.myTicket);
        },
        getId() {
            let newId = this.$root.$data.nextId;
            this.$root.$data.nextId++;
            return newId;
        },
        updateFrom() {
            if (this.status === 'waiting' || this.status === 'helped') {
                this.fromSeconds = Math.floor(moment().diff(moment(this.$root.$data.myTicket.enterTime)) / 1000) - this.$root.$data.myTicket.waitSeconds;
            }
        },
    },
    mounted() {
        
    },
    destroyed() {
        console.log('"Join" being destroyed');
        clearInterval(this.interval);
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
    margin: 6px 0 10px;
}

#create-ticket button {
    height: 40px;
    color: var(--textLight);
    background-color: var(--mainColor);
}
</style>