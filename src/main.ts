import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import './style/base.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// createApp(App).use(store).use(ElementPlus).use(router).mount('#app')

app.config.globalProperties.$axios = axios
