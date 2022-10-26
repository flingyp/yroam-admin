import { routerInstance } from '@router/index'
import { piniaInstance } from '@store/index'
import { App, createApp } from 'vue'
import RootApp from './App.vue'
import { registerGlobalComponent } from './components/index'

import 'virtual:svg-icons-register'

import '@styles/InitialStyle.scss'

const app = createApp(RootApp)

const Initial = (application: App) => {
  registerGlobalComponent(app)
  application.use(routerInstance)
  application.use(piniaInstance)

  application.mount('#app')
}

// 初始化App应用
Initial(app)
