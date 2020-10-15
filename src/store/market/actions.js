

import * as types from './types.js'
import * as cryptoService from '../../services/cryptoMarket.js'


function convertToInternalBuySellPrice(price) {
  const profitRateForBuyPrice = 1.02
  const profitRateForSellPrice = 0.02
  const buyPrice = (Number.parseFloat(price * profitRateForBuyPrice)).toFixed(2)
  const sellPrice = (Number.parseFloat(price -= price * profitRateForSellPrice)).toFixed(2)
  return { toBuy: buyPrice, toSell: sellPrice }
}


export default {

  [types.SET_MARKET_PRICES]: async function ({ commit }) {
    let priceAPIFixedBTC_ARS = await cryptoService.getMarketByCoinsPair('BTC-ARS')
    let BTC = convertToInternalBuySellPrice(priceAPIFixedBTC_ARS)
    commit(types.SET_MARKET_PRICES, { market: 'BTC-ARS', buyPrice: BTC.toBuy, sellPrice: BTC.toSell })

    let priceAPIFixedETH_ARS = await cryptoService.getMarketByCoinsPair('ETH-ARS')
    let ETH = convertToInternalBuySellPrice(priceAPIFixedETH_ARS)
    commit(types.SET_MARKET_PRICES, { market: 'ETH-ARS', buyPrice: ETH.toBuy, sellPrice: ETH.toSell })


    let historicoBTC = await cryptoService.getHistoricalBTCARS()
    commit(types.SET_HISTORICAL_BTC_ARS, historicoBTC)

    let historicoETH = await cryptoService.getHistoricalETHARS()
    commit(types.SET_HISTORICAL_ETH_ARS, historicoETH)


  }


}
