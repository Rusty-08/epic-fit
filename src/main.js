import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.component('icon', FontAwesomeIcon)

app.use(MotionPlugin)
app.use(router)

app.mount('#app')