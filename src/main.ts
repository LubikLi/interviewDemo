import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
// import en from './locales/en.json';
// import zh from './locales/zh.json';
let en = {
  translate: {
    add: 'add',
    modify: 'modify',
    delete: 'delete'
  }
}
let zh =  {
  translate: {
    add: '新增',
    modify: '修改',
    delete: '删除',
  }
}
const i18n = createI18n({
  legacy: false,  // 设置为 false，启用 composition API 模式
  messages: {
    en,
    zh
  },
  locale: 'zh'  // 设置默认语言
})


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(ElementPlus)
app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
