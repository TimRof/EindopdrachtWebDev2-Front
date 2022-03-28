import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import Home from "./components/Home.vue";
import AppointmentList from "./components/appointments/AppointmentList.vue";
import AppointmentSuccess from "./components/appointments/AppointmentSuccess.vue";
import ProductList from "./components/products/ProductList.vue";
import CreateProduct from "./components/products/CreateProduct.vue";
import EditProduct from "./components/products/EditProduct.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import LoginSuccess from "./components/LoginSuccess.vue";
import Signup from "./components/Signup.vue";
import Install from "./components/Install.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: ProductList },
  { path: "/appointment", component: AppointmentList },
  { path: "/appointmentsuccess", name: "AppointmentSuccess", component: AppointmentSuccess, props: true },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/loginsuccess", component: LoginSuccess },
  { path: "/signup", component: Signup },
  { path: "/install", component: Install },
  { path: "/createproduct", component: CreateProduct },
  { path: "/editproduct/:id", component: EditProduct, props: true },
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
