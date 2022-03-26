<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 mb-3">
          Click to install the database:
          <button
            type="button"
            @click="install()"
            class="btn btn-primary rounded-pill"
          >
            Install
          </button>
        </div>
          <hr />
          <div v-if="data"><span v-html="data"></span></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Install",
  data() {
    return {
      data: "",
    };
  },
  methods: {
    install() {
      axios
        .get("/install")
        .then((res) => {
          console.log(res);
          this.data = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>