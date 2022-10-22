import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponent } from './components/index'

const app = createApp(App)

// TODO: 组件注册、插件注册需要统一
registerGlobalComponent(app)

app.mount('#app')
