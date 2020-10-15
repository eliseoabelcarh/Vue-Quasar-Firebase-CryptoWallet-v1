<template>
  <div class="justify-center items-center content-center">
    <q-card
      class="justify-center items-center content-center"
      style="margin:0 auto; max-width:400px"
    >
      <q-card-section class="fit row items-center">
        <span class="q-ml-sm text-h6">Agregar Cuenta Bancaria</span>
      </q-card-section>

      <q-card-section class="fit row items-center">
        <div>
          <div class="q-pa-md">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                ref="input1"
                v-model="banco"
                label="Banco *"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo requerido']"
              />

              <q-input
                ref="input2"
                filled
                v-model="CBU"
                label="CBU *"
                hint="Cuenta en Pesos Argentinos - 3 dígitos"
                type="number"
                counter
                :rules="[
                  val => !!val || '* Campo requerido',
                  val => val.length === 3 || 'Debe tener 3 dígitos'
                ]"
                lazy-rules
              />

              <q-input
                filled
                ref="input3"
                v-model="titular"
                label="Titular *"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo requerido']"
              />

              <q-toggle v-model="accept" label="Soy titular de esta cuenta" />

              <div>
                <q-btn label="Agregar" type="submit" color="primary" />
                <q-btn
                  label="Limpiar"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
                <q-btn
                  v-if="showCancelBtn"
                  flat
                  label="CERRAR"
                  color="primary"
                  @click="closePop"
                />
              </div>
            </q-form>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>




<script>
import { Notify } from "quasar";

export default {
  props: {
    showCancelBtn: Boolean
  },

  data() {
    return {
      banco: null,
      CBU: null,
      titular: null,
      moneda: "Pesos Argentinos",
      accept: false,
      cuentaAgregada: false
    };
  },

  methods: {
    closePop() {
      //eventBus usado en acá declarado en Deposit
      this.$root.$emit("closePopup");
    },
    onSubmit() {
      if (this.$refs.input1.hasError || this.$refs.input2.hasError) {
        this.formHasError = true;
      } else if (this.accept !== true) {
        this.$q.notify({
          color: "negative",
          message: "Debes aceptar ser titular de la cuenta"
        });
      } else {
        const notif = this.$q.notify({
          group: false, // required to be updatable
          timeout: 0, // we want to be in control when it gets dismissed
          spinner: true,
          message: "Actualizando Cuentas..."
        });
        // we simulate some progress here...
        let percentage = 0;
        const interval = setInterval(() => {
          percentage = Math.min(
            100,
            percentage + Math.floor(Math.random() * 22)
          );

          // if we are done...
          if (percentage === 100) {
            notif({
              icon: "done", // we add an icon
              color: "positive",
              spinner: false, //
              message: "Listo Cuenta agregada!!",
              timeout: 4000 //tiempo en desaparecer el verde
            });
            clearInterval(interval);
            this.$store.dispatch("user/addBankAccount", {
              banco: this.banco,
              CBU: this.CBU,
              titular: this.titular,
              moneda: this.moneda
            });
            this.banco = null;
            this.CBU = null;
            this.titular = null;
            this.accept = false;
            this.$refs.input1.resetValidation();
            this.$refs.input2.resetValidation();
            this.$refs.input3.resetValidation();
            this.closePop();
          }
        }, 200);
      }
    },

    onReset() {
      this.banco = null;
      this.CBU = null;
      this.accept = false;
      this.$refs.input1.resetValidation();
      this.$refs.input2.resetValidation();
    }
  }
};
</script>

<style>
</style>>
