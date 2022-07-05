import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
const router = createRouter({
    history: createWebHistory().baseroutes: [{
        path: '/',
        component: () =>
            import ('/components/Home.vue')
    }]

})

createApp(App).mount('#app')