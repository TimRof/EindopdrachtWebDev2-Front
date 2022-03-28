<template>
  <section>
    <div class="content">
      <h1 class="title">Log out</h1>
      <p>You were successfully logged out!<br /><br /></p>
      <p>
        Redirecting you automatically, click
        <a @click="redirect()" class="text-primary href">here</a> if your
        browser does not redirect you.
      </p>
    </div>
  </section>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Logout",
  data() {
    return {
      redirectTimeout: null,
    };
  },
  created() {
    this.logout();
    this.timeout();
  },
  methods: {
    timeout() {
      this.redirectTimeout = setTimeout(() => this.redirect(), 3000);
    },
    redirect() {
      this.$router.replace("/");
    },
    logout() {
      axios.defaults.headers.common["Authorization"] = "";
      let state = this.$store.state;
      let newState = {};

      Object.keys(state).forEach((key) => {
        newState[key] = null;
      });

      this.$store.replaceState(newState);
      localStorage.clear();
    },
  },
  beforeUnmount() {
    if (this.redirectTimeout) {
      clearTimeout(this.redirectTimeout);
    }
  },
};
</script>

<style>
</style>