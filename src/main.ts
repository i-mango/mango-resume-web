import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// // element plus
// import ElementPlus from "element-plus";
// // element icons
// import * as Icons from "@element-plus/icons-vue";
// // element css
// import "element-plus/dist/index.css";
// // 动画 animate.css
// import animate from "animate.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
