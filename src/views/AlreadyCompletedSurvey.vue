<template>
  <Header />
  <div class="completed-survey__content">
    <div class="completed-survey__image">
      <img src="../SurveyIsCompletedImage.png" alt="Completed survey image" />
    </div>

    <div class="completed-survey__form">
      <div class="completed-survey--header">Вы уже прошли этот опрос</div>

      <div class="completed-survey--subheader">
        Спасибо, что делитесь мнением и помогаете нам быть лучше
      </div>

      <div class="completed-survey__button-container">
        <button class="completed-survey__button" @click="goToPlatform">
          Перейти на RUTUBE
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";

const goToPlatform = () => {
  window.location.href = "https://rutube.ru";
};
</script>

<style lang="scss">
.completed-survey {
  &__content {
    width: 84%;
    max-width: 1052px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__image {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 12px 0px;

    img {
      width: 50%;
      max-width: 524px;
      height: auto;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 552px;
    padding: 10px;
    gap: 28px;
  }

  &--header {
    width: 100%;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    color: white;
  }

  &--subheader {
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: white;
  }


  &__button-container {
    width: 222px;
    /* text-align: center; */
  }
  &__button {
    /* max-width: 222px;*/
    width: 100%;
    height: 44px;
    border-radius: 22px;
    padding: 12px 16px 12px 16px;
    background-color: var(--Blue-Accent, #00a1e7);
    /*  */
    border: 0px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: white;
    cursor: pointer;
  }
}
</style>
