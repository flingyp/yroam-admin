<template>
  <ViconsIcon
    icon="SettingsOutline"
    source="ionicons5"
    :size="18"
    style="cursor: pointer"
    @click="toggleDrawer"
  ></ViconsIcon>
</template>

<script setup lang="ts">
import { useSystemConfigStore } from '@store/index';

const SystemConfigStore = useSystemConfigStore();

const toggleDrawer = () => {
  SystemConfigStore.SettingDrawer = true;
};
</script>
