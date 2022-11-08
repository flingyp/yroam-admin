import { App } from 'vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch.vue'
import ViconsIcon from './ViconsIcon/ViconsIcon.vue'
import DataTable from './DataTable/DataTable.vue'

const ComponentList = [ViconsIcon, SvgIcon, ThemeSwitch, DataTable]

export const registerGlobalComponent = (app: App) => {
  ComponentList.forEach(component => {
    app.component(component.name, component)
  })
}

export * from './RenderIcon'
