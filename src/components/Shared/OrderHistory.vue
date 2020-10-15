<template>
  <div class="customCard" flat bordered>
    <q-table
      :dense="$q.screen.lt.md"
      title="Order History"
      :data="orders"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getOrdersByMarket"]),
    orders: function() {
      let code = this.$route.params.currencyCode;
      let orders = this.getOrdersByMarket(code);
      return orders;
    }
  },
  data() {
    return {
      columns: [
        {
          name: "market",
          required: true,
          label: "Market",
          align: "left",
          field: row => row.market,
          format: val => `${val}`,
          sortable: true
        },
        { name: "trade", label: "Trade", field: "trade", sortable: true },
        { name: "type", label: "Type", field: "type", sortable: true },
        { name: "price", label: "Price", field: "price" },
        { name: "quantity", label: "Quantity", field: "quantity" },
        { name: "total", label: "Total", field: "total" },
        {
          name: "date",
          label: "Date",
          field: "date",
          sortable: true
        }
      ]
    };
  }
};
</script>

<style scoped>
.customCard {
  width: 90%;
  margin: 10px auto;
}
</style>
