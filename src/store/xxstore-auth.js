import { firebaseAuth } from '../boot/firebase.js'

const state = {
  loggedIn: false
}
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}
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
const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
