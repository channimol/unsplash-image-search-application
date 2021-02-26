<template>
  <div>
    <b-navbar class="is-link">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="./../assets/logo.png" alt="Logo" />
        </b-navbar-item>
      </template>

      <template #end class="is-link">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button tag="router-link" to="/login" type="is-success">Log in</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view />

    <footer class="footer">
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
  mounted() {
    // this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.$api.get("/me").then(res => console.log(res));
    }
  }
};
</script>

<style>
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
  padding: 36px 36px 56px;
}
.footer p strong,
.footer p a {
  color: white;
}
</style>