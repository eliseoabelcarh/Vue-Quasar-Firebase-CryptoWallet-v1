<template>
  <q-card class="customCard" flat bordered>
    <q-item>
      <q-item-section>
        <div class="row justify-start items-start content-start ">
          <CardMarket
            :account="account"
            v-for="(account, objectKey) in allAccounts"
            :key="objectKey"
          ></CardMarket>
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardMarketContainer",
  computed: {
    ...mapGetters("user", ["getAllAccounts"]),
    allAccounts: function() {
      let accounts = this.getAllAccounts;
      return accounts;
    }
  },
  components: {
    CardMarket: () => import("../components/CardMarket.vue")
  }
};
</script>

<style>
.customCard {
  min-width: 100%;
  margin: 5px auto;
  padding: 0 0;
}
</style>

