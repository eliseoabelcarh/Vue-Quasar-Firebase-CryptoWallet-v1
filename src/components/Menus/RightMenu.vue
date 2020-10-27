<template>
  <a>
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <q-list padding>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'Market' }">
          <q-item-section avatar>
            <q-icon name="fas fa-chart-line" />
          </q-item-section>
          <q-item-section>Market</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'Dashboard' }">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'Wallet' }">
          <q-item-section avatar>
            <q-icon name="account_balance_wallet" />
          </q-item-section>
          <q-item-section>Wallet</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'Settings' }">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>

        <q-expansion-item
          v-model="expanded"
          icon="attach_money"
          label="Cryptos"
          caption="Saldos"
        >
          <q-card>
            <q-card-section>
              <RightMenuBalances :accounts="accounts"></RightMenuBalances>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="~assets/fondo-avatar.svg"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img :src="profile.picture" />
        </q-avatar>
        <div class="text-weight-bold">{{ profile.name }}</div>
        <div>@{{ profile.username }}</div>
      </div>
    </q-img>
  </a>
</template>

<script>
export default {
  name: "RightMenu",
  components: {
    RightMenuBalances: () => import("./RightMenuBalances.vue")
  },
  props: {
    right: Boolean,
    profile: Object,
    accounts: Object
  },
  data() {
    return {
      expanded: true
    };
  }
};
</script>

<style>
</style>
