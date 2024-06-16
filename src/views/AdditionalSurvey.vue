<template>
  <Header />
  <div class="additional-survey-content">
    <div class="additional-survey-content__header">
      Пожалуйста, отвеьте на дополнительные вопросы
    </div>

    <div
      class="additional-survey-content__question"
      v-for="(question, index) in questions"
      :key="index"
      :class="{
        'additional-survey-content__question--first': question.id === 1,
      }"
    >
      <div class="additional-survey-content__question-text">
        <!-- {{ index + 1 }}.  -->
        {{ question.text }}
      </div>

      <div class="additional-survey-content-options">
        <div
          class="additional-survey-content-option"
          v-for="option in question.options"
          :key="option.id"
          :class="{ selected: isSelected(question.id, option.id) }"
          @click="selectOption(question.id, option.id)"
        >
          <div class="additional-survey-content-option-text">
            {{ option.text }}
          </div>
        </div>
      </div>
    </div>

    <div class="additional-survey-content__img-container">
      <img
        src="../AppImage.png"
        alt="Rutube Logo"
        class="additional-survey-content__img"
      />
    </div>

    <div class="additional-survey-content__submit-container">
      <button
        class="additional-survey-content__submit"
        @click="submitSurvey"
        :disabled="!allQuestionsAnswered"
      >
        Отправить ответы
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";

const router = useRouter();
const questions = ref([
  {
    id: 1,
    text: "1. Как быстро вы получили ответ от клиентского сервиса RUTUBE?",
    options: [
      { id: 1, text: "Быстрее, чем ожидал  " },
      { id: 2, text: "Как я ожидал" },
      { id: 3, text: "Медленнее, чем я ожидал " },
    ],
  },
  {
    id: 2,
    text: "2. Клиентский сервис RUTUBE помог в решении проблемы?",
    options: [
      { id: 1, text: 1 },
      { id: 2, text: 2 },
      { id: 3, text: 3 },
      { id: 4, text: 4 },
      { id: 5, text: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Специалист RUTUBE хорошо изъяснялся и владел языком?*",
    options: [
      { id: 1, text: 1 },
      { id: 2, text: 2 },
      { id: 3, text: 3 },
      { id: 4, text: 4 },
      { id: 5, text: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Специалист RUTUBE был отзывчив?",
    options: [
      { id: 1, text: 1 },
      { id: 2, text: 2 },
      { id: 3, text: 3 },
      { id: 4, text: 4 },
      { id: 5, text: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Специалист RUTUBE был компетентен?",
    options: [
      { id: 1, text: 1 },
      { id: 2, text: 2 },
      { id: 3, text: 3 },
      { id: 4, text: 4 },
      { id: 5, text: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?*",
    options: [
      { id: 0, text: 0 },
      { id: 1, text: 1 },
      { id: 2, text: 2 },
      { id: 3, text: 3 },
      { id: 4, text: 4 },
      { id: 5, text: 5 },
      { id: 6, text: 6 },
      { id: 7, text: 7 },
      { id: 8, text: 8 },
      { id: 9, text: 9 },
      { id: 10, text: 10 },
    ],
  },
]);

const selectedOptions = ref({});
const allQuestionsAnswered = computed(
  () => Object.keys(selectedOptions.value).length === questions.value.length
);

const loadSelectedOptions = () => {
  const mainSurveyCompleted = localStorage.getItem("mainSurveyCompleted");
  const additionalSurveyCompleted = localStorage.getItem(
    "additionalSurveyCompleted"
  );
  if (mainSurveyCompleted !== "true") {
    console.log("mainSurveyCompleted we need");
    router.push("/");
  }
  if (additionalSurveyCompleted === "true" && mainSurveyCompleted === "true") {
    console.log("все пройдено");
    router.push("/already-completed");
  }

  // если главный опрос не пройден, то пушим в mainSurvey
  // потому что необходимо заставить человека пройти
  // !Но бывает такое, что при в main-survey выборе циклит и страница зависает, не переходя в additional-survey
  // if (mainSurveyCompleted === "null");
  // {
  //   router.push("/");
  //   console.log("mainSurveyCompleted is null, so push to mainSurvey");
  // }
  // если расширенный опрос пройден, то отправляем его в already
  if (additionalSurveyCompleted === "true") {
    console.log("additionalSurveyCompleted is", additionalSurveyCompleted);
    console.log("Это значит, что расширенный опрос пройден, и пушим в already");
    router.push("/already-completed");
  }
  // проверка на заполнение всех selectedOptions: если все заполнено, то надо человека перекинуть в AlreadyCS.vue
  const storedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
  if (storedOptions) {
    selectedOptions.value = storedOptions;
  }
};

const isSelected = (questionId, optionId) =>
  selectedOptions.value[questionId] === optionId;

const selectOption = (questionId, optionId) => {
  selectedOptions.value[questionId] = optionId;
  saveSelectedOptions();
};

const saveSelectedOptions = () => {
  localStorage.setItem(
    "selectedOptions",
    JSON.stringify(selectedOptions.value)
  );
};

const submitSurvey = () => {
  localStorage.setItem("additionalSurveyCompleted", "true");
  router.push("/thanks");
  if (allQuestionsAnswered.value) {
    const selectedRating = localStorage.getItem("selectedRating");
    const surveyResponses = {
      mainrating: selectedRating,
      questions: [],
    };
    for (const questionID in selectedOptions.value) {
      if (selectedOptions.value.hasOwnProperty(questionID)) {
        surveyResponses.questions.push({
          questionID: parseInt(questionID),
          responseID: selectedOptions.value[questionID],
        });
      }
    }

    console.log("Survey Responses:", surveyResponses);
    console.log("additionalSurveyCompleted затрушили");
  }
};

onMounted(() => {
  loadSelectedOptions();
});
</script>

<style lang="scss">
.additional-survey-content {
  margin: 0 auto;
  width: 84%;
  max-width: 1052px;
  color: white;
  gap: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px 24px 0px;
  position: relative;
  //
  &__header {
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
  &__question {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &--first .additional-survey-content-options {
      display: flex;
      flex-direction: column;
    }
    &--first .additional-survey-content-option {
      box-sizing: border-box;
      width: 200px;
      padding: 0px 16px 0px 16px;
      justify-content: flex-start;
      &-text {
        //styleName: h3;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
      }
    }
    //  > .additional-survey-content.options {
    //   display: flex;
    //   flex-direction: column;
    // }
    &-text {
      // gap: 2px;
      font-style: Roboto;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }
  &-options {
    gap: 8px;
    // width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    .selected {
      border: 1px solid yellow;
    }
  }
  &-option {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1f73f9;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    opacity: 0px;
    cursor: pointer;
    // font-size: 14px;
    &-text {
      //styleName: caption;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
    }
  }

  &__submit-container {
    width: 222px;
  }

  &__submit {
    width: 100%;
    // width: 222px;
    // // height: Hug (44px) px;
    height: 44px;
    border-radius: 22px;
    border: 0px;
    padding: 12px 16px 12px 16px;
    background-color: #00a1e7;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }

  &__img-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    // height: 100%;
    width: 55%;
  }
  &__img {
    max-width: 581px;
    width: 100%;
    // height: 540px;
    height: auto;
  }
}
</style>
