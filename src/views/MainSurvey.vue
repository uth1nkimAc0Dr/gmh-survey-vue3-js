<template>
  <Header />
  <div class="main-survey-content">
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

const redirectTo = (path) => {
  router.push(path);
};

const checkIfSurveyCompleted = () => {
  const mainSurveyCompleted = localStorage.getItem("mainSurveyCompleted");

  //   "Это значит, что главный опрос уже был пройден, и пушим в additionalSurvey"
  if (mainSurveyCompleted === "true") {
    redirectTo("/additional-survey");
  }
};

onMounted(() => {
  checkIfSurveyCompleted();
});

const selectRating = (rating) => {
  selectedRating.value = rating;
  localStorage.setItem("selectedRating", rating);
  localStorage.setItem("mainSurveyCompleted", "true");

  router.push("/additional-survey");
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
}

.main-survey-content__image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 0px;
}

.main-survey-content__image {
  max-width: 456px;
  height: auto;
}

.main-survey-content__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 552px;
  padding: 10px;
  box-sizing: border-box;
  gap: 28px;

  .main-survey-content__form-header {
    width: 100%;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    color: white;
  }

  .main-survey-content__form-subheader {
    width: 100%;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: white;
  }
}

.main-survey-content__rating {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-survey-content__rating-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* gap: 10px; */
  flex-direction: row;
  flex-wrap: wrap;
}

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

// &-label {
//   font-family: Roboto, sans-serif;
//   font-size: 14px;
//   font-weight: 400;
// }

.main-survey-content__rating-captions {
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
  }

  .main-survey-content__image-container {
    width: 100%;

    height: auto;
  }

  .main-survey-content__image {
    width: 100%;
  }

  .main-survey-content__form {
    width: 100%;
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

  .main-survey-content__rating {
    align-items: center;
    height: Hug (118px) px;
  }

  .main-survey-content__rating-buttons {
    width: 100%;
    height: 90px;
    padding: 0px 60px 0px 60px;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .main-survey-content__rating-circles {
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

  .main-survey-content__caption {
    height: 20px;
    padding: 0px 32px 0px 32px;
    box-sizing: border-box;
  }
}
</style>
