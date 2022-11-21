<template>
  <IconPark icon="full-screen" :size="16" v-if="!isFullscreen" @click="enter" />
  <IconPark icon="off-screen" :size="16" v-else @click="exit" />
</template>

<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core'

  const { isFullscreen, enter, exit } = useFullscreen()
</script>
