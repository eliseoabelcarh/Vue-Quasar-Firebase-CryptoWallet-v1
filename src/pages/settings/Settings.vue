<template>
  <q-page style="padding-top: 80px">
    <router-view></router-view>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Settings</q-toolbar-title>

        <div class="q-pa-md">
          <q-btn-dropdown flat color="white" label="Go to">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'Settings' }">
                <q-item-section>
                  <q-item-label>Cuentas Bancarias</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-page-sticky>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    }
  }
};
</script>

<style>
</style>
