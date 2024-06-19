<template>
  <Header />
  <div class="thanks-survey__content">
    <div class="thanks-survey__image">
      <img src="@/assets/images/ThanksImage.png" alt="Thank you image" />
    </div>
    <div class="thanks-survey__form">
      <div class="thanks-survey__form--header">Спасибо за обратную связь</div>
      <div class="thanks-survey__form--subheader">
        Это поможет нам улучшить сервис
      </div>
      <div class="thanks-survey__form__button-container">
        <button class="thanks-survey__form__button" @click="goToPlatform">
          Перейти на платформу
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
.thanks-survey {
  &__content {
    margin: 0 auto;
    width: 84%;
    max-width: 1052px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  &__image {
    width: 100%;
    // height: 256px;
    display: flex;
    justify-content: center;
    padding: 12px 0px;
    // align-items: center;
    img {
      width: 49.8%;
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
    }

    &__button {
      width: 100%;
      height: 44px;
      border-radius: 22px;
      border: 0px;
      padding: 12px 16px 12px 16px;
      background-color: var(--Blue-Accent, #00a1e7);
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }
  }
}

// tablet
@media screen and (min-width: 376px) and (max-width: 1024px) {
  .thanks-survey {
    &__content {
      width: 100%;
      max-width: 1024px;
    }

    &__image {
      width: 100%;
      max-width: 1024px;

      img {
        width: 52%;
        max-width: 524px;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .thanks-survey {
    &__content {
      // width: 376px;
      width: 100%;
      height: 336px;
    }

    &__image {
      width: 100%;
      max-width: 376px;
      img {
        width: 100%;
      }
    }
    &__form {
      width: 100%;

      padding: 10px 16px 10px 16px;
      gap: 14px;
    }
  }
}
</style>
