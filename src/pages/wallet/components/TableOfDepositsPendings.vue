<template>
  <div>
    <div>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="fas fa-exclamation"
              color="red"
              text-color="white"
            />
            <span class="q-ml-sm">Está seguro de eliminar items?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn
              flat
              label="Sí, Borrar"
              color="primary"
              v-close-popup
              @click="eliminarSeleccionados"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div flat bordered>
      <q-table
        title="Table"
        dense
        :data="this.getPendingDeposits"
        :columns="columns"
        row-key="id"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        :selected.sync="selected"
        :filter="filter"
        :loading="loading"
        color="blue-grey-10"
      >
        <template v-slot:top style="display:block">
          <div class="text-h6 q-mb-md text-center" style="min-width:90%">
            Depositos Pendientes en ARS
          </div>

          <q-btn
            class="q-mb-md"
            color="deep-purple-13"
            rounded
            :disable="loading"
            label="Confirmar Pago"
            @click="ejecutarAccion"
          />
          <q-btn
            class="q-ml-sm q-mb-md"
            color="deep-purple-13"
            rounded
            outline
            :disable="loading"
            label="Eliminar"
            @click="confirmarDelete"
          />

          <!--<q-space />
        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
        >
         <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>-->
        </template>
      </q-table>
      <!--<div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>-->
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { QSpinnerGears } from "quasar";
export default {
  computed: {
    ...mapGetters("user", ["getPendingDeposits"])
  },
  data() {
    return {
      selected: [],
      loading: false,
      filter: "",
      rowCount: 10,
      confirm: false,
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
  },
  methods: {
    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.getPendingDeposits.length}`;
    },
    // emulate fetching data from server
    ejecutarAccion() {
      if (this.selected.length === 0) {
        return;
      }
      this.loading = true;

      this.$q.notify({
        spinner: QSpinnerGears,
        message: "Procesando Pago...",
        timeout: 2500
      });
      setTimeout(() => {
        this.$q.notify({
          message: "Pago aceptado.",
          type: "positive",
          timeout: 1500
        });
      }, 2000);
      setTimeout(() => {
        this.$q.notify({
          message: "Lista actualizada.",

          type: "info",
          timeout: 1500
        });
        this.$store.dispatch("user/setDepositoAEstadoPagado", this.selected);
        this.selected = [];
        this.loading = false;
      }, 3500);
    },
    confirmarDelete() {
      this.confirm = true;
    },
    eliminarSeleccionados() {
      if (this.selected.length === 0) {
        this.$q.notify({
          message: "Nada seleccionado.",
          type: "info",
          timeout: 1500
        });
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("user/deletePendingDeposits", this.selected);
        this.selected = [];
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
</style>
