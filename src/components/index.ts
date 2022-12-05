import { App } from 'vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch.vue'
import DataTable from './DataTable/DataTable.vue'
import EchartContainer from './EchartContainer/EchartContainer.vue'
import IconPark from './IconPark/IconPark.vue'

const ComponentList = [SvgIcon, ThemeSwitch, DataTable, EchartContainer, IconPark]

export const registerGlobalComponent = (app: App) => {
  ComponentList.forEach(component => {
    app.component(component.name, component)
  })
}

export * from './RenderIcon'
