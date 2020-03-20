import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

import mock from './mock-data.js'

let data = {
    user: "Demo User",
    nextId: mock.nextId,
    myTicket: undefined,
    queue: mock.queue,
    schedule: mock.schedule,
    stats: mock.stats,
    settings: mock.settings,
    history: mock.history
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')
