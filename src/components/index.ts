import { App } from 'vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import ViconsIcon from './ViconsIcon/ViconsIcon.vue'

const ComponentList = [ViconsIcon, SvgIcon]

export const registerGlobalComponent = (app: App) => {
  ComponentList.forEach(component => {
    app.component(component.name, component)
  })
}
