<template>
  <div class="q-pa-md fit wrap justify-center items-center content-center">
    <div class="row wrap justify-center items-center content-center">
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
        <FormAddBankAccount :showCancelBtn="true"></FormAddBankAccount>
      </q-dialog>
    </div>

    <BankAccountList style="margin: 15px auto"></BankAccountList>
  </div>
</template>



<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  created() {
    //eventBus declarado acá usado en FomrAddBankAccount
    this.$root.$on("closePopup", this.close);
  },
  methods: {
    close() {
      console.log("ejeeeeeeeee");
      this.showModal = false;
    }
  },
  components: {
    FormAddBankAccount: () =>
      import("../../pages/settings/FormAddBankAccount.vue"),
    BankAccountList: () => import("../settings/BankAccountList.vue")
  }
};
</script>

<style>
</style>
