
<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-deep-purple-13 text-white">
      <q-toolbar>
        <q-avatar>
          <q-btn flat round dense icon="whatshot" />
        </q-avatar>
        <q-toolbar-title>Title: {{ loggedIn }}</q-toolbar-title>

        <CardAccount
          v-if="loggedIn"
          :profile="currentUserProfile"
        ></CardAccount>

        <q-btn
          v-if="loggedIn"
          dense
          flat
          round
          icon="menu"
          @click="right = !right"
        />

        <div v-else><Login></Login></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="loggedIn"
      show-if-above
      v-model="right"
      side="right"
      bordered
    >
      <!-- drawer content -->
      <RightMenu
        v-if="loggedIn"
        :profile="currentUserProfile"
        :accounts="accountsFromCurrentUser"
      ></RightMenu>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CardAccount: () => import("../components/Menus/CardAccount.vue"),
    RightMenu: () => import("../components/Menus/RightMenu.vue"),
    Login: () => import("../components/Auth/Login.vue")
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapGetters("user", ["getCurrentUserProfile", "getAllAccounts"]),

    currentUserProfile: function() {
      if (this.loggedIn) {
        return this.getCurrentUserProfile;
      } else {
        return null;
      }
    },
    accountsFromCurrentUser: function() {
      if (this.loggedIn) {
        return this.getAllAccounts;
      } else {
        return null;
      }
    }
  },

  data() {
    return {
      right: false
    };
  }
};
</script>
