<template>
  <div class="full-page">
    <div class>
      <b-button type="is-success">Login with Unsplash</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleAuth() {
      const url = "https://unsplash.com/oauth/authorize";
      const {
        VUE_APP_ACCESS_KEY,
        VUE_APP_REDIRECT_URI,
        VUE_APP_SECRET_KEY
      } = process.env;

      // window.location.href = `${url}?client_id=${VUE_APP_ACCESS_KEY}&redirect_uri=${VUE_APP_REDIRECT_URI}&response_type=code&scope=public`;
      window.location.assign(
        `${url}?client_id=${VUE_APP_ACCESS_KEY}&redirect_uri=${VUE_APP_REDIRECT_URI}&response_type=code&scope=public`
      );
      this.$api({
        method: "POST",
        url: "https://unsplash.com/oauth/token",
        data: {
          client_id: VUE_APP_ACCESS_KEY,
          client_secret: VUE_APP_SECRET_KEY,
          code: "om3TWfBN8ShjhhNy3xcHa8M_4NmPw8e9PXINe-FqLS0",
          redirect_uri: VUE_APP_REDIRECT_URI,
          grant_type: "authorization_code"
        }
      }).then(res => console.log("res token=---", res));
    }
  }
};
</script>
<style scoped>
.full-page {
  background-color: #7957d5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>