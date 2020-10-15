import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import market from './market'
import cryptocurrencies from './cryptocurrencies'
import auth from './auth'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */



export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      market,
      cryptocurrencies,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
