import { createApp } from 'vue'
import store from './store'
import router from './router';


import './style/style.css'
import '@/style/base.css'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.use(store)
app.mount('#app')