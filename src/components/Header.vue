<template>
  <header class="header">
    <div class="header__image-container">
      <img src="../Rutube.png" alt="Rutube Logo" class="header__image" />
    </div>
    <div class="header__divider">
      <div class="header__line"></div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.header {
  width: 84%;
  max-width: 1052px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // gap:10px;
  // не видел смысла в данном случае использовать gap

  &__image-container {
    width: 100%;
    padding: 28px 0px 28px 0px;
    height: 96px;
    box-sizing: border-box;
    gap: 10px;
  }

  &__image {
    width: 148px;
    height: auto;
    // height: 40px;
  }

  &__divider {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    display: flex;
    padding: 9px 0px 9px 0px;
    gap: 10px;
    // align-items: center;
  }
  &__line {
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      #0699db 0%,
      #2d5e87 25%,
      #2e2a3f 50%,
      #341926 75%,
      #150c15 100%
    );
  }
}

@media screen and (min-width: 376px) and (max-width: 1024px) {
  .header {
    width: 100%;
    max-width: 1024px;
    // height: 80px;
    // padding: 20px;
    // box-sizing: border-box;

    &__image-container {
      max-width: 1024px;
      height: 80px;
      box-sizing: border-box;
      padding: 20px 0px 20px 20px;
      gap: 10px;
    }
  }
}

@media screen and (max-width: 376px) {
  .header {
    width: 100%;
    max-width: 376px;

    &__image-container {
      // width: 100%;
      height: 80px;
      height: 80px;
      // box-sizing: border-box;
      padding: 20px 0px 20px 20px;
      // gap: 10px;
    }

    &__image {
      width: 148px;
      height: auto;
      // height: 40px;
    }

    // &__divider {
    // width: 100%;
    // height: 20px;
    // box-sizing: border-box;
    // display: flex;
    // padding: 9px 0px 9px 0px;
    // gap: 10px;
    // align-items: center;
    // }
  }
}
</style>

<!-- header gap:10px -->
