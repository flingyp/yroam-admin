<template>
  <div>
    <NCard hoverable size="small">
      <div class="iconpark-container">
        <IconPark v-for="(item, index) in IconList" :key="index" :icon="item" :size="22" />
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
  import { NCard } from 'naive-ui'

  const IconList = [
    'aiming',
    'all-application',
    'bill',
    'bookmark',
    'bookmark-one',
    'camera',
    'config',
    'delete-two',
    'dislike',
    'dislike-two',
    'equalizer',
    'hamburger-button',
    'home',
    'lightning',
    'like',
    'loading',
    'loading-four',
    'male',
    'more',
    'more-app',
    'more-one',
    'more-two',
    'pic',
    'power',
    'preview-close',
    'preview-close-one',
    'preview-open',
    'alarm',
    'balance-two',
    'bug',
    'caution',
    'fire-extinguisher',
    'harm',
    'imbalance',
    'key',
    'keyhole',
    'protect',
    'protection',
    'radiation',
    'report',
    'shield',
    'shield-add',
    'umbrella',
    'umbrella-one',
    'umbrella-two',
    'add-four',
    'add-item',
    'add-mode',
    'add-pic',
    'add-subset',
    'add-text',
    'add-text-two',
    'add-three',
    'adjacent-item',
    'adjustment',
    'afferent',
    'afferent-two',
    'align-bottom',
    'align-bottom-two',
    'align-horizontal-center-two',
    'angry-face',
    'anguished-face',
    'astonished-face',
    'confounded-face',
    'confused-face',
    'disappointed-face',
    'distraught-face'
  ]
</script>

<style scoped lang="scss">
  .iconpark-container {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-gap: 20px 40px;
  }
</style>
