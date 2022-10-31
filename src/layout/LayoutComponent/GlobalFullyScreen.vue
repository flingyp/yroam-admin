<template>
  <ViconsIcon icon="FullscreenOutlined" :size="18" v-if="!isFullscreen" @click="enter"></ViconsIcon>
  <ViconsIcon icon="FullscreenExitOutlined" :size="18" v-else @click="exit"></ViconsIcon>
</template>

<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core'

  const { isFullscreen, enter, exit } = useFullscreen()
</script>
