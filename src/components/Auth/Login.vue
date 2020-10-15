<template>
  <div class="q-pa-md">
    <!--
    <q-btn v-if="!loggedIn">LogIn</q-btn>
    <q-btn v-else @click="logoutUser">Logout</q-btn>
    <q-btn v-if="!loggedIn">LogUp</q-btn>
    {{ loggedIn }}
    <form @submit.prevent="submitForm">
      <q-input v-model="formData.email" label="Ingrese correo"></q-input>
      <q-input v-model="formData.password" label="Ingrese password"></q-input>
      <q-btn type="submit">Ingresar</q-btn>
      </form>
      -->

    <q-btn
      v-if="!loggedIn"
      @click="loginWithGoogle"
      color="white"
      text-color="black"
      label="loginWithGoogle"
    />
    <q-btn @click="logout" color="white" text-color="black" label="logout" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return {
      //formData: { email: "test@bluuweb.cl", password: "123123" }
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser", "logoutUser", "loginWithGoogle"]),
    submitForm() {
      console.log("funciona form");
      this.loginUser(this.formData);
    },
    loginWithGoogle() {
      this.loginWithGoogle();
    },
    logout() {
      this.logoutUser();
      console.log("logout succeess");
      this.$store.dispatch("user/cleanUserState");
    }
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  }
};
</script>

<style>
</style>
