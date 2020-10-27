
import * as firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBH1eDVe519YvA0BdWxyp4mzOoTITYl9Vg",
  authDomain: "vuequasarfirebasecryptowallet1.firebaseapp.com",
  databaseURL: "https://vuequasarfirebasecryptowallet1.firebaseio.com",
  projectId: "vuequasarfirebasecryptowallet1",
  storageBucket: "vuequasarfirebasecryptowallet1.appspot.com",
  messagingSenderId: "250915762074",
  appId: "1:250915762074:web:a809910063db17ad255423"
}


let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();


export { firebaseAuth, db }
