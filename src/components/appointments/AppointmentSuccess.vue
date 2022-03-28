<template>
  <section>
    <div class="content">
      <h1 class="title">Success!</h1>
      <p>
        Your appointment was successfully made for
        <strong>{{ new Date(start).toLocaleDateString() }}</strong>
        from
        <strong>{{ new Date(start).toLocaleTimeString().slice(0, -3) }}</strong>
        until
        <strong>{{ new Date(end).toLocaleTimeString().slice(0, -3) }}</strong
        >.
      </p>
      <p>We hope to see you then!</p>
      <p>
        Click
        <a @click="this.$router.replace('/')" class="text-primary href">here</a>
        to return to the homepage.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppointmentSuccess",
  props: {
    start: String,
    end: String,
  },
  data() {
    return {
      redirectTimeout: null,
    };
  },
  created() {
    this.timeout();
  },
  methods: {
    timeout() {
      if (typeof this.start === "undefined") {
        this.$router.replace("/");
      }
      this.redirectTimeout = setTimeout(() => this.redirect(), 3000);
    },
    redirect() {
      this.$router.push("/");
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