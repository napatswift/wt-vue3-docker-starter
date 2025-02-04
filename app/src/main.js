import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/index.css'
import 'flowbite';

const app = createApp(App)

const axiosInstance = axios.create({
  baseURL: 'https://cs442-651-nptswt-0967.loca.lt/api'
})

app.config.globalProperties.$axios = { ...axiosInstance }

app.use(createPinia())
app.use(router)

app.mount('#app')
