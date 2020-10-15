





<template>
  <q-page class="fit row wrap ">
    <div
      class="fit row wrap justify-center items-center content-center q-mt-md"
    >
      <BuySellCard></BuySellCard>
    </div>
  </q-page>
</template>




<script>
export default {
  name: "Markets",
  components: {
    BuySellCard: () => import("../children/BuySellCard.vue")
  },
  data() {
    return {};
  }
};
</script>

<style >
</style>

