import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
let firebaseConfig = {
  apiKey: "AIzaSyBuCCxP5yOy4aB7pMXPNkL3STMbqXWaBWA",
  authDomain: "maverick-4a10e.firebaseapp.com",
  databaseURL: "https://maverick-4a10e-default-rtdb.firebaseio.com",
  projectId: "maverick-4a10e",
  storageBucket: "maverick-4a10e.appspot.com",
  messagingSenderId: "555023793032",
  appId: "1:555023793032:web:37cabb7b836e1e18fd983d"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
