

let data = {

  profile: {

    name: 'Abel Carh',
    email: 'abel@abel.com',
    username: 'abelcarh',
    picture: 'https://cdn.quasar.dev/img/boy-avatar.png'
  },
  accounts: {
    ARS: {
      id: 1,
      userId: 1,
      symbol: '$',

      currencyCode: 'ARS',
      currency: 'Pesos Argentinos',
      saldoActual: 500000.10,
    },
    BTC: {
      id: 2,
      userId: 1,
      symbol: 'BTC',

      currencyCode: 'BTC',
      currency: 'Bitcoin',
      saldoActual: 0.55000002,
    },
    ETH: {
      id: 3,
      userId: 1,
      symbol: 'ETH',

      currencyCode: 'ETH',
      currency: 'Ethereum',
      saldoActual: 0.55000001,
    }

  },

  bankAccounts: [
    { id: 1, userId: 1, banco: 'Galicia', CBU: '25515215654646464', titular: 'Abel Carh V', moneda: 'Pesos Argentinos' },
    { id: 2, userId: 1, banco: 'BBVA Francés', CBU: '648484656544646888', titular: 'Abel Carh V', moneda: 'Pesos Argentinos' }
  ],

  confirmedDeposits: [
    {
      id: 9,
      userId: 1,
      tipo: "Transferencia",
      monto: 15452.0,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    },
    {
      id: 10,
      userId: 1,
      tipo: "Transferencia",
      monto: 15518.0,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    }

  ],

  pendingDeposits: [

    {
      id: 1,
      userId: 1,
      tipo: "Transferencia",
      monto: 15150.0,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    },
    {
      id: 2,
      userId: 1,
      tipo: "Transferencia",
      monto: 15237.2,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    },
    {
      id: 3,
      userId: 1,
      tipo: "Transferencia",
      monto: 15262.02,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    },
    {
      id: 4,
      userId: 1,
      tipo: "Transferencia",
      monto: 15305.0,
      fecha: "15/05/2020",
      cuenta: { banco: 'Santander', CBU: '655646587415646' }
    }

  ],




  orders: [
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.24,
      quantity: 4.0,
      total: 87,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "ETH",
      trade: "ETH/ARS",
      type: "SELL",
      price: 1150252.37,
      quantity: 4.3,
      total: 129,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.23,
      quantity: 6.0,
      total: 337,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.67,
      quantity: 4.3,
      total: 413,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "ETH",
      trade: "ETH/ARS",
      type: "SELL",
      price: 1150252.49,
      quantity: 3.9,
      total: 327,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.94,
      quantity: 0.0,
      total: 50,
      date: "12/05/2020"
    },
    {
      userId: 1,
      market: "ETH",
      trade: "ETH/ARS",
      type: "BUY",
      price: 1150252.98,
      quantity: 0,
      total: 38,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "SELL",
      price: 1150252.87,
      quantity: 6.5,
      total: 562,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.51,
      quantity: 4.9,
      total: 326,
      date: "10/05/2020"
    },
    {
      userId: 1,
      market: "BTC",
      trade: "BTC/ARS",
      type: "BUY",
      price: 1150252.65,
      quantity: 7,
      total: 54,
      date: "15/05/2020"
    }
  ]
}

import * as firebaseService from '../services/userFirebaseService.js'
import * as userModel from '../models/user.js'
import { db } from '../boot/firebase.js'



//este pregunta a Persistencia
async function crearWalletsDaoMemoria() {

  const walletsCollection = []

  return {
    getAll: () => { return walletsCollection },
    addWallet: async (wallet) => {
      return walletsCollection.push(wallet)
    },
    getWalletsByUserId: async (userId) => {
      return walletsCollection.filter(elem => {
        return elem.userId === userId
      })
    }
  }

}

async function loadData() {
  const dao = await crearWalletsDaoMemoria()
  for (let key in data.wallets) {
    dao.addWallet(data.wallets[key])
  }
  return dao
}

function saveSomething() {
  // Add a new document in collection "profile"
  /* db.collection("profiles").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
 */
  const userIdDoc = 'MIGb8isp2oQFR9DC9DQO8PeKjay2'
  var docRef = db.collection("profiles").doc(userIdDoc);
  docRef.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data from firebase:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}







//usersAPI pregunta a Dao
export async function getDataByUser(userId) {

  saveSomething()//TODO para integrar proximamente a firestore db
  //const dao = await loadData()
  //let data = await dao.getWalletsByUserId(userId)
  //return data
  //BUSCO Y UNO TODAS LAS TABLAS CON LA INFO DEL USUARIO Y LO dEVUELVO
  let currentUser = await firebaseService.getCurrentUserFirebase()
  let profileGoogle = userModel.crearProfileForGoogleUsers(currentUser)
  data.profile = profileGoogle
  return data
}


export async function getSaldoActualByAccount(accountCode) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data.accounts[accountCode].saldoActual)
    } else {
      reject(null)
    }
  })
}
export async function editBankAccount(bankAccount) {
  return new Promise((resolve, reject) => {
    let arrayConCuentaEncontrada = data.bankAccounts.filter(cuenta => cuenta.id === bankAccount.id)

    if (arrayConCuentaEncontrada.length) {
      //debería editar la cuenta con los datos que llegaron en la db y devolverla
      // a modo pruebas devuelvo la misma q llegó
      resolve(bankAccount)
    } else {
      reject(null)
    }
  })
}
export async function deleteBankAccount(bankAccount) {
  return new Promise((resolve, reject) => {
    let arrayConCuentaEncontrada = data.bankAccounts.filter(cuenta => cuenta.id === bankAccount.id)

    if (arrayConCuentaEncontrada.length) {
      //debería eliminar la cuenta con los datos que llegaron en la db y devolverla
      // a modo pruebas devuelvo la misma q llegó
      resolve(bankAccount)
    } else {
      reject(null)
    }
  })
}
export async function procesarCompra(cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, montoAAcreditar) {
  return new Promise((resolve, reject) => {
    /*   user.accounts[cuentaParaDescontar].saldoActual -= montoADescontar
      user.accounts[cuentaParaAcreditar].saldoActual += montoAAcreditar */

    resolve(true)
  })
}

export async function procesarVenta(cuentaParaDescontar, montoADescontar, cuentaParaAcreditar, montoAAcreditar) {
  return new Promise((resolve, reject) => {
    /*   user.accounts[cuentaParaDescontar].saldoActual -= montoADescontar
      user.accounts[cuentaParaAcreditar].saldoActual += montoAAcreditar */

    resolve(true)
  })
}
