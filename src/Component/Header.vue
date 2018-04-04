<template>
<div>
  <b-navbar toggleable="md" type="dark" class="colorclass">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" class="brand">Speaking Partners</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-navbar-nav>
        <b-nav-item><router-link to="/home">Find a tandem partner</router-link></b-nav-item>
        <b-nav-item><router-link to="/placeanad">Place an ad</router-link></b-nav-item>
        <b-nav-item><router-link to="/registion">Register</router-link></b-nav-item>
        <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
      </b-navbar-nav>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

    </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.colorclass{
background-color:#435da5;
color:#435da5;
}
.brand{
margin-left:8%;
font-size:25px;
}


</style>
