<template>
  <div class="not-found-container">
    <SvgIcon name="NotFound"></SvgIcon>
    <NButton type="primary" @click="geMain">回首页</NButton>
  </div>
</template>

<script setup lang="ts">
  import { NButton } from 'naive-ui'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // TODO: 回首页路由也需要配置
  const geMain = () => router.push({ name: 'AboutPageIndex' })
</script>

<style scoped lang="scss">
  .not-found-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
