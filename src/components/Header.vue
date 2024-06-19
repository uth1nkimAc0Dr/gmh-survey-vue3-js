<template>
  <header class="header">
    <div class="header__logo-container">
      <img src="@/assets/images/Rutube.png" alt="Rutube Logo" class="header__logo" />
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

  &__logo-container {
    width: 100%;
    padding: 28px 0;
    height: 96px;
    box-sizing: border-box;
  }

  &__logo {
    width: 148px;
    height: auto;
  }

  &__divider {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    display: flex;
    padding: 9px 0px;
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

    &__logo-container {
      max-width: 1024px;
      height: 80px;
      padding: 20px 0px 20px 20px;
    }
  }
}

@media screen and (max-width: 376px) {
  .header {
    width: 100%;
    max-width: 376px;

    &__logo-container {
      height: 80px;
      padding: 20px 0 20px 20px;
    }

    &__logo {
      width: 148px;
      height: auto;
    }
  }
}
</style>
