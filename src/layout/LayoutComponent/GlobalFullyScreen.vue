<template>
  <ViconsIcon icon="FullscreenOutlined" source="antd"
    :size="18" v-if="!isFullscreen" @click="enter" />
  <ViconsIcon icon="FullscreenExitOutlined" source="antd"
    :size="18" v-else @click="exit" />
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, enter, exit } = useFullscreen();
</script>
