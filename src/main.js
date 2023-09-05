import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuesax from 'vuesax-alpha'

import App from './App.vue'
import router from './router'

import 'vuesax-alpha/theme-chalk/index.css'
import './assets/base.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(Vuesax, {
  colors: {
    primary: '#8b70cd',
    success: '#aa96da',
    danger: '#ffff97',
    warning: '#ffffff',
    dark: '#000',
  },
})

app.use(router)

app.mount('#app')
