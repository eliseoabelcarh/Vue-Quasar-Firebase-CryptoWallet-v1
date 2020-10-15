
import * as types from './types'

export default {

  //GETTER con PARAMETRO
  [types.GET_MARKET_BY_COINS_PAIR]: (state) => (coinsPair) => { return state.markets[coinsPair] },
  [types.GET_HISTORICAL_BTC_ARS]: (state) => { return state.historicoBTCARS },
  [types.GET_HISTORICAL_ETH_ARS]: (state) => { return state.historicoETHARS },

  [types.GET_HISTORICAL_BY_COINS_PAIR]: (state) => (coinsPair) => {
    if (coinsPair === 'BTC-ARS') {
      return state.historicoBTCARS
    }
    if (coinsPair === 'ETH-ARS') {
      return state.historicoETHARS
    }
    return null
  },
}
