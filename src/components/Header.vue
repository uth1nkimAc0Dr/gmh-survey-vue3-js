<template>
  <header class="header">
    <div class="header__logo-container">
      <img src="../Rutube.png" alt="Rutube Logo" class="header__logo" />
    </div>
    <div class="header__divider"></div>
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
    padding: 28px 0px 28px 0px;
  }
  &__logo {
    width: 148px;
    height: 40px;
  }

  &__divider {
    width: 100%;
    height: 20px;
    max-width: 1052px;
    display: flex;
    align-items: center;
    &::after {
      content: "";
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
}
@media screen and (max-width: 1024px) {
  .header {
    width: 100%;
  }
}
</style>

<!-- header gap:10px -->
