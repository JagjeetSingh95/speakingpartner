<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from './Component/Home.vue'
import About from './Component/About.vue'
import Contact from './Component/Contact.vue'
import Jaggi from './Component/Jaggi.vue'



export default {
  name: 'app',
  
  component: {
   'Home': Home,
   'About': About,
   'Contact': Contact,
   'Jaggi': Jaggi
  },
  data () {

   }
}
</script>
@import "./assets/bootstrap/bootstrap";
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
