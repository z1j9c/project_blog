// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// jquery
import $ from 'jquery'

// nprogress 进度条 begin
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// nprogress 进度条 end

// Bootstrap begin
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// Bootstrap end

// popper.js begin
import 'popper.js/dist/umd/popper.min'
// popper.js end

// vue2-animate.css begin
import 'vue2-animate/dist/vue2-animate.min.css'
// vue2-animate.css end

// vue-wechat-title begin
Vue.use(require('vue-wechat-title'))
// vue-wechat-title end

Vue.config.productionTip = false

$(function () {
  // jquery 初始化
})

// 进度条配置
NProgress.inc(0.3)
NProgress.configure({easing: 'ease', speed: 500, showSpinner: false})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
