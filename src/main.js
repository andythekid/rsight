import Vue from 'vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import App from './App.vue'
import { routes } from './routes'
import { store } from './Store/Store'

Vue.use(VModal, { dynamic: true })
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})