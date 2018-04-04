<template>
  <div>
    <h1 style="text-align:center;">User Informations</h1>
    <hr />
      <table style="width:100%">
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Username</th>
            <th>DOB</th>
          </tr>

          <tr v-for="user in users">
            <td>{{user.id}}</td>
            <td>{{user.fname}}</td>
            <td>{{user.lname}}</td>
            <td>{{user.email}}</td>
            <td>{{user.username}}</td>
            <td>{{user.dob}}</td>
          </tr>

      </table>
  </div>
</template>

<script>
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

export default {
firebase: {
  users: usersRef
},
  data() {
  return {     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
