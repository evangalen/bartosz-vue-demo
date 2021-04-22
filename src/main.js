import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles.css'
import HomePage from "@/pages/HomePage";
import DoneItemsPage from "@/pages/DoneItemsPage";

const routes = [
    { path: '/', component: HomePage },
    { path: '/done', component: DoneItemsPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app')
