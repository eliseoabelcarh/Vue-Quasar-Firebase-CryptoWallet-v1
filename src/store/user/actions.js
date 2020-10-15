

import * as types from './types.js'
import * as userService from '../../services/user'
import * as usersAPI from '../../services/usersAPI.js'


export default {

  [types.SET_USER_ID]: async function ({ state, commit }) {
    try {
      const userId = await userService.getCurrentUserId()
      commit(types.SET_USER_ID, userId)
      return userId
    } catch (error) {
      return null
    }
  },

  [types.SET_DATA_OF_CURRENT_USER]: async function ({ state, commit }, userId) {
    let data = await usersAPI.getDataByUser(userId)
    commit(types.SET_DATA_OF_CURRENT_USER, data)
  },


  [types.ADD_BANK_ACCOUNT]: function ({ state, commit }, payload) {
    payload.id = state.user.bankAccounts.length + 1
    commit(types.ADD_BANK_ACCOUNT, payload)
  },

  [types.SET_DEPOSITO_A_ESTADO_PAGADO]: function ({ commit, state }, payload) {
    if (payload.length == 0) {
      return
    }
    let arr1 = state.user.pendingDeposits
    let arr2 = payload
    let difference = arr1.filter(x => !arr2.includes(x));
    commit(types.UPDATE_PENDING_DEPOSITS, difference)
    let pagados = (state.user.confirmedDeposits).concat(payload)
    commit(types.UPDATE_CONFIRMED_DEPOSITS, pagados)
    let monto = 0;
    payload.forEach(deposito => {
      let x = parseFloat(deposito.monto)
      monto += x
      commit(types.UPDATE_BALANCE_ARS, monto)
    });

  },
  [types.DELETE_PENDING_DEPOSITS]: function ({ commit, state }, payload) {
    let arr1 = state.user.pendingDeposits
    let arr2 = payload
    let difference = arr1.filter(x => !arr2.includes(x));
    commit(types.UPDATE_PENDING_DEPOSITS, difference)
  },
  [types.ADD_PENDING_DEPOSIT]: function ({ commit, state }, payload) {
    let arr1 = state.user.pendingDeposits
    arr1 = arr1.concat(payload)
    commit(types.ADD_PENDING_DEPOSIT, arr1)
  },

  [types.OPEN_BUY_ORDER]: function ({ commit, state }, payload) {
    return new Promise(async (resolve, reject) => {
      let { from, to, amount, buyPrice } = payload
      try {
        const cuentaParaDescontar = from
        //VALIDANDO SALDO EN BD Y NO EN STATE
        let saldoActualEnBD = await usersAPI.getSaldoActualByAccount(cuentaParaDescontar)
        const cuentaParaAcreditar = to
        const montoADescontar = Number.parseFloat(amount * buyPrice).toFixed(2)
        if (saldoActualEnBD >= montoADescontar) {
          try {
            const compraExitosa = await usersAPI.procesarCompra(cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, amount)
            commit(types.PROCESS_BUY_ORDER, { cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, montoAAcreditar: amount })
            resolve(compraExitosa)
          } catch (error) {
            reject(error)
          }
        } else {
          reject('no hay suficiente saldo')
        }
      } catch (error) {
        reject(null)
      }
    })

  },
  [types.OPEN_SELL_ORDER]: function ({ commit, state }, payload) {
    return new Promise(async (resolve, reject) => {
      let { from, to, amount, sellPrice } = payload
      try {
        const cuentaParaDescontar = from
        let saldoActualEnBD = await usersAPI.getSaldoActualByAccount(cuentaParaDescontar)
        const cuentaParaAcreditar = to
        const montoADescontar = Number(amount)
        const montoAAcreditar = Number.parseFloat(Number(sellPrice) * Number(amount)).toFixed(2)
        if (saldoActualEnBD >= montoADescontar) {
          try {
            const ventaExitosa = await usersAPI.procesarVenta(cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, montoAAcreditar)
            commit(types.PROCESS_SELL_ORDER, { cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, montoAAcreditar })
            resolve(ventaExitosa)
          } catch (error) {
            reject(error)
          }
        } else {
          reject('no hay suficiente saldoooo')
        }
      } catch (error) {
        reject(null)
      }
    })
  }


}
