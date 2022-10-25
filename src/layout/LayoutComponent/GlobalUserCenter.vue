<template>
  <div class="global-user-center">
    <NPopselect
      v-model:value="popselectValue"
      :options="popselectOptions"
      trigger="hover"
      @update:value="clickPopselect"
    >
      <div class="user-info-container">
        <img src="@assets/Img/UserLogo.png" />
        <span>普通用户</span>
      </div>
    </NPopselect>
  </div>
</template>

<script setup lang="ts">
  import { removeLocalKey } from '@utils/index'
  import { NPopselect } from 'naive-ui'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const popselectOptions = [
    {
      label: '退出系统',
      value: 'ExitSystem'
    }
  ]

  const popselectValue = ref(null)

  // 退出系统需要做的事情
  const exitSystemFun = async () => {
    removeLocalKey('access-token')
  }

  const clickPopselect = async (value: string) => {
    if (value === 'ExitSystem') {
      await exitSystemFun()
      router.push({ name: 'LoginIndex' })
    }
  }
</script>

<style scoped lang="scss">
  .global-user-center {
    & > .user-info-container {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  }
</style>
