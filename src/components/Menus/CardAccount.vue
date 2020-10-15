<template>
  <div class="q-pa-md">
    <q-btn stretch flat icon="assignment_ind" :label="profile.name">
      <q-menu transition-show="flip-right" transition-hide="flip-left">
        <!--cuadro -->
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="column items-center">
              <q-avatar size="72px">
                <img :src="profile.picture" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">
                {{ profile.name }}
              </div>

              <q-btn
                color="deep-purple-13"
                label="Logout"
                @click="this.logout"
                outline
                rounded
                size="md"
                v-close-popup
              />
            </div>

            <!-- submenu-->
            <q-list padding class="rounded-borders text-deep-purple-13">
              <q-item
                clickable
                v-ripple
                :to="{ name: 'Account' }"
                v-close-popup
                active-class="text-blue-grey-10"
              >
                <q-item-section avatar>
                  <q-icon name="bubble_chart" />
                </q-item-section>
                <q-item-section>Profile</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :to="{ name: 'Support' }"
                v-close-popup
                active-class="text-blue-grey-10"
              >
                <q-item-section avatar>
                  <q-icon name="chat" />
                </q-item-section>
                <q-item-section>Support</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "CardAccount",
  props: {
    profile: Object
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      console.log("logout succeess");
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
<style scoped>
</style>
