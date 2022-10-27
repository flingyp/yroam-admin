<template>
  <div class="global-tab-item-container" :style="ActiveKey ? ActiveTabStyle : {}">
    <span>{{ menu.label }}</span>
    <ViconsIcon class="item-icon" icon="CloseOutlined" :size="14"></ViconsIcon>
  </div>
</template>

<script setup lang="ts">
  import { MenuOption } from 'naive-ui'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  interface GlobalTabItem {
    menu: MenuOption
  }

  const props = defineProps<GlobalTabItem>()

  const route = useRoute()

  const ActiveKey = computed(() => {
    if (props.menu.key === route.name) return true
    return false
  })
  const ActiveTabStyle = {
    border: '1px solid var(--primaryColor)',
    background: 'var(--primaryColor)',
    color: '#FFFFFF'
  }
</script>

<style scoped lang="scss">
  .global-tab-item-container {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 6px 4px;
    border-radius: 4px;
    cursor: pointer;

    & > span {
      margin: 2px;
    }

    & > .item-icon {
      width: 0;
      transition: width 0.25s linear;
    }

    &:hover .item-icon {
      width: 14px;
    }
  }
</style>
