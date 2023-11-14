import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Vue/Home.vue'
import AboutUs from './components/Vue/AboutUs.vue'
import Community from './components/Vue/Community.vue'
import ContactUs from './components/Vue/ContactUs.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/community', component: Community },
    { path: '/contact-us', component: ContactUs },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router