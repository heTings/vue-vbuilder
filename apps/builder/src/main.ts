// 这里ts解析不了css，所以需要加个env.d.ts文件来声明一下
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { initBlocks } from './blocks'
import { router } from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(initBlocks()) // 插件化机制注册到全局
app.mount('#app')
