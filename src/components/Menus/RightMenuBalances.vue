<template>
  <div>
    <div v-if="loggedIn">
      <div v-for="(account, id) in accounts" :key="id">
        <RightMenuBalancesEach :account="account"></RightMenuBalancesEach>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    RightMenuBalancesEach: () => import("./RightMenuBalancesEach.vue")
  },
  props: {
    accounts: Object
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapGetters("user", ["getAllAccounts"])
  }
};
</script>

<style>
</style>
