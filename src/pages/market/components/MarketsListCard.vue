<template>
  <q-card flat bordered class="my-card bg-grey-1">
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5 text-grey-9 ">
            {{ market.coin1 }}
          </q-item-label>
          <q-item-label v-if="market.buyPrice" class="text-weight-light text-h6"
            >{{ this.numberWithCommas(market.buyPrice) }} {{ market.coin2 }}
            <q-badge outline color="primary" label="BUY" style="margin:auto"
          /></q-item-label>
          <q-item-label
            v-if="market.sellPrice"
            class="text-weight-light text-h6"
            >{{ this.numberWithCommas(market.sellPrice) }} {{ market.coin2 }}
            <q-badge outline color="primary" label="SELL" style="margin:auto"
          /></q-item-label>
        </q-item-section>
        <q-item-section top avatar>
          <q-avatar
            size="sm"
            :color="coin2.color"
            text-color="white"
            :icon="coin2.icon"
          />
          <q-avatar
            size="sm"
            :color="coin1.color"
            text-color="white"
            :icon="coin1.icon"
            class="icon2"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section style="margin:-25px auto 0 auto;">
      <div style="padding:10px">
        <line-chart
          decimal=","
          :colors="['#b343e1bf', '#000']"
          width="200px"
          :min="10000"
          height="100px"
          :data="this.historico"
        ></line-chart>
        <div class="text-caption text-italic text-deep-orange-3">
          Fuente: Coingecko API Historical USD_BTC
        </div>
      </div>

      <q-item-section>
        <q-item-label align="center" caption>
          <q-btn
            class="q-mt-xs"
            size="sm"
            outline
            color="deep-purple-13"
            label="Comprar/Vender"
            icon="timeline"
            :to="{
              name: 'TradeSell',
              query: { market: market.pair }
            }"
          />
        </q-item-label>
      </q-item-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    market: Object
  },
  methods: {
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    ...mapGetters("cryptocurrencies", ["getIconByCoin", "getColorByCoin"]),
    ...mapGetters("market", ["getHistoricalByCoinsPair"]),
    coin1() {
      let coin = this.market.coin1;
      return {
        icon: this.getIconByCoin(coin),
        color: this.getColorByCoin(coin)
      };
    },
    coin2() {
      let coin = this.market.coin2;
      return {
        icon: this.getIconByCoin(coin),
        color: this.getColorByCoin(coin)
      };
    },

    historico() {
      return this.getHistoricalByCoinsPair(this.market.pair);
    },
    dataChart: function() {
      return {
        "2020-10-01": 1180325.23,
        "2020-10-05": 1540325.43,
        "2020-10-07": 1280325.34,
        "2020-10-10": 1580325.34
      };
    }
  }
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 10px auto;
}

.icon2 {
  position: absolute;
  z-index: 0;
  color: aquamarine;
  right: 34px;
}
</style>
