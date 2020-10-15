<template>
  <q-card class="my-card customCard" flat bordered>
    <q-card-actions align="left">
      <q-btn
        @click="this.volverAtras"
        stretch
        flat
        icon="fas fa-arrow-left"
        label="Volver"
        class="text-deep-purple-13"
      ></q-btn>
    </q-card-actions>
    <q-card-actions align="center">
      <div class="text-h6">Mi Cuenta en {{ account.currency }}</div>
    </q-card-actions>

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

          <div class="text-h4 q-mr-sm q-ml-sm">{{ saldoActualFixed }}</div>
          <div class="text-h5 text-blue-grey-8">{{ account.currencyCode }}</div>
        </div>
      </div>
      <div>
        <div class="text-subtitle2 text-blue-grey-4" align="center">
          ≈ $ 0.03 ARS
        </div>
      </div>
    </q-card-section>

    <q-card-actions
      class="full-width row wrap justify-center items-center content-center"
      align="center"
      v-if="account.currencyCode !== 'ARS'"
    >
      <q-btn
        id="boton1"
        outline
        round
        icon="fas fa-shopping-basket"
        label=""
        stack
        color="deep-purple-13"
        :to="{
          name: 'TradeBuy',
          query: { market: account.currencyCode + '-ARS' }
        }"
      />
      <q-btn
        id="boton2"
        outline
        round
        icon="fas fa-clipboard-check"
        label=""
        stack
        color="deep-purple-13"
        :to="{
          name: 'TradeSell',
          query: { market: account.currencyCode + '-ARS' }
        }"
      />
      <q-btn
        id="boton3"
        outline
        round
        icon="fas fa-paper-plane"
        label=""
        stack
        color="deep-purple-13"
      />
      <q-btn
        id="boton4"
        outline
        round
        icon="fas fa-qrcode"
        label=""
        stack
        color="deep-purple-13"
      />
    </q-card-actions>

    <q-card-actions
      class="full-width row wrap justify-center items-center content-center"
      align="center"
      v-else
    >
      <q-btn
        id="boton5"
        :to="{ name: 'Deposit' }"
        outline
        round
        icon="fas fa-shopping-basket"
        label=""
        stack
        color="deep-purple-13"
      />
      <q-btn
        id="boton6"
        outline
        round
        icon="fas fa-clipboard-check"
        label=""
        stack
        color="deep-purple-13"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["getAccountByType"]),
    ...mapGetters("cryptocurrencies", ["getColorByCoin", "getIconByCoin"]),
    account: function() {
      let code = this.$route.params.currencyCode;
      let account = this.getAccountByType(code.toUpperCase());
      return account;
    },
    saldoActualFixed: function() {
      if (
        this.account.currencyCode === "BTC" ||
        this.account.currencyCode === "ETH"
      ) {
        return Number.parseFloat(this.account.saldoActual).toFixed(8);
      } else {
        return this.account.saldoActual;
      }
    },
    dataCoin() {
      let icon = this.getIconByCoin(this.account.currencyCode);
      let color = this.getColorByCoin(this.account.currencyCode);
      return { icon, color };
    }
  },
  methods: {
    volverAtras: function() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.customCard {
  width: 90%;
  margin: 10px auto;
}
#boton1,
#boton2,
#boton3,
#boton4,
#boton5,
#boton6 {
  margin: 0 4.9% 20px 4.9%;
}
#boton1::after {
  content: "COMPRAR";
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
  left: -25%;
}
#boton2::after {
  content: "VENDER";
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
}
#boton3::after {
  content: "ENVIAR";
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
}
#boton4::after {
  content: "RECIBIR";
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
}
#boton5::after {
  content: "DEPOSITAR";
  position: absolute;
  bottom: -25px;
  left: -12px;
  font-size: 0.8rem;
}
#boton6::after {
  content: "RETIRAR";
  position: absolute;
  bottom: -25px;
  font-size: 0.8rem;
}
</style>
