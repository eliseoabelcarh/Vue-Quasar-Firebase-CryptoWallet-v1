
import * as firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyACRcXrJiQmLaPgq72nb2-z5HhNK_sJrGA",
  authDomain: "crypto-wallet-v1-vue.firebaseapp.com",
  databaseURL: "https://crypto-wallet-v1-vue.firebaseio.com",
  projectId: "crypto-wallet-v1-vue",
  storageBucket: "crypto-wallet-v1-vue.appspot.com",
  messagingSenderId: "293741141886",
  appId: "1:293741141886:web:72d58700d4d406b18bdd2f"
}


let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();

export { firebaseAuth, db }
