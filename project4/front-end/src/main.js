import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

// import mock from './mock-data.js'

let data = {
    open: true,
    user: "Demo User",
    myTicket: undefined,
    queue: [],
    settings: {
        queueName: "Help Queue",
        message: "Leave a question below. If you need to do a passoff enable the passoff button."
    }
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')
