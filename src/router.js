import Vue from "vue";
import Router from "vue-router";

import ProfilePage from "./components/ProfilePage";
import ContactUs from "./components/ContactUs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProfilePage",
      component: ProfilePage,
    },
    {
      path: "/ContactUs/:userName",
      name: "ContactUs",
      component: ContactUs,
    },
  ],
});
