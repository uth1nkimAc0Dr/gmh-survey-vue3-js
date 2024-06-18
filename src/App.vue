<template>
  <div :class="containerClass">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// используем специальный контейнер на странице additional-survey
const containerClass = computed(() => {
  if (route.path === "/additional-survey") {
    return "additional-survey-container";
  }
  return "app-container";
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

// desktop
.app-container {
  max-width: 1280px;
  // width: 1280px;
  height: 1024px;
  background-color: #020b14;
  margin: 0 auto;
}
// desktop
.additional-survey-container {
  max-width: 1280px;
  height: 1024px;
  background-color: #020b14;
  margin: 0 auto;
}

// tablet
@media screen and (min-width: 376px) and (max-width: 1024px) {
  .app-container {
    max-width: 1024px;
    height: 768px;
  }

  .additional-survey-container {
    max-width: 1024px;
    // height: 904px;
    background-color: #020b14;
    margin: 0 auto;
  }
}

// mobile
@media screen and (max-width: 376px) {
  .app-container {
    width: 376px;
    height: 812px;
  }

  .additional-survey-container {
    max-width: 376px;
    height: 1056px;
  }
  // кроме additional survey, там будет 1056px
}
</style>
