<template>
  <section>
    <div class="content">
      <h1 class="title">404: Page not found</h1>
      <p>Oops! The page you were looking for does not exist!</p>
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
  name: "PageNotFound",
};
</script>

<style>
</style>