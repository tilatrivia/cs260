<template>
    <div id="app">
        <div id="header">
            <div id="open-close">
                <button :class="{ 'open-button': true, open: this.open }" @click="toggleOpen()">{{ (this.open) ? "Open" : "Closed" }}
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
            <router-link to="/">Join</router-link>
            <router-link to="/queue">Queue</router-link>
            <router-link to="/schedule">Schedule</router-link>
            <router-link to="/stats">Statistics</router-link>
            <router-link to="/settings">Settings</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            user: this.$root.$data.user,
            open: true,
            queueName: this.$root.$data.settings.queueName,
        }
    },
    methods: {
        toggleOpen: function() {
            if (this.open) {
                this.open = false;
                this.closeQueue();
            } else {
                this.open = true;
            }
        },
        closeQueue: function() {
            console.log("TODO: Closing Queue");
        }
    }
}
</script>

<style>
:root {
    --mainColor: #002d5f;

    --gray-1: #eeeeee;
    --gray-2: #e4e4e4;
    --gray-3: #dddddd;

    --textLight: #ffffff;
    --textDark: #000000;

    --closed: #bb0000;
    --open: #00bb00;
    --passoff: #edd7b2;
    --remove: #edb9b2;
    --help: #bcedb2;
}



* {
    margin: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--textDark);
}

h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    margin: 0;
    color: var(--textLight);
}

h2 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    margin: 20px 0 10px;
    color: var(--mainColor);
}

h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--textDark);
}

p {
    font-size: 18px;
    margin: 0;
}

a {
    color: var(--mainColor);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

ul {
    list-style-type: none;
    padding: 0;
}



#header {
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    color: var(--textLight);
    background-color: var(--mainColor);
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
    padding: 5px;
    
    order: 2;
    text-align: center;
    font-size: 18px;
    text-decoration: none;

    color: var(--textLight);
    background-color: var(--closed);
    border: none;
}

button.open {
    background-color: var(--open);
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

    background-color: var(--gray-3);
}

#nav a:link,
#nav a:visited {
    width: 100%;
    padding: 10px 0;

    font-size: 18px;
    text-decoration: none;
}

#nav a:hover {
    background-color: var(--gray-2);
}

#nav a.router-link-exact-active {
    background-color: var(--gray-1);
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
</style>
