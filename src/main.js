import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './Component/Header.vue'
import Footer from './Component/Footer.vue'

import VueRouter from 'vue-router'
import Routes from './routes'

import VueResource from 'vue-resource';
import VueFire from 'vuefire'

import { store } from './store'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect);
Vue.use(VueResource);

Vue.use(VueFire)
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

new Vue({
  el: '#app',
  render: h => h(App),
  router: routes
})
