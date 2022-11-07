<template>
  <Suspense>
    <NConfigProvider :theme="ThemeMode" :theme-overrides="SystemConfigStore.NaiveUiGlobalThemeOverrides">
      <NNotificationProvider>
        <NDialogProvider>
          <NMessageProvider>
            <RouterView></RouterView>
          </NMessageProvider>
        </NDialogProvider>
      </NNotificationProvider>
    </NConfigProvider>
  </Suspense>
</template>

<script setup lang="ts">
import { useSwitchTheme } from '@hooks/index';
import { useSystemConfigStore } from '@store/index';
import type { GlobalTheme } from 'naive-ui';
import {
  darkTheme, NConfigProvider, NMessageProvider, NNotificationProvider, NDialogProvider,
} from 'naive-ui';
import { computed } from 'vue';

const SystemConfigStore = useSystemConfigStore();

const { getThemeMode, setThemeMode } = useSwitchTheme();

const ThemeMode = computed<GlobalTheme | null>(() => {
  if (SystemConfigStore.ThemeMode === 'LIGHT') return null;
  return darkTheme;
});

setThemeMode(getThemeMode());
</script>

<style scoped lang="scss">
.n-config-provider {
  width: 100vw;
  height: 100vh;
}
</style>
