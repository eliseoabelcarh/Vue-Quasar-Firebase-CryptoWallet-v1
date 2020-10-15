<template>
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>
<script>
import { Loading } from "quasar";
export default {
  name: "App",
  created: function() {
    Loading.show();
    setTimeout(() => {
      const user = this.$store
        .dispatch("user/setUserId")
        .then(userId => {
          if (userId) {
            this.$store.dispatch("auth/setLoggedIn", true);
            this.$store.dispatch("user/setDataOfCurrentUser", userId);
          }
        })
        .catch(err => console.log(err));
      Loading.hide();
    }, 500);
  }
};
</script>

<style>
html,
body {
  height: 100%;
  min-height: 100%;
  background-size: cover;
}
</style>
