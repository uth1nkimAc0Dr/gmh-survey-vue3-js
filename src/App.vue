<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.app-container {
  width: 1280px;
  height: 1024px;
  background-color: #020b14;
  margin: 0 auto;
  padding: 0px 40px;
  box-sizing: border-box;
}
@media screen and (max-width: 1024px) {
  .app-container {
    max-width: 1024px;
    height: 768px;
  }
}
</style>
