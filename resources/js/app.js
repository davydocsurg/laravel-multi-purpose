/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

// import VueRouter from "vue-router";

// Vue.use(VueRouter);

import router from "./router/index.js";
import Gate from "./gate/index.js";
import moment from "moment";
import { Form, HasError, AlertError } from "vform";
import VueProgressBar from "vue-progressbar";
import Swal from "sweetalert2";
import 'animate.css';
// import {store} from './store/index'


Vue.use(VueProgressBar, {
  color: "#20c997",
  failedColor: "red",
  height: "3.3px",
});

Vue.prototype.$gate = new Gate(window.user);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

Vue.filter("date", function (created) {
  return moment(created).calendar();
});

Vue.filter("cap", function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});

window.Ignite = new Vue();
window.Toast = Toast;
window.Swal = Swal;
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// const router = new VueRouter({
// mode: 'history',
// base: process.env.BASE_URL,
// routes
// })

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
  "example-component",
  require("./components/ExampleComponent.vue").default
);

Vue.component(
  "passport-clients",
  require("./components/passport/Clients.vue").default
);

Vue.component(
  "passport-authorized-clients",
  require("./components/passport/AuthorizedClients.vue").default
);

Vue.component(
  "passport-personal-access-tokens",
  require("./components/passport/PersonalAccessTokens.vue").default
);

Vue.component("not-found", require("./components/NotFound.vue").default);

Vue.component("invoice", require("./components/Invoice.vue").default);

Vue.component("pagination", require("laravel-vue-pagination"));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  router,
  // store,
  // gate,
  el: "#app",
  data: {
    search: "",
  },

  methods: {
    filterData: _.debounce(() => {
      Ignite.$emit("searching");
    }, 800),

    printInvoice() {
      window.print();
    },
  },
});
