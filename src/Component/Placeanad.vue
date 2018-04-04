<template>
  <div class="container">
      <b-container class="bv-example-row">
            <b-row>
                <b-col md="9" sm="12">
                          <div class="textmain">
                              place an ad
                          </div>

                          <div>
                              To place an ad, you must specify which language is your native language,
                              which language you are looking for a tandem partner and where you live or
                              where you want to meet with your tandem partner. If your place is not in the list,
                              you can simply select a state or "Austria" or "Switzerland".
                              <br /><br />
                          </div>

                          <div>
                              You should briefly and accurately describe who you are and what you are looking for,
                              as this increases the likelihood of being contacted by a suitable tandem partner.
                              You can orient yourself on the following questions:
                              <br /><br />
                          </div>

                          <div>
                                <div>Why do you want to learn the other language?</div>
                                <div>How do you rate your level in this language?</div>
                                <div>What are your goals?</div>
                                <div>What can you offer your tandem partner?</div>
                                <div>How much time do you have for meeting with your tandem partner?</div>
                          </div>

                          <div class="loginpanel">
                            <div class="insidepanel">You must be <span class="link">logged in</span> to create an ad.</div>
                          </div>

                          <b-button class="btnstyle">
                              <b>Register for free</b>
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
</script>

<style>
.container {
  margin-top:2%;
  text-align: left;
}

.textmain {
  font-size: 40px;
  color:#435da5;
}

.textcolor {
  color: green;
  font-size: 18px;
}

.mgbottom {
margin-bottom: 4%;
}
.panel {
  border-style: ridge;
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

.loginpanel {
  border-style: outset;
  border-width: 1px;
  border-color: #FFB410;
  background-color: #fbeccb;
  height: 60px;
  margin-top:3%;
}
.insidepanel {
  margin: 2%;
}
.btnstyle{
  background-color:#89b846;
  font-size: 18px;
  height:10%;
  width:30%;
  margin-bottom:100px;
  margin-top:30px;
}
.link{
 color: #3e85ba;
}
</style>
