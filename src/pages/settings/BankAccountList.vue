<template>
  <div>
    <q-list
      bordered
      class="rounded-borders"
      style="max-width: 550px; margin:0 auto"
    >
      <q-item-label header>Cuentas Bancarias</q-item-label>
      <div v-if="this.getAllBankAccountsObj.length">
        <BankAccountListCard
          v-for="(account, id) in this.getAllBankAccountsObj"
          :key="id"
          :account="account"
        >
        </BankAccountListCard>
      </div>
      <div v-else class="row wrap justify-center items-center content-center">
        <q-separator />
        <div style="margin: 10px auto">
          No tiene cuentas bancarias agregadas
        </div>
      </div>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getAllBankAccountsObj"])
  },

  components: {
    BankAccountListCard: () =>
      import("../../pages/settings/BankAccountListCard.vue")
  }
};
</script>

<style>
.customCard {
  max-width: 500px;
  margin: 5px auto;
  padding: 0 0;
}
</style>
