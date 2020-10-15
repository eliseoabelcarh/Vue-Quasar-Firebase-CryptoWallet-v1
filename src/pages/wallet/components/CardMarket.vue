<template>
  <q-card flat bordered class="my-card bg-grey-1">
    <q-card-actions align="right">
      <q-btn
        flat
        class="text-capitalize"
        :to="{
          name: 'Wallets',
          params: { currencyCode: account.currencyCode }
        }"
        >Ver Cuenta</q-btn
      >
      <q-btn
        v-if="account.currencyCode !== 'ARS'"
        flat
        class="text-deep-purple-13"
        :to="{
          name: 'TradeBuy',
          query: { market: account.currencyCode + '-ARS' }
        }"
        >COMPRAR</q-btn
      >
      <q-btn
        v-if="account.currencyCode === 'ARS'"
        flat
        class="text-deep-purple-13"
        :to="{
          name: 'Deposit'
        }"
        >DEPOSITAR</q-btn
      >

      <div class="col-auto">
        <q-btn color="grey-7" round flat icon="more_vert">
          <q-menu cover auto-close>
            <q-list>
              <q-item
                v-if="account.currencyCode !== 'ARS'"
                clickable
                :to="{
                  name: 'TradeSell',
                  query: { market: account.currencyCode + '-ARS' }
                }"
              >
                <q-item-section>Vender</q-item-section>
              </q-item>

              <q-item clickable v-if="account.currencyCode !== 'ARS'">
                <q-item-section>Enviar</q-item-section>
              </q-item>
              <q-item clickable v-if="account.currencyCode !== 'ARS'">
                <q-item-section>Recibir</q-item-section>
              </q-item>
              <q-item clickable v-if="account.currencyCode === 'ARS'">
                <q-item-section>Retirar</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-card-actions>

    <q-separator />

    <q-card-section>
      <div class="row items-center no-wrap">
        <div
          class="full-width row wrap justify-center items-center content-center"
          align="center"
        >
          <q-avatar
            size="lg"
            :color="dataCoin.color"
            text-color="white"
            :icon="dataCoin.icon"
          />

          <div class="text-h4 q-mr-sm q-ml-sm">
            {{ saldoActualFixed }}
          </div>
          <div class="text-h5 text-blue-grey-8">{{ account.currencyCode }}</div>
        </div>
      </div>
      <div>
        <div class="text-subtitle2 text-blue-grey-4" align="center">
          ≈ $ 0.03 ARS
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    account: Object
  },
  computed: {
    ...mapGetters("cryptocurrencies", ["getColorByCoin", "getIconByCoin"]),
    saldoActualFixed: function() {
      if (
        this.account.currencyCode === "BTC" ||
        this.account.currencyCode === "ETH"
      ) {
        return Number.parseFloat(this.account.saldoActual).toFixed(8);
      } else {
        return Number.parseFloat(this.account.saldoActual).toFixed(2);
      }
    },
    dataCoin() {
      let icon = this.getIconByCoin(this.account.currencyCode);
      let color = this.getColorByCoin(this.account.currencyCode);
      return { icon, color };
    }
  }
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 10px auto;
}
</style>
