<template>
<div class="footerclass">
  <hr />
    <b-container class="bv-example-row">
        <b-row class="text-center">
              <b-col sm="12" md="5">
                <h4>about us</h4>
                <small>TandemPartners aims to help language learners from all over the world find a learning
                partner for free. Both sides benefit from learning the respective foreign language
                with the help of a native speaker.</small>
              </b-col>
              <b-col sm="12" md="2">
                  <h4>Info</h4>
                    <div><small>Tips</small></div>
                    <div><small>Downloads</small></div>
              </b-col>
              <b-col sm="12" md="2">
                <h4>Social</h4>
                    <div><small>Facebook</small></div>
                    <div><small>Twiter</small></div>
              </b-col>
              <b-col sm="12" md="3">
                <h4>tandem Partners</h4>
                    <div><small><router-link to="/aboutus">about us</router-link></small></div>
                    <div><small><router-link to="/contact">Contact</router-link></small></div>
                    <div><small><router-link to="/dataprotection">Data protection</router-link></small></div>
                    <div><small>imprint</small></div>
              </b-col>
        </b-row>
        <hr />
        <b-row>
          <small>
            Copyright © 2011-2015 TandemPartners
          </small>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
  return {    title: 'footer' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.footerclass {
  background-color: #ece6e5;
}
</style>
