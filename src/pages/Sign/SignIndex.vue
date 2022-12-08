<template>
  <div class="sign-container">
    <div class="sign__form-container">
      <SvgIcon class="sign__left-container" name="SignViewLogo" />
      <SignIn class="sign__right-container" />
    </div>

    <div class="sign__system-title-container">
      <img src="@assets/Img/YRoamLogo.png" />
      <p>YRoam Admin</p>
    </div>

    <div class="sign__theme-switch-container">
      <ThemeSwitch />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SignIn from './SignIn.vue'
</script>

<style scoped lang="scss">
  @import './SignIndex.scss';
</style>
