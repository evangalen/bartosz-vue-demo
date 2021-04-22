import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles.css'
import TodoItemsPage from "@/pages/TodoItemsPage";
import DoneItemsPage from "@/pages/DoneItemsPage";

const routes = [
    { path: '/', component: TodoItemsPage },
    { path: '/done', component: DoneItemsPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app')
