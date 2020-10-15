
import * as types from './types'

export default {

  [types.GET_ALL_ACCOUNTS]: (state) => { return state.user.accounts },


  //GETTER sin PARAMETRO
  [types.GET_CURRENT_USER_PROFILE]: (state) => {
    if (state.user) {
      return state.user.profile;
    } else {
      return null
    }
  },



  //GETTER con PARAMETRO
  [types.GET_ACCOUNT_BY_TYPE]: (state) => (type) => { return state.user.accounts[type] },

  [types.GET_BALANCE_BY_ACCOUNT_TYPE]: (state) => (type) => { return state.user.accounts[type].saldoActual },



  [types.GET_ALL_HISTORY_ORDERS]: (state) => { return state.user.orders },

  [types.GET_ORDERS_BY_MARKET]: (state) => (type) => {
    if (type == null || type === 'ARS') {
      return state.user.orders
    } else {
      return state.user.orders.filter((order) => {
        return order.market === type
      })
    }
  },

  [types.GET_ALL_BANK_ACCOUNTS]: (state) => {
    const accounts = state.user.bankAccounts
    let array = []
    accounts.forEach(obj => {
      let detalle = `Banco: ${obj.banco} - CBU: ${obj.CBU} - ${obj.moneda} `
      array.push(detalle)
    });
    return array
  },

  [types.GET_ALL_BANK_ACCOUNTS_OBJ]: (state) => { return state.user.bankAccounts },

  [types.GET_PENDING_DEPOSITS]: (state) => { return state.user.pendingDeposits },
  [types.GET_CONFIRMED_DEPOSITS]: (state) => { return state.user.confirmedDeposits },

}
