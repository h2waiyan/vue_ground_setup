import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/index'

const myapp = createApp(App)
myapp.use(store)

myapp.mount('#app')
