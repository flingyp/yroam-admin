import { piniaInstance } from '@store/index'
import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponent } from './components/index'

import 'virtual:svg-icons-register'

import '@styles/DarkTheme.scss'
import '@styles/InitialStyle.scss'
import '@styles/LightTheme.scss'

const app = createApp(App)

// TODO: 组件注册、插件注册需要统一
registerGlobalComponent(app)
app.use(piniaInstance)

app.mount('#app')
