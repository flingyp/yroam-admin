<template>
  <svg aria-hidden="true" :style="{ color: color }">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
    },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
<script lang="ts">
export default {
    name: 'SvgIcon',
};
</script>
