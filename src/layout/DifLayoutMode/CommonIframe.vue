<template>
  <iframe :src="$route.meta.url"></iframe>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()

  const ContainerHeight = ref(SystemConfigStore.MainContainerHeight)
</script>

<style scoped>
  iframe {
    width: 100%;
    height: v-bind(ContainerHeight);
    border-radius: 4px;
  }
</style>
