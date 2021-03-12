/*
入口JS
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import {Button} from 'mint-ui'
import './mock/mockServer.js'

Vue.component(Button.name,Button)
/* eslint-disable no-new */ new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
