import PageOne from "../views/PageOne.vue";
import HomeView from "../views/HomeView.vue";
import PageTwo from "../views/PageTwo.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pageone",
      name: "PageOne",
      component: PageOne,
    },
    {
      path: "/pagetwo",
      name: "PageTwo",
      component: PageTwo,
    },
  ],
});
export default router;
