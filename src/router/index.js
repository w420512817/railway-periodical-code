import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/Home",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "index",
    redirect: "/main",
    component: () => import("../views/webpages/index.vue"),
    children: [
      { path: "main", component: () => import("../views/webpages/main.vue") }
    ]
  },
  {
    path: "/system",
    name: "system",
    redirect: "/system/blank",
    component: () => import("../views/system/index.vue"),
    children: [
      { path: "blank", component: () => import("../views/system/blank.vue") },
      {
        path: "dashboard",
        component: () => import("../views/system/dashboard.vue")
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
