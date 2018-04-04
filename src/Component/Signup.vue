<template>
  <div class="container">
      <b-container class="bv-example-row">
            <b-row>
                <b-col md="9" sm="12">
                          <div class="textmain">
                              Registration
                          </div>

                          <div>
                              In order to contact other users or to place ads for tandem partners, you have to register.
                              <br /><br />
                          </div>

                          <div class="colorgreen">
                              <b>All features on TandemPartners.org are completely free!</b>
                              <br /><br />
                          </div>

                          <div class="loginpanel1">
                            <div class="insidepanel1">Note: All fields must be completed. Only your first name, username, age and gender will be publicly displayed later.</div>
                          </div>

                          <div>
                              <b-container class="bv-example-row">
                                  <b-row>
                                    <b-col>
                                          first given name
                                          <b-form-input
                                            type="text"></b-form-input>
                                    </b-col>
                                    <b-col>
                                        Surname
                                        <b-form-input
                                          type="text"></b-form-input>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                    Username <small class="small">Please Without Special Characters, Umlauts Or Spaces.</small>
                                        <b-form-input
                                          type="text"></b-form-input>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                          password
                                          <b-form-input
                                            type="password"></b-form-input>
                                    </b-col>
                                    <b-col>
                                        Repeat password
                                        <b-form-input
                                          type="password  "></b-form-input>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                    E-mail address
                                        <b-form-input
                                          type="email"></b-form-input>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                          Date of birth
                                          <b-form-input
                                            type="date"></b-form-input>
                                    </b-col>
                                    <b-col>
                                        gender
                                        <b-form-select v-model="selected"
                                          :options="options"></b-form-select>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                        Please enter the displayed security code in the box below.
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="2">
                                          <div class="code">query91</div>
                                    </b-col>
                                    <b-col>
                                        security code
                                        <b-form-input
                                          type="text"></b-form-input>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                          Newsletter
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                    <b-form-checkbox id="checkbox1"
                                                     value="accepted"
                                                     unchecked-value="not_accepted">
                                                     Yes, I would like to receive regular newsletters about information and news on TandemPartners.org.
                                      </b-form-checkbox>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col>
                                    <br />
                                      By registering, I confirm that I have read and accepted the <span class="link">privacy policy</span> .
                                    </b-col>
                                  </b-row>
                              </b-container>
                          </div>



                          <b-button class="btn1">
                              <b>to Register</b>
                         </b-button>
                   </b-col>
                <b-col md="3">
                  <div class="mgbottom"><span class="textcolor">display <span class="spanright"></span></span></div>
                  <div><span class="textcolor">statistics <span class="spanright">04/03/2018</span></span></div>
                  <div class="panel">: <span class="spanright2"><b>58862SHOW</b></span></div>
                  <div class="panel">User: <span class="spanright2"><b>177359</b></span></div>
                  Do you like TandemPartners?
                  <b-card title="Be the first of your friends to like this"
                          img-src="https://lorempixel.com/600/300/food/5/"
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2">

                    </b-card>
                </b-col>
            </b-row>
      </b-container>


  </div>
</template>

<script>
    export default {
      data() {
        return {
          selected: 'Choose..',
            options: [ 'Male', 'Female'
              ]
        }
      }
    }
</script>

<style>
.container {
  margin-top:2%;
  text-align: left;
}

.small {
  font-size:9px;
}

.textmain {
  font-size: 45px;
  color:#435da5;
}

.textcolor {
  color: green;
  font-size: 18px;
}
.code {
  border-style: outset;
  border-width: 1px;
  border-color: #000000;
  background-color: #e5e0e0;
  height: 60px;
  weight: 100%;
  text-align: center;
}
.mgbottom {
margin-bottom: 4%;
}
.panel {
  border-style: ridge;
}
.colorgreen {
  color: #84ce94;
}
.spanright {
  text-align: right;
  margin-left:30%;
}

.spanright2 {
  text-align: right;
  color:#435da5;
  font-size: 22px;
  margin-left:25%;
}

.loginpanel1 {
  border-style: outset;
  border-width: 1px;
  border-color: #FFB410;
  background-color: #fbeccb;
  height: 80px;
  margin-bottom:2%;
}
.insidepanel1 {
  margin: 2%;
}
.btn1{
  background-color:#89b846;
  font-size: 18px;
  width:22%;
  height:6%;
  margin-bottom:100px;
  margin-top:30px;
}
.link{
 color: #3e85ba;
}
</style>
