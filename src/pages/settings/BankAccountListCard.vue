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
      banco: this.account.banco
    };
  }
};
</script>

<style>
</style>
