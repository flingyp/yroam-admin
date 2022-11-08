<template>
  <div class="global-setting-container">
    <NDivider dashed>{{ title }}</NDivider>
    <div class="global-setting-container-content">
      <slot>默认内容</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { NDivider } from 'naive-ui'

  interface BasicContainerBox {
    title: string
  }

  withDefaults(defineProps<BasicContainerBox>(), {
    title: '默认标题'
  })
</script>

<style scoped lang="scss">
  .global-setting-container-content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
