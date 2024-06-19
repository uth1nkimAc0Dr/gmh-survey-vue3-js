<template>
  <Header />
  <div class="main-survey-content">
    <!-- <div class="main-survey-content__img"> -->
    <div class="main-survey-content__image-container">
      <img
        class="main-survey-content__image"
        src="@/assets/images/RutubeСountMeInNew.png"
        alt="Rutube Logo"
      />
    </div>

    <div class="main-survey-content__form">
      <h1 class="main-survey-content__form-header">Уважаемый клиент</h1>

      <div class="main-survey-content__form-subheader">
        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по
        данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже
        некуда» и 9 — «Отлично».
      </div>

      <div class="main-survey-content__rating">
        <div class="main-survey-content__rating-buttons">
          <div
            v-for="rating in ratings"
            :key="rating"
            class="rating-button"
            :class="{ active: selectedRating === rating }"
            @click="selectRating(rating)"
          >
            {{ rating }}
          </div>
        </div>

        <div class="main-survey-content__rating-captions">
          <div class="caption">Хуже некуда</div>
          <div class="caption">Отлично</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedRating = ref(null);
// const ratings = Array(10)
//   .fill(0)
//   .map((_, i) => i);
const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const checkIfSurveyCompleted = () => {
  const mainSurveyCompleted = localStorage.getItem("mainSurveyCompleted");
  const additionalSurveyCompleted = localStorage.getItem(
    "additionalSurveyCompleted"
  );
  if (mainSurveyCompleted === "true" && additionalSurveyCompleted === "true") {
    console.log("Это значит, что все окей, и пушим в already");
    router.push("/already-completed");
  }
  // можно вытащить его как true, если selectedRating имеется в localStorage
  //нужно добавить проверку selectedOptions: если там хоть что-то есть, то перекидывать
  if (mainSurveyCompleted === "true") {
    // console.log("mainSurveyCompleted is", mainSurveyCompleted);
    // console.log(
    //   "Это значит, что главный опрос пройден, и пушим в additionalSurvey"
    // );
    router.push("/additional-survey");
  }
};

onMounted(() => {
  checkIfSurveyCompleted();
});

const selectRating = (rating) => {
  selectedRating.value = rating;
  localStorage.setItem("selectedRating", rating);
  localStorage.setItem("mainSurveyCompleted", "true");

  const additionalSurveyCompleted = localStorage.getItem(
    "additionalSurveyCompleted"
  );

  const mainSurveyCompleted = localStorage.getItem("mainSurveyCompleted");
  if (
    (additionalSurveyCompleted === "true") &
    (mainSurveyCompleted === "true")
  ) {
    router.push("/thanks");
  }
  router.push("/additional-survey");
  // console.log("selectedRating ", JSON.stringify(selectedRating.value));
  // console.log("rating", JSON.stringify(rating));
};
</script>

<style lang="scss">
.main-survey-content {
  margin: 0 auto;
  max-width: 1052px;
  /* height: 468px; */
  width: 84%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 12px 0px;
  }
  &__image {
    max-width: 456px;
    height: auto;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 552px;
    padding: 10px;

    box-sizing: border-box;
    gap: 28px;

    &-header {
      width: 100%;
      font-family: Roboto;
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      text-align: center;
      color: white;
    }

    &-subheader {
      width: 100%;
      font-family: Roboto;
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      color: white;
    }
  }

  &__rating {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-buttons {
      width: 100%;
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      /* gap: 10px; */
      flex-direction: row;
      flex-wrap: wrap;

      .rating-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgba(31, 115, 249, 1);
        color: white;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }

      &-label {
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 400;
      }
    }
    &-captions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: #bfc9d4;
    }
  }
}

/* tablet*/
@media screen and (min-width: 376px) and (max-width: 1024px) {
  .main-survey-content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__image-container {
      /* max-width: 456px; */
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 12px 0px;
    }

    &__image {
      width: 100%;
      height: auto;
    }
  }
}

/* mobile */
@media screen and (max-width: 376px) {
  .main-survey-content {
    width: 100%;

    &__image-container {
      width: 100%;

      height: auto;
    }
    &__image {
      width: 100%;
    }

    &__form {
      width: 100%;
      /* height: 280px; */
      padding: 10px 16px 10px 16px;
      gap: 14px;

      display: flex;
      flex-direction: column;
      align-items: center;

      &-header {
        font-size: 22px;
        font-weight: 700;
        line-height: 35px;
        text-align: center;
      }

      &-subheader {
        font-family: Roboto;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
      }
    }

    &__rating {
      align-items: center;
      height: Hug (118px) px;

      &-buttons {
        width: 100%;
        height: 90px;
        padding: 0px 60px 0px 60px;
        justify-content: space-between;
        box-sizing: border-box;
      }

      &-circles {
        padding: 0px 60px 0px 60px;
        box-sizing: border-box;

        &-label {
          font-family: Roboto;
          line-height: 20px;
          text-align: center;
          font-family: Roboto, sans-serif;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .caption {
        /* width: 343px;*/
        height: 20px;
        padding: 0px 32px 0px 32px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
