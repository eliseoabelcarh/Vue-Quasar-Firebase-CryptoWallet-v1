
import * as types from './types'

export default {




  //GETTER con PARAMETRO
  [types.GET_ICON_BY_COIN]: (state) => (coin) => { return state.cryptos[coin].icon },
  [types.GET_COLOR_BY_COIN]: (state) => (coin) => { return state.cryptos[coin].color },
  [types.GET_SYMBOL_BY_COIN]: (state) => (coin) => { return state.cryptos[coin].icon },


}
