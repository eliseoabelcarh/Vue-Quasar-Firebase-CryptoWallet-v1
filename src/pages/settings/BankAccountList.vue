<template>
  <q-list
    bordered
    class="rounded-borders"
    style="max-width: 550px; margin:0 auto"
  >
    <q-item-label header>Cuentas Bancarias</q-item-label>

    <BankAccountListCard
      v-for="(account, id) in this.getAllBankAccountsObj"
      :key="id"
      :account="account"
    >
    </BankAccountListCard>
  </q-list>
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
