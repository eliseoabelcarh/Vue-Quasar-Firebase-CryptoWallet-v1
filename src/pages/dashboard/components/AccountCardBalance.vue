<template>
  <div
    class="fit row wrap justify-center items-center content-center"
    style="overflow: hidden; "
  >
    <div class="balanceNumber" style="overflow: hidden;font-size:2em">
      {{ symbol }}{{ Number.parseFloat(balance).toFixed(2) }}
    </div>
    <div
      class="currency text-h6 text-blue-grey-5 self-center q-ml-sm"
      style="overflow: auto;"
    >
      {{ currencyCode }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    balance: Number,
    symbol: String,
    currencyCode: String
  },
  name: "AccountCardBalance"
};
</script>

<style scoped>
</style>
