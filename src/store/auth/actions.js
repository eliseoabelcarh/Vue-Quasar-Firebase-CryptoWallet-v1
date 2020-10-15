

import * as types from './types.js'
import { firebaseAuth } from '../../boot/firebase.js'



export default {

  [types.SET_LOGGED_IN]: function ({ commit }, payload) {
    commit(types.SET_LOGGED_IN, payload)
  },

  [types.LOGIN_WITH_GOOGLE]: function ({ commit }) {
    console.log("logeandose con gogole");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("user de google en actionSS ", user);
      })
      .catch(function (error) {
        console.log("error en Login vue", error);
      });
  },
  [types.LOGIN_WITH_EMAIL_AND_PASSWORD]: function ({ commit }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => { console.log('response', response) }).catch(e => { console.log(e) })
  },

  [types.LOGOUT]: function ({ commit }) {
    firebaseAuth.signOut()
  },
  [types.HANDLE_AUTH_STATE_CHANGE]: function ({ commit }) {

    firebaseAuth.onAuthStateChanged(user => {
      console.log('entra a hanlde state', user)
      if (user) {
        commit([types.SET_LOGGED_IN], true)
        //localStorage.setItem('loggedIn', true)
        console.log('en actions handlestae hay user:', user)

      } else {
        commit([types.SET_LOGGED_IN], false);
        //localStorage.setItem('loggedIn', false)
        console.log('en actions handlestae ELSEE hay user:', user)
      }
    })
  },
}




/*
const actions = {
  loginUser({ commit }, payload) {
    firebaseAuth.signInWithEmailAndPassword(
      payload.email, payload.password
    )
      .then(response => {
        console.log('response', response);
      })
      .catch(e => {
        console.log(e);
      })
  },

  loginWithGoogle({ commit }) {

  },


  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        localStorage.setItem('loggedIn', true)
      } else {
        commit('setLoggedIn', false);
        localStorage.setItem('loggedIn', false)
      }
    })
  }
}
 */
