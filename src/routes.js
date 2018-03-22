import Home from './components/Home.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Rigs from './components/Rigs/Rigs.vue'
import Settings from './components/Settings/Settings.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/rigs', component: Rigs },
    { path: '/settings', component: Settings }
]