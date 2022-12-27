import { createVNode, h } from 'vue'
import IconPark from './IconPark/IconPark.vue'

export function renderIcon(iconLabel: string, size?: number) {
  return () => h(IconPark, { icon: iconLabel, size })
}
