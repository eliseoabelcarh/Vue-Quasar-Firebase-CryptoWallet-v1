<template>
  <div>
    <q-item
      :to="{
        name: 'Wallets',
        params: { currencyCode: account.currencyCode }
      }"
    >
      <q-item-section avatar>
        <q-icon :color="dataCoin.color" :name="dataCoin.icon" />
      </q-item-section>
      <q-item-section>{{ saldoActualFixed }}</q-item-section>
      <q-item-section side>{{ account.currencyCode }}</q-item-section>
      <q-item-section side>
        <q-item-label caption>+</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator spaced inset="item" />
  </div>
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
    dataCoin: function() {
      let color = this.getColorByCoin(this.account.currencyCode);
      let icon = this.getIconByCoin(this.account.currencyCode);
      return { color, icon };
    }
  }
};
</script>

<style>
</style>
