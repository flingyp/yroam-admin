<template>
  <IconPark :type="icon" :size="size" />
</template>

<script setup lang="ts">
  import { IconPark } from '@icon-park/vue-next/es/all'

  interface IconParkProps {
    icon: string
    size?: number
  }

  withDefaults(defineProps<IconParkProps>(), {
    size: 18
  })
</script>
<script lang="ts">
  export default {
    name: 'IconPark'
  }
</script>
