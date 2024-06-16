<template>
  <Header />
  <div class="main-survey-content">
    <div class="main-survey-content__img">
      <img
        class="main-survey-content__img-element"
        src="../RutubeСountMeInNew.png"
        alt="Rutube Logo"
      />
    </div>
    <div class="main-survey-content__form">
      <div class="main-survey-content__form-header">Уважаемый клиент</div>

      <div class="main-survey-content__form-text">
        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по
        данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже
        некуда» и 9 — «Отлично».
      </div>

      <div class="main-survey-content__rating">
        <div class="main-survey-content__rating-circles">
          <div
            v-for="rating in ratings"
            :key="rating"
            class="circle"
            :class="{ active: selectedRating === rating }"
            @click="selectRating(rating)"
          >
            {{ rating }}
          </div>
        </div>
        <div class="caption">
          <div>Хуже некуда</div>
          <div>Отлично</div>
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
    console.log("mainSurveyCompleted is", mainSurveyCompleted);
    console.log(
      "Это значит, что главный опрос пройден, и пушим в additionalSurvey"
    );
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
  width: 84%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__img {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 12px 0px;

    /* // gap: 0px;
    // opacity: 0px; */
    &-element {
      /* width: 100%; */
      max-width: 456px;
      height: 200px;
    }
  }
  /* &__img  */
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 552px;
    padding: 10px;
    /* background-color: white; */
    gap: 28px;

    &-header {
      /* //styleName: h1; */
      width: 100%;
      font-family: Roboto;
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      text-align: center;
      color: white;
    }

    &-text {
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
    /* max-width: 530px; */
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-circles {
      width: 100%;
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      /* gap: 10px; */
      flex-direction: row;
      flex-wrap: wrap;

      .circle {
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
    .caption {
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* color: rgba(191, 201, 212, 1); */
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: #bfc9d4;
    }
  }
}
@media screen and (max-width: 1024px) {
}
</style>
