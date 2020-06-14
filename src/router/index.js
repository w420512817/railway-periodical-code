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
      // 首页
      {
        path: "main",
        component: () => import("../views/webpages/main.vue")
      },
      // 期刊介绍
      {
        path: "periodicalDetail",
        component: () => import("../views/webpages/periodicalDetail.vue")
      },
      // 编委会
      {
        path: "editorialBoard",
        component: () => import("../views/webpages/editorialBoard.vue")
      },
      // 期刊订阅
        {
          path: "subscribe",
          component: () => import("../views/webpages/subscribe.vue")
        },
      // 关于我们
        {
          path: "aboutUs",
          component: () => import("../views/webpages/aboutUs.vue")
        },

    ]
  },
  {
    path: "/system",
    name: "system",
    redirect: "/system/blank",
    component: () => import("../views/system/index.vue"),
    children: [{
        path: "blank",
        component: () => import("../views/system/blank.vue")
      },
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