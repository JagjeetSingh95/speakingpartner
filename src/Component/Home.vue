<template>
  <div>
      <div class="header">
          <div class="space"></div>
          <div class="textstyle">
                  Quick and free to<br />
                  find a tandem partner
          </div>
            <b-container class="bv-example-row">
              <b-row class="justify-content-md-center">
                    <b-col sm="12" md="3">
                      <v-select v-model="selected1" style="background-color: #ece6e5;" :options="options"></v-select>
                    </b-col>
                    <b-col md="3" sm="12">
                      <v-select  v-model="selected2" style="background-color: #ece6e5;" :options="options"></v-select>
                    </b-col>
                    <b-col md="3" sm="12">
                        <v-select v-model="selected3" style="background-color: #ece6e5;" :options="options"></v-select>
                    </b-col>
              </b-row>
            </b-container>
                <b-button class="btnstyle">
                    Find a tandem partner
               </b-button>
      </div>

      <div class="ads">
            <b-container class="bv-example-row">
              <b-row class="justify-content-md-center">
                    <b-col sm="12" md="4">
                          <img style="height:18%;margin-top:7%;" src="./note.png" />
                          <div class="number"><font class="numberstyle">58840</font> ads</div>
                    </b-col>
                    <b-col md="4" sm="12">
                        <img style="height:22%;" src="./users-icon.png" />
                        <div class="number"><font class="numberstyle">177284</font> users</div>
                    </b-col>
              </b-row>
            </b-container>
      </div>
      <div class="main1"><hr />
          <h6>
              A language tandem is one of the best ways to deepen the knowledge of a foreign language,
              because two native speakers of different languages ​​can communicate directly and help each other.
              How to organize a language tandem and what you should consider, you will find in our language tandem
              tips !
              So that all who are looking for a tandem partner can quickly and for free find their desired language
              tandem, we explain here how best to use our search.
          </h6>
      </div>
      <div class="main2">
            <h1>Tandem partners find in 3 steps</h1>
            <div class="insidemain"><div class="insidefirst">
              <div class="insidemaintext">1. Mother tongue</div>
                  As a rule, a language tandem can only work well if both tandem partners are native speakers
                  of the language the other person is learning. Of course, if you have grown up bilingually or
                  have mastered another foreign language at a particularly high level, you can of course also offer
                  this language. However, one should be almost perfect in this language, so that the tandem partner
                  can benefit from the common language tandem.</div>
            </div>
            <br />

            <div class="insidemain"><div class="insidefirst">
              <div class="insidemaintext">2. Target language</div>
                  In which language do you want to improve your knowledge? A language tandem
                  lives primarily from speaking, which means that you should be able to express yourself in the
                  language that you want to train with the help of a language partner, so that even a conversation
                  can come about.</div>
            </div><br />

            <div class="insidemain"><div class="insidefirst">
              <div class="insidemaintext">3. city or state</div>
                Where do you live or where are regular meetings possible for you? If your city is not in the list,
                simply select the state you live in or "online" if you want to meet via Skype, for example.
                If you are from Austria or Switzerland, you can choose from the largest cities in these countries.
                Since our site is still new and we want to focus on the German-speaking countries, there are currently
                no other countries available.</div>
            </div>
            <b-button class="btnstyle2">
                Register for free
           </b-button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['English','Hindi'],
      selected1: 'I speaking...(mother tongue)',
      selected2: 'I am looking...(target language)',
      selected3: 'I live in...(city/state)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.main1{
margin:7%;
margin-top:-18px;
}

.insidemain{
margin-left:20%;
margin-right:20%;
text-align: left;
border-style: outset;
border-width: 1px;
background-color: #d2c6cd;
}

.insidefirst{
margin:18px;
}

.insidemaintext{
text-align: left;
font-size:28px;
}

.space {
  height:20%;
}

.ads{
height: 200px;
}

.textstyle{
font-size: 60px;
color: white;
font-style: oblique;
}

.btnstyle{
  margin:25px;
  background-color:#4d81ba;
  font-size: 18px;
  height:14%;
  width:20%;
}

.btnstyle2{
  margin:25px;
  background-color:#579643;
  font-size: 22px;
  height:14%;
  width:20%;
}

.number{
  font-size: 40px;
}

.numberstyle{
  color: green;
}

.header {
background-image: url(headerimg.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center center;
height: 500px;
width: 100%;
}

</style>
