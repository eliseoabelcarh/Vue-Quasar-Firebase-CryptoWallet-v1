
import * as types from './types'

export default {

  [types.SET_USER_ID]: function (state, payload) {
    state.user.id = payload
  },
  [types.SET_DATA_OF_CURRENT_USER]: function (state, payload) {
    state.user.profile = payload.profile
    state.user.accounts = payload.accounts
    state.user.bankAccounts = payload.bankAccounts
    state.user.confirmedDeposits = payload.confirmedDeposits
    state.user.pendingDeposits = payload.pendingDeposits
    state.user.orders = payload.orders
  }
  ,
  [types.ADD_BANK_ACCOUNT]: function (state, payload) {
    state.user.bankAccounts.push(payload)
  },
  [types.UPDATE_PENDING_DEPOSITS]: function (state, payload) {
    state.user.pendingDeposits = [...payload]
  },
  [types.UPDATE_CONFIRMED_DEPOSITS]: function (state, payload) {
    state.user.confirmedDeposits = [...payload]
  },
  [types.ADD_PENDING_DEPOSIT]: function (state, payload) {
    state.user.pendingDeposits = [...payload]
  },
  [types.UPDATE_BALANCE_ARS]: function (state, payload) {
    let actual = Number.parseFloat(state.user.accounts.ARS.saldoActual)
    let nuevo = actual + (payload)
    let x = Number.parseFloat(nuevo).toFixed(2)
    state.user.accounts.ARS.saldoActual = x
  },
  [types.PROCESS_BUY_ORDER]: function (state, payload) {
    if (payload.cuentaParaDescontar === 'ARS') {
      const saldoActualARS = state.user.accounts[payload.cuentaParaDescontar].saldoActual
      const nuevoSaldo = Number(saldoActualARS - payload.montoADescontar)
      state.user.accounts[payload.cuentaParaDescontar].saldoActual = Number.parseFloat(nuevoSaldo).toFixed(2)

    }
    const saldoActualCrypto = state.user.accounts[payload.cuentaParaAcreditar].saldoActual
    const nuevoSaldoCrypto = Number(saldoActualCrypto) + Number(payload.montoAAcreditar)
    state.user.accounts[payload.cuentaParaAcreditar].saldoActual = parseFloat(nuevoSaldoCrypto).toFixed(8)
  },
  [types.PROCESS_SELL_ORDER]: function (state, payload) {
    if (payload.cuentaParaDescontar !== 'ARS') {//tiene que ser de alguna crypto
      const saldoActualCrypto = Number(state.user.accounts[payload.cuentaParaDescontar].saldoActual)
      const nuevoSaldo = Number.parseFloat(saldoActualCrypto - Number(payload.montoADescontar)).toFixed(8)
      state.user.accounts[payload.cuentaParaDescontar].saldoActual = Number(nuevoSaldo)
    }
    if (payload.cuentaParaAcreditar === 'ARS') {
      const saldoActualARS = state.user.accounts[payload.cuentaParaAcreditar].saldoActual
      const nuevoSaldoARS = Number.parseFloat(Number(saldoActualARS) + Number(payload.montoAAcreditar)).toFixed(2)
      state.user.accounts[payload.cuentaParaAcreditar].saldoActual = Number(nuevoSaldoARS)
    }

  },

}
