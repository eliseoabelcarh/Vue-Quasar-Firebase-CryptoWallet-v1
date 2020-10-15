<template>
  <q-card class="my-card customCard" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="100px">
          <img :src="profile.picture" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h5">Hola {{ profile.name }}!</q-item-label>
        <q-item-label class="text-body2 text-weight-light"
          >Este es tu panel principal. Desde acá podés gestionar tus depósitos y
          retiros en pesos y seguir los movimientos de tu cuenta.</q-item-label
        >
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  name: "HelloDashboard",
  props: {
    profile: Object
  }
};
</script>

<style scoped>
.customCard {
  width: 90%;
  margin: 10px auto;
}
.avatarImg {
  height: 200px;
  width: 300px;
}
</style>
