import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyCyISP1S-xPA95uzAE9UePhaW-7_c-IUUE",
    authDomain: "speapingpartner.firebaseapp.com",
    databaseURL: "https://speapingpartner.firebaseio.com",
    storageBucket: "speapingpartner.appspot.com",
    messagingSenderId: "148196062764"
  };

let app = Firebase.initializeApp(config)
let db = app.database()
let usersRef = db.ref('users') 
