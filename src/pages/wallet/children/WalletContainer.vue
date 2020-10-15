<template>
  <q-page class="fit row wrap ">
    <div class="fit row wrap justify-center items-center content-center">
      <Wallet></Wallet>
      <OrderHistory></OrderHistory>
    </div>
  </q-page>
</template>




<script>
export default {
  name: "Wallets",
  components: {
    Wallet: () => import("../children/Wallet.vue"),
    OrderHistory: () => import("../../../components/Shared/OrderHistory.vue")
  },
  data() {
    return {};
  }
};
</script>

<style >
</style>



