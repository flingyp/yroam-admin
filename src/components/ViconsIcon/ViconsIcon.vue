<template>
  <Icon :color="color" :size="size">
    <Component :is="IconComponent"></Component>
  </Icon>
</template>

<script setup lang="ts">
  import * as $IonIcons5 from '@vicons/ionicons5'
  import { Icon } from '@vicons/utils'
  import { computed } from 'vue'

  // 注：如果想使用vicons的其他的系列的图标，先安装然后进行注册
  const IconList = {
    ...$IonIcons5
  }

  interface ViconsIconProps {
    icon: string
    color?: string
    size?: number
  }

  const props = defineProps<ViconsIconProps>()

  // @ts-expect-error
  const IconComponent = computed(() => IconList[props.icon])
</script>

<script lang="ts">
  export default {
    name: 'ViconsIcon'
  }
</script>
