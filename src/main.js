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

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App);

app.use(router);

app.mount('#app')
