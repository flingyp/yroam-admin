import { createVNode } from 'vue'
import ViconsIcon from './ViconsIcon/ViconsIcon.vue'

export const renderIcon = (icon: string, color?: string, size?: number) => {
  return () =>
    createVNode(ViconsIcon, {
      icon,
      color,
      size
    })
}
