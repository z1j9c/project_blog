// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// jquery
import $ from 'jquery'

// Bootstrap begin
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// Bootstrap end

// popper.js begin
import 'popper.js/dist/umd/popper.min'
// popper.js end

Vue.config.productionTip = false

$(function () {
  // jquery 初始化
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
