<template>
  <div class="server-error-container">
    <SvgIcon name="ServerError"></SvgIcon>
    <NButton type="primary" @click="geMain">回首页</NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useSystemConfigStore } from '@store/index';
import { SystemHomeKey } from '@/CONSTANT';

const router = useRouter();
const SystemConfigStore = useSystemConfigStore();

const ContainerHeight = ref(SystemConfigStore.MainContainerHeight);
const geMain = () => router.push({ name: SystemHomeKey });
</script>

<style scoped lang="scss">
.server-error-container {
  box-sizing: border-box;
  width: 100%;
  height: v-bind(ContainerHeight);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &>svg {
    width: 500px;
    height: 280px;
    margin-bottom: 40px;
  }

  &>.n-button {
    width: 300px;
    color: #fff;
  }
}
</style>
