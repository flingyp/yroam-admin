<template>
  <div class="global-logo-title-container">
    <img src="@assets/Img/YRoamLogo.png" alt="YRoam Logo" />
    <h1>YRoam Admin</h1>
  </div>
</template>

<style scoped lang="scss">
  .global-logo-title-container {
    height: 100%;
    display: flex;
    align-items: center;

    & > img {
      width: 30px;
      height: 30px;
      margin-right: 6px;
      vertical-align: bottom;
    }

    & > h1 {
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 24px;
    }
  }
</style>
