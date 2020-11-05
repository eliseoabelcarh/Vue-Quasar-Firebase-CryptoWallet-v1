<template>
  <q-page style="padding-top: 60px" class="q-pa-md">
    <div class="fit row wrap justify-start items-start content-start">
      <keep-alive include="TradeBuy">
        <router-view></router-view>
      </keep-alive>
    </div>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Market</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { Loading } from "quasar";
export default {
  beforeCreate: function() {
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
  },

  preFetch({ store }) {
    console.log("set marketprices en Market.vue");
    store.dispatch("market/setMarketPrices");
    //store.dispatch("user/setUser");
    /* setInterval(function() {
      store.dispatch("market/setMarketPrices");
    }, 5000); */
  }
};
</script>

<style >
</style>
