

<template>
  <q-card class="my-card customCard" flat bordered>
    <q-card-actions align="around">
      <q-btn flat class="text-lowercase text-capitalize">MI CUENTA</q-btn>
      <q-btn
        flat
        class="text-lowercase text-capitalize text-deep-purple-13"
        :to="{ name: 'DepositsList' }"
        icon="far fa-list-alt"
        align="around"
        label="VER DEPOSITOS"
      ></q-btn>
    </q-card-actions>
    <q-separator />

    <q-card-section style="padding:0">
      <div class="row" style=" width: 100%; padding: 1px;">
        <div
          id="parent"
          class="fit row wrap justify-start items-start content-start"
          style="overflow: hidden;"
        >
          <!---uno -->
          <div
            class="self-center"
            style="overflow: auto;width:50%;text-align:center;"
          >
            <div>
              <div style="padding:0;">
                <AccountCardBalance
                  :balance="this.balanceFixed"
                  :symbol="account.symbol"
                  :currencyCode="account.currencyCode"
                ></AccountCardBalance>
              </div>
            </div>
          </div>
          <!---dos -->
          <div
            class="self-center"
            style="overflow: auto;width:50% ; text-align: center;"
          >
            <div>
              <div
                style="padding:10px; "
                class="justify-around row q-gutter-sm"
              >
                <q-btn
                  unelevated
                  rounded
                  color="deep-purple-13"
                  style="padding:0 10px"
                  label="Depositar"
                  :to="{ name: 'Deposit' }"
                />
                <q-btn
                  outline
                  rounded
                  color="deep-purple-13"
                  label="Retirar"
                  style="padding:0 10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AccountCard",
  props: {
    account: Object
  },
  computed: {
    balanceFixed() {
      return Number.parseFloat(this.account.saldoActual);
    }
  },
  components: {
    AccountCardBalance: () => import("../components/AccountCardBalance.vue")
  }
};
</script>

<style scoped>
.currency {
  text-align: center;
}
.customCard {
  width: 90%;
  margin: 10px auto;
}
</style>
