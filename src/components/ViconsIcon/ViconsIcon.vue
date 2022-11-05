<template>
  <Icon :color="color" :size="size">
    <Component :is="IconComponent"></Component>
  </Icon>
</template>

<script setup lang="ts">
import * as $IconAntd from '@vicons/antd';
import * as $IonIcons5 from '@vicons/ionicons5';
import * as $IconMaterial from '@vicons/material';
import { Icon } from '@vicons/utils';
import { computed } from 'vue';

  type IconSource = 'antd' | 'ionicons5' | 'material'

// 注：如果想使用vicons的其他的系列的图标，先安装然后进行注册
const IconList: Record<IconSource, any> = {
    antd: $IconAntd,
    ionicons5: $IonIcons5,
    material: $IconMaterial,
};

  interface ViconsIconProps {
    icon: string
    source: IconSource
    color?: string
    size?: number
  }

const props = defineProps<ViconsIconProps>();

const IconComponent = computed(() => IconList[props.source][props.icon]);
</script>

<script lang="ts">
export default {
    name: 'ViconsIcon',
};
</script>
