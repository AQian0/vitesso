import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import './styles/base.css'
import 'overlayscrollbars/overlayscrollbars.css'
import './styles/main.css'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
const pinia = createPinia()

app.use(pinia)
app.use(PiniaColada)
app.use(router)
app.mount('#app')
