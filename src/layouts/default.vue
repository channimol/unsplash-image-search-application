<template>
  <div>
    <div class="page-container">
      <b-navbar class="is-link">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="./../assets/logo.png" alt="Logo" />
          </b-navbar-item>
        </template>
        <template #start v-if="!!auth">
          <b-navbar-item href="/profile">Profile</b-navbar-item>
        </template>

        <template #end class="is-link">
          <b-navbar-item tag="div">
            <div class="buttons">
              <b-button v-if="!!auth" @click="logout">Log out</b-button>
              <b-button v-else tag="router-link" to="/login" type="is-success">Log in</b-button>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>

      <router-view />
    </div>

    <footer class="footer" style="clear: both;
    position: relative;">
      <p>
        <strong>Power</strong> by
        <a href="https://unplash.com">Unsplash</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {}
    };
  },
  computed: {
    auth() {
      console.log("auth");
      return localStorage.getItem("token");
    }
  },
  mounted() {
    // this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.$api.get("/me").then(res => console.log(res));
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.page-container {
  position: relative;
  min-height: 80vh;
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: #7957d5 !important;
  }
}
.navbar-menu {
  background: #7957d5;
  /* box-shadow: 0 6px 10px rgb(10 10 10 / 10%); */
  box-shadow: none;
}
.footer {
  background: #7957d5;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1rem;
}
.footer p strong,
.footer p a {
  color: white;
}
</style>