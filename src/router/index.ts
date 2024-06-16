import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import MainSurvey from "../views/MainSurvey.vue";
import AdditionalSurvey from "../views/AdditionalSurvey.vue";
import ThanksForSurvey from "../views/ThanksForSurvey.vue";
import AlreadyCompletedSurvey from "../views/AlreadyCompletedSurvey.vue";

const routes = [
  {
    path: "/",
    component: MainSurvey,
  },
  {
    path: "/additional-survey",
    component: AdditionalSurvey,
  },
  {
    path: "/thanks",
    component: ThanksForSurvey,
  },
  {
    path: "/already-completed",
    component: AlreadyCompletedSurvey,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
