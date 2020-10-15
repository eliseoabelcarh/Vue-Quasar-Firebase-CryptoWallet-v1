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
      flat
      label="login With Google"
      icon="fab fa-google"
    />
    <!-- <q-btn @click="logout" flat label="logout" /> -->
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      //formData: { email: "test@bluuweb.cl", password: "123123" }
    };
  },
  methods: {
    //...mapActions("auth", ["logout", "loginWithGoogle"]),
    /* submitForm() {
      console.log("funciona form");
      this.loginUser(this.formData);
    }, */
    loginWithGoogle: function() {
      console.log("enLoginnnnnn");
      this.$store
        .dispatch("auth/loginWithGoogle")
        .then(response => {
          console.log("response en LOGIN", response);
          this.$store
            .dispatch("user/setUserId")
            .then(userId => {
              if (userId) {
                this.$store.dispatch("auth/setLoggedIn", true);
                let id;
                if (userId !== 1) {
                  id = 1;
                } else {
                  id = userId;
                }
                this.$store.dispatch("user/setDataOfCurrentUser", id);
              }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log("err en login", err));

      //console.log("lo que devuelove login withGoogle:", user);
      /*  const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          var user = result.user;
          console.log("user de google en actionSS ", user);
        })
        .catch(function(error) {
          console.log("error en Login vue", error);
        }); */
    },
    logout() {
      console.log("logout succeess");
      this.$store.dispatch("auth/logout");
    }
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  }
};
</script>

<style>
</style>
