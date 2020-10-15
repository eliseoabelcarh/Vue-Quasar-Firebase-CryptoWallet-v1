<template>
  <div class=" my-card customCard">
    <div style="min-width:300px; max-width:340px;margin:0 auto">
      <q-card>
        <div style="min-width:300px; max-width:340px;margin:0 auto">
          <q-list padding dense>
            <q-item>
              <q-item-section top avatar>
                <q-avatar
                  size="sm"
                  :color="dataCoins.color2"
                  text-color="white"
                  :icon="dataCoins.icon2"
                />
                <q-avatar
                  size="sm"
                  :color="dataCoins.color1"
                  text-color="white"
                  :icon="dataCoins.icon1"
                  class="icon2"
                />
              </q-item-section>

              <q-item-section v-if="inBuyTrade">
                <q-item-label class="text-weight-medium"
                  >1 {{ market.coin1 }} = {{ market.buyPrice }}
                  {{ market.coin2 }}</q-item-label
                >
              </q-item-section>
              <q-item-section v-else>
                <q-item-label class="text-weight-medium"
                  >1 {{ market.coin1 }} = {{ market.sellPrice }}
                  {{ market.coin2 }}</q-item-label
                >
              </q-item-section>

              <q-item-section v-if="inBuyTrade" side top>
                <q-item-label caption>Precio de </q-item-label>
                <q-badge label="Compra" />
              </q-item-section>
              <q-item-section v-else side top>
                <q-item-label caption>Precio de </q-item-label>
                <q-badge label="Venta" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-tabs
          v-model="tab"
          active-color="blue-grey-10"
          indicator-color="deep-purple-13"
          align="justify"
        >
          <q-route-tab
            default
            class="text-blue-grey-8"
            name="buy"
            label="Buy"
            :to="{ name: 'TradeBuy', query: { market: market.pair } }"
          />
          <q-route-tab
            class="text-blue-grey-8"
            name="sell"
            label="Sell"
            :to="{ name: 'TradeSell', query: { market: market.pair } }"
          />
        </q-tabs>

        <q-tab-panels v-model="tab" animated align="start">
          <q-tab-panel name="buy">
            <div class="text-caption" style="margin:0px 0">
              <div class="text-weight-medium">
                Disponible para comprar: {{ this.saldoActualFixed(account2) }}
                {{ account2.currencyCode }}
              </div>
              <div>
                Disponible para vender: {{ this.saldoActualFixed(account1) }}
                {{ account1.currencyCode }}
              </div>
            </div>
            <q-separator class="q-mt-sm " />

            <!--this is buying view -->

            <router-view
              :fromAccount="account2"
              :toAccount="account1"
              :buyPrice="market.buyPrice"
            />
          </q-tab-panel>

          <q-tab-panel name="sell">
            <div class="text-caption" style="margin:0px 0">
              <div>
                Disponible para comprar: {{ this.saldoActualFixed(account2) }}
                {{ account2.currencyCode }}
              </div>
              <div class="text-weight-medium">
                Disponible para vender: {{ this.saldoActualFixed(account1) }}
                {{ account1.currencyCode }}
              </div>
            </div>
            <q-separator class="q-mt-sm " />
            <!--this is selling view -->
            <router-view
              :fromAccount="account1"
              :toAccount="account2"
              :sellPrice="market.sellPrice"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: "buy"
    };
  },
  methods: {
    saldoActualFixed: function(account) {
      if (account.currencyCode === "BTC" || account.currencyCode === "ETH") {
        return Number.parseFloat(account.saldoActual).toFixed(8);
      } else {
        return account.saldoActual;
      }
    }
  },
  computed: {
    ...mapGetters("market", ["getMarketByCoinsPair"]),
    ...mapGetters("user", ["getAccountByType"]),
    ...mapGetters("cryptocurrencies", ["getColorByCoin", "getIconByCoin"]),
    account1: function() {
      let code = this.market.coin1;
      let account = this.getAccountByType(code.toUpperCase());
      return account;
    },
    account2: function() {
      let code = this.market.coin2;
      let account = this.getAccountByType(code.toUpperCase());
      return account;
    },
    dataCoins: function() {
      let color1 = this.getColorByCoin(this.market.coin1);
      let color2 = this.getColorByCoin(this.market.coin2);
      let icon1 = this.getIconByCoin(this.market.coin1);
      let icon2 = this.getIconByCoin(this.market.coin2);
      return { color1, color2, icon1, icon2 };
    },
    market: function() {
      let market = this.getMarketByCoinsPair(this.$route.query.market);
      return market;
    },
    inBuyTrade() {
      let pathRouteName = this.$route.name;
      return pathRouteName === "TradeBuy";
    }
  }
};
</script>

<style scoped>
.customCard {
  width: 100%;
  margin: -10px auto;
}

.icon2 {
  position: absolute;
  z-index: 0;
  color: aquamarine;
  left: 34px;
}
</style>
