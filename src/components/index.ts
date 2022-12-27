import { App } from 'vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch.vue'
import EchartContainer from './EchartContainer/EchartContainer.vue'
import IconPark from './IconPark/IconPark.vue'
import CommonCurd from './CommonCurd/CommonCurd.vue'

const ComponentList = [SvgIcon, ThemeSwitch, EchartContainer, IconPark, CommonCurd]

export const registerGlobalComponent = (app: App) => {
  ComponentList.forEach(component => {
    app.component(component.name, component)
  })
}

export * from './RenderIcon'
