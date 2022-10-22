import { App } from 'vue'
import ViconsIcon from './ViconsIcon/ViconsIcon.vue'

const ComponentList = [ViconsIcon]

export const registerGlobalComponent = (app: App) => {
  ComponentList.forEach(component => {
    app.component(component.name, component)
  })
}
