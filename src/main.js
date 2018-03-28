import Vue from 'vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VModal, { dynamic: true })
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})