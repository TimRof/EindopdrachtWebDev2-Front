import { createStore } from "vuex";
import axios from "../axios-auth";

const store = createStore({
  state() {
    return {
      token: null,
      id: null,
      email: null,
      name: null,
      admin: null,
      tokenExpiration: null,
    };
  },
  getters: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
    isAdmin() {
      return !!localStorage.getItem("admin");
    },
  },
  mutations: {
    authenticateUser(state, parameters) {
      state.token = parameters.token;
      state.id = parameters.id;
      state.email = parameters.email;
      state.name = parameters.name;
      state.admin = parameters.admin;
      state.tokenExpiration = parameters.tokenExpiration;
    },
  },
  actions: {
    login({ commit }, parameters) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            email: parameters.email,
            password: parameters.password,
          })
          .then((result) => {
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + result.data.token;

            commit("authenticateUser", result.data);

            localStorage.setItem("token", result.data.token);
            localStorage.setItem("id", result.data.id);
            localStorage.setItem("email", result.data.email);
            localStorage.setItem("name", result.data.name);
            localStorage.setItem("admin", result.data.admin);
            localStorage.setItem(
              "tokenExpiration",
              result.data.tokenExpiration
            );

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    autoLogin({ commit }) {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");
      const admin = localStorage.getItem("admin");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      if (
        new Date(localStorage.getItem("tokenExpiration") * 1000) < new Date()
      ) {
        axios.defaults.headers.common["Authorization"] = "";
        let state = this.state;
        let newState = {};

        Object.keys(state).forEach((key) => {
          newState[key] = null;
        });

        this.replaceState(newState);
        localStorage.clear();
        return;
      }

      if (token && email) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        commit("authenticateUser", {
          token: token,
          id: id,
          email: email,
          name: name,
          admin: JSON.parse(admin),
          tokenExpiration: tokenExpiration,
        });
      }
    },
  },
});

export default store;
