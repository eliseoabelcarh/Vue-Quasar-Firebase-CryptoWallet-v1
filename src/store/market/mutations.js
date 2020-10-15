
import * as types from './types'

export default {

  [types.SET_MARKET_PRICES]: function (state, payload) {
    state.markets[payload.market].buyPrice = payload.buyPrice
    state.markets[payload.market].sellPrice = payload.sellPrice
  },

  [types.SET_HISTORICAL_BTC_ARS]: function (state, payload) {
    state.historicoBTCARS = payload
  },


  [types.SET_HISTORICAL_ETH_ARS]: function (state, payload) {
    state.historicoETHARS = payload
  }


}
