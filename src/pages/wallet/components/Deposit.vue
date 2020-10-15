<template>
  <q-page class="fit row wrap ">
    <div class="fit row wrap justify-center items-center content-center">
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
            <div class="text-h4">Depositar Pesos</div>
          </q-card-actions>

          <q-card-section>
            <div class="row items-center no-wrap">
              <div
                class="full-width row wrap justify-center items-center content-center"
              >
                <q-input
                  filled
                  style="font-size:1.5rem;text-align:center"
                  outlined
                  mask="#.##"
                  fill-mask="0"
                  reverse-fill-mask
                  hint="El monto mínimo a depositar es de $ 1000.00 ARS"
                  v-model="price"
                  :dense="dense"
                >
                  <template v-slot:prepend>
                    <q-icon name="fas fa-dollar-sign" />
                  </template>
                </q-input>
              </div>
            </div>
            <div>
              <q-card-section>
                <div class="text-subtitle3 text-blue-grey-4" align="center">
                  Saldo Actual en tu wallet ARS:
                  <div>$ {{ saldoActual }} ARS</div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div
                  class="q-pa-md wrap justify-center items-center content-center"
                >
                  <div class=" row justify-center items-center content-center">
                    <q-select
                      filled
                      v-model="selectChoice"
                      label="Selecciona Cuenta bancaria desde donde realizas el pago"
                      :options="listaCuentasBancarias"
                      style="width: 95%"
                      behavior="dialog"
                    />
                  </div>

                  <div
                    class="q-pa-md row wrap justify-end items-end content-end"
                  >
                    <q-btn
                      unelevated
                      outline
                      size="sm"
                      label="Agregar Nueva
                    Cuenta Bancaria"
                      color="deep-purple-13"
                      @click.stop="showModal = true"
                    />

                    <q-dialog persistent v-model="showModal">
                      <FormAddBankAccount
                        :showCancelBtn="true"
                      ></FormAddBankAccount>
                    </q-dialog>
                  </div>
                </div>
              </q-card-section>

              <div class="row wrap justify-center items-center content-center">
                <q-btn
                  rounded
                  size="lg"
                  color="deep-purple-13"
                  label="Confirmar"
                  @click="submitForm"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WalletContainer",
  components: {
    FormAddBankAccount: () =>
      import("../../../pages/settings/FormAddBankAccount.vue")
  },
  computed: {
    ...mapGetters("user", ["getBalanceByAccountType", "getAllBankAccounts"]),
    saldoActual: function() {
      return this.getBalanceByAccountType("ARS");
    },
    listaCuentasBancarias: function() {
      return this.getAllBankAccounts;
    }
  },
  created() {
    //eventBus declarado acá usado en FomrAddBankAccount
    this.$root.$on("closePopup", this.close);
  },

  data() {
    return {
      price: null,
      dense: false,
      selectChoice: null,
      showModal: false
    };
  },

  methods: {
    close() {
      this.showModal = false;
    },
    volverAtras: function() {
      this.$router.back();
    },
    cleanForm: function() {
      this.price = null;
      this.dense = false;
      this.selectChoice = null;
    },
    submitForm: function() {
      if (this.monto !== null && this.selectChoice !== null) {
        let pendingDeposit = {
          monto: this.price,
          fecha: "25/05/2020",
          tipo: "Transferencia",
          cuenta: this.selectChoice
        };
        this.$store.dispatch("user/addPendingDeposit", pendingDeposit);

        this.$q.notify({
          spinner: true,
          timeout: 800,
          message: "ACTUALIZANDO DEPÓSITOS...",
          color: "indigo-6"
        });

        setTimeout(() => {
          this.$router.push({ name: "DepositsList" });
        }, 1000);
      } else {
        return;
      }
    }
  }
};
</script>









<style scoped>
.customCard {
  width: 90%;
  margin: 10px auto;
}
</style>

