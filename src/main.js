import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import Home from "./components/Home.vue";
import DashboardList from "./components/dashboard/DashboardList.vue";
import DashboardListEdit from "./components/dashboard/DashboardListEdit.vue";
import AppointmentList from "./components/appointments/AppointmentList.vue";
import AppointmentSuccess from "./components/appointments/AppointmentSuccess.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import LoginExpired from "./components/LoginExpired.vue";
import LoginSuccess from "./components/LoginSuccess.vue";
import Signup from "./components/Signup.vue";
import Install from "./components/Install.vue";
import PageNotFound from "./components/PageNotFound.vue";
import Unauthorised from "./components/Unauthorised.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/dashboard",
    component: DashboardList,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("admin") === "true") {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  {
    path: "/dashboard/edit/:id",
    component: DashboardListEdit,
    props: true,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("admin") === "true") {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  {
    path: "/appointment",
    component: AppointmentList,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  {
    path: "/appointmentsuccess",
    name: "AppointmentSuccess",
    component: AppointmentSuccess,
    props: true,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  { path: "/login", component: Login },
  {
    path: "/logout",
    component: Logout,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  {
    path: "/loginexpired",
    component: LoginExpired,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  {
    path: "/loginsuccess",
    component: LoginSuccess,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/unauthorised");
      }
    },
  },
  { path: "/signup", component: Signup },
  { path: "/install", component: Install },
  { path: "/unauthorised", component: Unauthorised },
  { path: "/:notFound(.*)", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);

app.component("Datepicker", Datepicker);

app.mount("#app");
