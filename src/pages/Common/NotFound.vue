<template>
  <div class="not-found-container">
    <SvgIcon name="NotFound"></SvgIcon>
    <NButton type="primary">回首页</NButton>
  </div>
</template>

<script setup lang="ts">
  import { NButton } from 'naive-ui'
</script>

<style scoped lang="scss">
  .not-found-container {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 64px - 64px - 48px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 500px;
      height: 280px;
      margin-bottom: 40px;
    }

    & > .n-button {
      width: 300px;
      color: #fff;
    }
  }
</style>
