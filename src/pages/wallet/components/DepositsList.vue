<template>
  <div
    bordered
    class="guo row justify-center items-center content-center"
    style="margin:0 auto;min-width:100%;"
  >
    <TableOfDepositsPendings
      style="min-width:350px;margin:50px 15px 15px 15px"
    ></TableOfDepositsPendings>
    <TableOfDepositsConfirmed
      style="min-width:350px;margin:15px"
    ></TableOfDepositsConfirmed>

    <q-page-sticky position="top" style="margin-top:50px;" expand>
      <q-toolbar>
        <q-card-actions style="min-width:350px;" align="left">
          <q-btn
            @click="this.volverAtras"
            stretch
            flat
            icon="fas fa-arrow-left"
            label="Volver"
            class="text-deep-purple-13"
          ></q-btn>
        </q-card-actions>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>




<script>
export default {
  name: "DepositsList",
  components: {
    TableOfDepositsPendings: () => import("./TableOfDepositsPendings.vue"),
    TableOfDepositsConfirmed: () => import("./TableOfDepositsConfirmed.vue")
  },
  methods: {
    volverAtras: function() {
      this.$router.back();
    }
  }
};
</script>

<style lang="sass" scoped>
</style>

