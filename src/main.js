import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuesax from 'vuesax-alpha'

import App from './App.vue'
import router from './router'

import 'vuesax-alpha/theme-chalk/index.css'

import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(Vuesax)

app.use(router)

app.mount('#app')
