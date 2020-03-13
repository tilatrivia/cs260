import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '../views/Join.vue'
import Waiting from '../views/Waiting.vue'
import Helped from '../views/Helped.vue'
import Queue from '../views/Queue.vue'
import Schedule from '../views/Schedule.vue'
import Stats from '../views/Stats.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Join',
        component: Join,
        meta: {
            title: "Join Help Queue"
        }
    },
    {
        path: '/wait',
        name: 'Waiting',
        component: Waiting,
        meta: {
            title: "Waiting in Help Queue"
        }
    },
    {
        path: '/helped',
        name: 'Helped',
        component: Helped,
        meta: {
            title: "Being Helped in Help Queue"
        }
    },
    {
        path: '/queue',
        name: 'Queue',
        component: Queue,
        meta: {
            title: "Help Queue"
        }
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule,
        meta: {
            title: "Help Queue Schedule"
        }
    },
    {
        path: '/stats',
        name: 'Stats',
        component: Stats,
        meta: {
            title: "Help Queue Statistics"
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            title: "Help Queue Settings"
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});

export default router
