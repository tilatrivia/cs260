<template>
    <div id="app">
        <div id="header">
            <div id="open-close">
                <button :class="{ 'open-button': true, open: this.$root.$data.open }" @click="toggleOpen()">{{ (this.$root.$data.open) ? "Open" : "Closed" }}
                </button>
            </div>
            <div id="queue-name">
                <h1 id="queue-name">{{ this.queueName }}</h1>
            </div>
            <div id="user-name">
                <p>{{ this.user }}</p>
            </div>
        </div>
        <div id="nav">
            <router-link to="/">Get Help</router-link>
            <router-link to="/queue">Queue</router-link>
            <router-link to="/history">History</router-link>

        </div>

        <router-view/>

        <div class="footer">
            <p>Made by Truman Kautzman.</p>
            <p>Source found on <a href="https://github.com/tilatrivia/cs260/tree/master/project3">GitHub</a>.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            queueName: this.$root.$data.settings.queueName,
            interval: null,
        }
    },
    computed: {
        user() {
            return this.$root.$data.user;
        }
    },
    methods: {
        async checkOpen() {
            let res = await axios.get('/api');
            this.$root.$data.open = res.data.open;
        },
        async toggleOpen() {
            this.$root.$data.open = !this.$root.$data.open;
            let res = await axios.put('/api', {open: this.$root.$data.open});
            this.$root.$data.open = res.data.open;
        },
        getRandomName() {
            let names = [
                "Faythe Smylie",
                "Veda Sellman",
                "Perle Thirlwall",
                "Karalee Thomassin",
                "Curry O'Carrol",
                "Denys Giraldez",
                "Thaddus Terbruggen",
                "Flossie Audley",
                "Nerita Lerwill",
                "Roda Albon",
                "Fenelia Gratten",
                "Anne-corinne Andrick",
                "Jedidiah Bardill",
                "Dorey Vedeniktov",
                "Raoul Kliment",
                "Abeu Wheelhouse",
                "Harwell Lapley",
                "Val Kitchenside",
                "Rodolph Robelin",
                "Brittaney Gladyer",
                "Mortimer Farrah",
                "Kassie Tatlowe",
                "Filia Fulep",
                "Carmella Hehir",
                "Rani Coaten",
                "Llywellyn Naris",
                "Analiese Libreros",
                "Bogart Kernock",
                "Sergei Seebright",
                "Natalie Corneille",
                "Joeann Chomiszewski",
                "Corinna Wiseman",
                "Conrad Tallquist",
                "Vania Iverson",
                "Kent Itzkovitch",
                "Deirdre Forst",
                "Dewie Maypes",
                "Gilburt Kalinovich",
                "Saudra Valois",
                "Druci Welch",
                "Zebulon Campos",
                "Justin Pywell",
                "Tann Sirett",
                "Jamey Chasemore",
                "Drucill Balentyne",
                "Dione Dillon",
                "Sean Kinder",
                "Gaynor Chalice",
                "Traci Layus",
                "Dulciana Fotheringham",
            ]

            return names[Math.floor(Math.random() * 50)]
        }
    },
    created() {
        this.$root.$data.user = this.getRandomName();
        this.checkOpen();
        this.interval = setInterval(() => {
            this.checkOpen();
        },5000)
    },
    destroyed() {
        clearInterval(this.interval);
    }
}
</script>

<style>
:root {
    --main: #002d5f;
    --main-light: #215fa5;

    --grey-50: #fafafa;
    --grey-100: #f5f5f5;
    --grey-200: #eeeeee;
    --grey-300: #e0e0e0;
    --grey-400: #bdbdbd;

    --text-light: #ffffff;
    --text-dark: #000000;

    --closed: #bb0000;
    --open: #00bb00;
    --passoff: #edd7b2;
}



* {
    margin: 0;
    box-sizing: border-box;
}

#app {
    position: relative;
    min-height: 100vh;
    padding-bottom: 88px;

    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: var(--text-dark);
}

h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    margin: 0;
    color: var(--text-light);
}

h2 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    margin: 20px 0 10px;
    color: var(--main);
}

h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--text-dark);
}

p {
    font-size: 18px;
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}

a {
    color: var(--main);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

ul {
    list-style-type: none;
    padding: 0;
}

button {
    padding: 5px;
    border: none;

    font-size: 18px;
    text-align: center;
    background-color: var(--grey-200);
}

button:hover,
button:focus {
    padding: 1px 5px 5px;
    border-top: 4px solid var(--main);
}

button:disabled {
    color: var(--grey-400);
    background-color: var(--grey-200);
}

button:disabled:hover {
    padding: 5px;
    border-top: none;
}

textarea,
input[type="text"],
input[type="search"] {
    padding: 10px;
    border: none;

    font-family: 'Open sans', sans-serif;
    font-size: 18px;
    background-color: var(--grey-50);

    resize: none;
}

textarea:disabled {
    background-color: var(--grey-200);
}

hr {
    margin: 20px auto;
    border-width: 2px;
    border-color: var(--main);
}

.page {
    max-width: 600px;
    margin: 20px auto;
}



#header {
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    color: var(--text-light);
    background-color: var(--main);
}

#open-close {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    order: 2;
}

button.open-button {
    display: inline-block;
    width: 80px;
    height: 35px;

    color: var(--textLight);
    background-color: var(--closed);
}

button.open {
    background-color: var(--open);
}

button.open-button:hover,
button.open-button:focus {
    padding: 5px;
    border-top: none;
}

#queue-name {
    width: 100%;
    text-align: center;
    order: 1;
}

#user-name {
    width: 100%;
    text-align: center;
    order: 3;
}

@media only screen and (min-width: 620px) {
    #header {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    #open-close {
        width: 100%;
        padding: 0;
        text-align: left;
        order: 1;
        flex: 1 0 80px;
    }

    #queue-name {
        width: 100%;
        text-align: center;
        order: 2;
        flex: 5;
    }

    #user-name {
        width: 100%;
        text-align: right;
        order: 3;
        flex: 1 0 80px;
    }
}


#nav {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--grey-300);
}

#nav a:link,
#nav a:visited {
    width: 100%;
    padding: 10px 0;

    font-size: 18px;
    text-decoration: none;
}

#nav a:hover {
    background-color: var(--grey-200);
}

#nav a.router-link-exact-active {
    background-color: var(--grey-100);
}

@media only screen and (min-width: 620px) {
    #nav {
        flex-direction: row;
        justify-content: center;
    }

    #nav a:link,
    #nav a:visited {
        width: 100px;
    }
}



.footer {
    height: 88px;
    width: 100%;
    padding: 20px;
    position: absolute;
    bottom: 0;

    line-height: 24px;
    background-color: var(--grey-300);
}
</style>
