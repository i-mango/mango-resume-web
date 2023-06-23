import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// 动画 animate.css
import animate from "animate.css";

const app = createApp(App)
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(ElementPlus)
app.use(animate)
app.use(createPinia())
app.use(router)
app.mount('#app')
