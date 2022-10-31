import { createVNode } from 'vue'
import ViconsIcon from './ViconsIcon/ViconsIcon.vue'

export const renderIcon = (icon: string, source: string, color?: string, size?: number) => {
  return () =>
    createVNode(ViconsIcon, {
      icon,
      source,
      color,
      size
    })
}
