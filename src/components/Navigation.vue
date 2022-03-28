<template>
  <!-- Navbar -->
  <nav class="navbar navbar-light justify-content-between mb-3" id="topnavbar">
    <a class="navbar-brand me-2 href" @click="this.$router.push('/')">
      <img
        id="navLogo"
        src="../assets/bunnylogo.png"
        alt="The Hare Company Logo"
        loading="lazy"
      />
      <span class="ml-5" id="homeNav">The Hare Company</span>
    </a>
    <div class="justify-content-between">
      <ul class="nav ml-auto w-100 justify-content-end">
        <li class="nav-item">
          <a
            v-if="!this.$store.state.token"
            @click="this.$router.push('/login')"
            class="btn login-btn btn-link px-3 me-2"
            role="button"
            >Login</a
          >
        </li>
        <li class="nav-item">
          <a
            v-if="!this.$store.state.token"
            @click="this.$router.push('/signup')"
            class="btn btn-primary me-3 rounded-pill"
            role="button"
            >Sign up</a
          >
        </li>
        <li class="nav-item">
          <a
            v-if="this.$store.state.token && this.$store.state.admin"
            @click="this.$router.push('/dashboard')"
            class="btn btn-primary me-3 rounded-pill"
            role="button"
            >Dashboard</a
          >
        </li>
        <li class="nav-item">
          <a
            v-if="this.$store.state.token"
            @click="this.$router.replace('/logout')"
            class="btn btn-primary me-3 rounded-pill"
            role="button"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {},
};
</script>

<style>
</style>