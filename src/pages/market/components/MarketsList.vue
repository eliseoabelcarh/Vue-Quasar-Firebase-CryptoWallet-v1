<template>
  <q-card class="customCard" flat bordered>
    <q-item>
      <q-item-section>
        <div class="row justify-start items-start content-start ">
          <MarketsListCard :market="btcArs"></MarketsListCard>
          <MarketsListCard :market="ethArs"></MarketsListCard>
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("market", ["getMarketByCoinsPair"]),
    btcArs: function() {
      let marketBTC_ARS = this.getMarketByCoinsPair("BTC-ARS");
      return marketBTC_ARS;
    },
    ethArs: function() {
      let marketETH_ARS = this.getMarketByCoinsPair("ETH-ARS");
      return marketETH_ARS;
    }
  },
  components: {
    MarketsListCard: () => import("./MarketsListCard.vue")
  }
};
</script>

<style scoped>
.customCard {
  min-width: 100%;
  margin: 5px auto;
  padding: 0 0;
}
</style>>
