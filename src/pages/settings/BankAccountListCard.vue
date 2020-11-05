<template>
  <div>
    <q-separator spaced />
    <q-item>
      <q-item-section top class="col-2">
        <q-item-label
          class="justify-center items-center content-center q-pt-sm"
          >{{ account.banco }}</q-item-label
        >
      </q-item-section>

      <q-item-section top>
        <q-item-label lines="1">
          <span class="text-grey-8">CBU: </span>

          <span class="text-weight-medium">{{ account.CBU }} </span>
        </q-item-label>

        <q-item-label caption lines="1">
          Titular: {{ account.titular }}
        </q-item-label>
        <q-item-label lines="1" class="text-caption">
          <span>Cuenta en {{ account.moneda }}</span>
        </q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div class="text-grey-8 q-gutter-xs">
          <FormEditBankAccount :account="account"></FormEditBankAccount>
          <q-btn
            size="12px"
            flat
            dense
            round
            icon="delete"
            @click="confirmarDelete"
          />
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
                <q-btn
                  flat
                  label="Cancelar"
                  color="primary"
                  @click="closeModal"
                />
                <q-btn
                  flat
                  label="Sí, Borraloo"
                  color="primary"
                  @click="deleteBankAccount"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  components: {
    FormEditBankAccount: () => import("../settings/FormEditBankAccount.vue")
  },
  props: {
    account: Object
  },
  data() {
    return {
      editing: true,
      banco: this.account.banco,
      confirm: false
    };
  },
  methods: {
    confirmarDelete() {
      this.confirm = true;
    },
    deleteBankAccount() {
      this.closeModal();
      this.$store.dispatch("user/deleteBankAccount", this.account);
    },
    closeModal() {
      this.confirm = false;
    }
  }
};
</script>

<style>
</style>
