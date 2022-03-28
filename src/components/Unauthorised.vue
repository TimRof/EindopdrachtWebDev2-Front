<template>
  <section>
    <div class="content">
      <h1 class="title mb-4">401: Unauthorised</h1>
      <p>
        You don't have the required authorisation to view this page. Try
        refreshing or re-logging.
      </p>
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
  name: "Unauthorised",
};
</script>

<style>
</style>