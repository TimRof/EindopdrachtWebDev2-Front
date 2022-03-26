<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="formSubmit">
            <div class="mb-3">
              <label>Name :</label>
              <input class="form-control" type="name" v-model="name" required />
              <div class="mb-3"></div>
              <label>Email :</label>
              <input
                class="form-control"
                type="email"
                v-model="email"
                required
              />
              <div class="mb-3"></div>
              <label>Password :</label>
              <input
                class="form-control"
                type="password"
                v-model="password"
                required
              />
              <div v-if="passwordError" class="error">{{ passwordError }}</div>
              <div class="mb-3"></div>
              <label>Repeat Password :</label>
              <input
                class="form-control"
                type="password"
                v-model="passwordRepeat"
                required
              />
              <div v-if="passwordRepeatError" class="error">
                {{ passwordRepeatError }}
              </div>
            </div>
            <div class="button">
              <button class="submit btn btn-primary" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
      passwordError: "",
      passwordRepeatError: "",
    };
  },
  methods: {
    formSubmit() {
      if (this.password.length > 6) {
        this.passwordError = "";
      } else {
        this.passwordError = "Password should be atleast 6 characters long!";
      }
      if (this.password == this.passwordRepeat) {
        this.passwordRepeatError = "";
      } else {
        this.passwordRepeatError = "Passwords do not match!";
      }
      if (!this.passwordError && !this.passwordRepeatError) {
        console.log(this.name);
        console.log(this.email);
        console.log(this.password);
        console.log(this.passwordRepeat);
      }
    },
  },
};
</script>

<style>
</style>