<template>
  <IconPark :type="icon" :size="size" />
</template>

<script setup lang="ts">
  import { IconPark } from '@icon-park/vue-next/es/all'

  defineOptions({ name: 'IconPark' })

  interface IconParkProps {
    icon: string
    size?: number
  }

  withDefaults(defineProps<IconParkProps>(), {
    size: 18
  })
</script>
