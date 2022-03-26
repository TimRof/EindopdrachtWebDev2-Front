<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                id="inputEmail"
                type="text"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary">
              Login
            </button>
            <div v-if="loginError" class="error mt-3">{{ loginError }}</div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Login",
  data() {
    return {
      email: "admin@admin.admin",
      password: "secret123",
      loginError: "",
    };
  },
  methods: {
    login() {
      axios
        .post("/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.loginError = "";
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;
          console.log(res);
          alert(res.data.token);
          //this.$router.push("/products");
        })
        .catch((err) => {
          console.log(err);
          this.loginError =
            "Incorrect Credentials, verify your email address and password and try again.";
        });
    },
    logout() {
      axios.defaults.headers.common["Authorization"] = "";
    },
  },
};
</script>

<style>
</style>