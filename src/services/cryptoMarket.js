
import axios from 'axios'

/*
function dateToTimeStamp(date) {
  let dateParse = Date.parse(date)
  let arrayOfDigits = Array.from(String(dateParse), Number);
  let encontradoDifCero = false
  for (let i = arrayOfDigits.length - 1; i >= 0; i--) {
    let element = arrayOfDigits[i];

    if (element === 0 && encontradoDifCero === false) {
      arrayOfDigits.splice(i, 1);
    }
    if (element != 0) {
      encontradoDifCero = true
    }
  }
  arrayOfDigits = arrayOfDigits.join("")
  return arrayOfDigits
} */

function DolarAPesosArgentinos(dolar) {
  const tipoCambioDolarArs = Number.parseFloat(130.00).toFixed(2)
  return (Number.parseFloat((dolar * tipoCambioDolarArs) * 1.245)).toFixed(2)
}


const priceCryptoVsARS = function (codeCoin) {
  return new Promise(async (resolve, reject) => {
    let response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${codeCoin}USDT`)
    let data = response.data
    let price = (Number.parseFloat(data.price)).toFixed(2)
    price = DolarAPesosArgentinos(price)
    resolve(price)
  })
}




function sumarRestarDias(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}


function dateToFormatDDMMYY(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return `${day}-${month}-${year}`
}


async function askHistoricalPriceToAPI(date, coinName) {
  return new Promise(async (resolve, reject) => {
    let endpoint = `https://api.coingecko.com/api/v3/coins/${coinName}/history?date=${date}&localization=false`
    let response = await axios.get(endpoint)
    let data = response.data
    let price = data.market_data.current_price.usd
    resolve(price)
  })
}

async function getPriceCryptoInSpecificDate(date, coinName) {
  date = dateToFormatDDMMYY(date)
  let datePrice = await askHistoricalPriceToAPI(date, coinName)
  datePrice = Number.parseFloat(datePrice).toFixed(2)
  return datePrice
}


const historical = async function (coinName) {
  let date = new Date()
  let datePrice = await getPriceCryptoInSpecificDate(date, coinName)
  let hace5 = sumarRestarDias(new Date(), -30)
  let hace5Price = await getPriceCryptoInSpecificDate(hace5, coinName)
  let hace10 = sumarRestarDias(new Date(), -60)
  let hace10Price = await getPriceCryptoInSpecificDate(hace10, coinName)
  let hace15 = sumarRestarDias(new Date(), -90)
  let hace15Price = await getPriceCryptoInSpecificDate(hace15, coinName)
  //uniendo dates
  let objeto = {}
  objeto[date] = DolarAPesosArgentinos(datePrice)
  objeto[hace5] = DolarAPesosArgentinos(hace5Price)
  objeto[hace10] = DolarAPesosArgentinos(hace10Price)
  objeto[hace15] = DolarAPesosArgentinos(hace15Price)
  return (objeto)
}


/* function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 */

export async function getHistoricalBTCARS() {
  return await historical('bitcoin')
}

export async function getHistoricalETHARS() {
  return await historical('ethereum')
}

export async function getMarketByCoinsPair(coinsPair) {
  if (coinsPair === 'BTC-ARS') {
    return await priceCryptoVsARS('BTC')
  }
  if (coinsPair === 'ETH-ARS') {
    return await priceCryptoVsARS('ETH')
  }

  //SI NO EXISTE PAR
  else {
    return null
  }

}
