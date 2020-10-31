import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: require("../components/Dashboard.vue").default,
  },

  {
    path: "*",
    name: "NotFound",
    component: require("../components/NotFound.vue").default,
  },

  {
    path: "/profile",
    name: "Profile",
    component: require("../components/Profile.vue").default,
  },

  {
    path: "/users",
    name: "Users",
    component: require("../components/Users.vue").default,
  },

  {
    path: "/developer",
    name: "Developer",
    component: require("../components/Developer.vue").default,
  },

  {
    path: "/invoice",
    name: "Invoice",
    component: require("../components/Invoice.vue").default,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
