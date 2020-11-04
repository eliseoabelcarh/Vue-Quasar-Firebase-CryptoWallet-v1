<template>
  <div>
    <q-btn size="12px" flat dense round icon="edit" @click="mostrarDialog" />
    <q-dialog persistent v-model="showDialog">
      <div class="justify-center items-center content-center">
        <q-card
          class="justify-center items-center content-center"
          style="margin:0 auto; max-width:400px"
        >
          <q-card-section class="fit row items-center">
            <span class="q-ml-sm text-h6">Editar Cuenta Bancaria</span>
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
                    :rules="[
                      val => (val && val.length > 0) || 'Campo requerido'
                    ]"
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
                    :rules="[
                      val => (val && val.length > 0) || 'Campo requerido'
                    ]"
                  />

                  <q-toggle
                    v-model="accept"
                    label="Soy titular de esta cuenta"
                  />

                  <div>
                    <q-btn label="Guardar" type="submit" color="primary" />
                    <q-btn
                      label="Limpiar"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                    <q-btn
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
    </q-dialog>
  </div>
</template>




<script>
import { Notify } from "quasar";

export default {
  props: {
    account: {
      type: Object
    }
  },

  data() {
    return {
      showDialog: false,
      banco: this.account.banco,
      CBU: this.account.CBU,
      titular: this.account.titular,
      moneda: this.account.moneda,
      accept: false,
      cuentaAgregada: false
    };
  },

  methods: {
    closePop() {
      this.showDialog = false;
    },
    mostrarDialog() {
      this.showDialog = true;
    },
    onSubmit() {
      if (this.accept !== true) {
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
              message: "Cuenta editada correctamente!!",
              timeout: 4000 //tiempo en desaparecer el verde
            });
            clearInterval(interval);
            this.$store.dispatch("user/editBankAccount", {
              id: this.account.id,
              banco: this.banco,
              CBU: this.CBU,
              titular: this.titular,
              moneda: this.moneda
            });
            this.accept = false;
            this.closePop();
          }
        }, 200);
      }
    },

    onReset() {
      this.banco = null;
      this.CBU = null;
      this.titular = null;
      this.accept = false;
      this.$refs.input1.resetValidation();
      this.$refs.input2.resetValidation();
    }
  }
};
</script>

<style>
</style>>
