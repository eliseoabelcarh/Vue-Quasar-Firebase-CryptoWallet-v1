<template>
  <form
    @submit.prevent="simulateSubmit"
    class="q-pb-md q-pt-sm q-pl-sm q-pr-sm q-mt-m"
  >
    <div class="text-overline">Cantidad a gastar:</div>
    <!--empieza field -->
    <q-input
      v-if="this.fromAccount"
      square
      v-model="input1"
      :prefix="fromAccount.symbol"
      :suffix="fromAccount.currencyCode"
      clearable
      filled
      :color="fromAccount.color"
      mask="#.##"
      fill-mask="0"
      reverse-fill-mask
      min="0"
      max="100000000000"
      stack-label
      class="text-h5"
      style="max-width:300px; margin:0 auto"
      @input="this.updateInput2"
    >
    </q-input
    >{{ input1 }}
    <!---termina field -->

    <q-separator class="q-mt-lg q-mb-sm" />
    <div class="text-overline">
      Cantidad a recibir:
    </div>

    <!--empieza field -->
    <q-input
      v-if="this.toAccount"
      mask="#.########"
      fill-mask="0"
      reverse-fill-mask
      square
      min="0"
      max="10000000000"
      v-model="input2"
      :suffix="toAccount.currencyCode"
      clearable
      filled
      :color="toAccount.color"
      stack-label
      class="text-h5"
      style="max-width:300px; margin:0 auto"
      @input="this.updateInput1"
    >
    </q-input
    >{{ input2 }}
    <!---termina field -->

    <div class="row justify-center full-width">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Confirmar Compra"
        class="q-mt-md full-width"
        color="deep-purple-13"
        unelevated
        stretch
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    fromAccount: {
      type: Object
    },
    toAccount: {
      type: Object
    },
    buyPrice: {
      type: String
    }
  },
  data() {
    return {
      input1: null,
      input2: null,
      submitting: false
    };
  },
  computed: {
    buyPriceNumber() {
      const buyPrice = Number.parseFloat(this.buyPrice).toFixed(2);
      return buyPrice;
    }
  },
  methods: {
    updateInput2() {
      this.input2 = Number.parseFloat(
        this.input1 / this.buyPriceNumber
      ).toFixed(8);
      return this.input2;
    },
    updateInput1() {
      this.input1 = Number.parseFloat(
        this.buyPriceNumber * this.input2
      ).toFixed(2);
      return this.input1;
    },
    simulateSubmit() {
      this.submitting = true;
      const saldoAct = this.fromAccount.saldoActual;
      console.log("enCardBUYING: ", saldoAct);
      console.log("LOQUE VALE INPUT 1: ", Number(this.updateInput1()));
      if (saldoAct >= Number(this.updateInput1())) {
        const order = {};
        order.from = this.fromAccount.currencyCode;
        order.to = this.toAccount.currencyCode;
        order.amount = Number(this.updateInput2());
        order.buyPrice = Number(this.buyPriceNumber);

        console.log("la orden es: ", order);
        this.$store
          .dispatch("user/openBuyOrder", order)
          .then(response => {
            this.$q.notify({
              type: "positive",
              message: `Compra exitosa`
            });
            setTimeout(() => {
              this.$router.push({ name: "Wallet" });
            }, 3000);
          })
          .catch(error => {
            this.$q.notify({
              type: "negative",
              message: `${error.message}`
            });
          });
      } else {
        this.$q.notify({
          type: "negative",
          message: `No hay suficiente saldo`
        });
      }
      setTimeout(() => {
        this.submitting = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>
