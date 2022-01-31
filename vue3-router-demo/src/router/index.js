import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/About.vue"),
  },
  {
    path: "/blog/:id",
    name: "blog-id",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/Blog.vue"),
  },
];

export default createRouter({
  history: createWebHistory("/"),
  routes,
});
