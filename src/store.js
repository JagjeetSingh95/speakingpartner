import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ip: "",
    data: [],
    input: {
        firstname: "",
        lastname: ""
    },
    response: ""
  },
  actions: {
    hasIp() {
      axios.get("").then(response => {
        
      },error => {

      })
    }
  }
});
