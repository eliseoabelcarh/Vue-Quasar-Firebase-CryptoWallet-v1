<template>
  <div flat bordered>
    <q-table
      dense
      title="Depositos Confirmados en ARS"
      :data="this.getConfirmedDeposits"
      :columns="columns"
      row-key="id"
      color="blue-grey-10"
    >
    </q-table>
    <!--<div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>-->
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getConfirmedDeposits"])
  },
  data() {
    return {
      selected: [],

      columns: [
        {
          name: "tipo",
          required: true,
          label: "Tipo",
          align: "left",
          field: row => row.tipo,
          format: val => `${val}`
        },
        {
          name: "monto",
          align: "center",
          label: "Monto",
          field: "monto",
          format: val => `${parseFloat(val).toFixed(2)}`
        },
        { name: "fecha", label: "Fecha", field: "fecha" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
