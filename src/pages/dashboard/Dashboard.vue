<template>
  <q-page style="padding-top: 60px" class="q-pa-md">
    <div class="fit row wrap justify-start items-start content-start">
      <HelloDashboard :profile="currentUserProfile"></HelloDashboard>

      <AccountCard :account="accountARS"></AccountCard>

      <OrderHistory></OrderHistory>
    </div>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Dashboard </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    HelloDashboard: () => import("../dashboard/components/HelloDashboard.vue"),
    AccountCard: () => import("../dashboard/components/AccountCard"),
    OrderHistory: () => import("../../components/Shared/OrderHistory.vue")
  },
  computed: {
    ...mapGetters("user", ["getCurrentUserProfile", "getAccountByType"]),
    currentUserProfile: function() {
      let userProfile = this.getCurrentUserProfile;
      return userProfile;
    },
    accountARS: function() {
      let accountARS = this.getAccountByType("ARS");
      return accountARS;
    }
  }
};
</script>

<style >
</style>



