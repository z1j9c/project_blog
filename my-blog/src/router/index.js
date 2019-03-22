import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 用户注册
import userRegister from '@/page/register/userRegister'
// 用户登陆
import userLogin from '@/page/login/userLogin'
// 首页
import Home from '@/page/home/index'
// 404
import notFound from '@/page/notFound/not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/blog/',
  routes: [
    { // 首页
      path: '/',
      name: 'homeIndex',
      meta: {
        title: '首页'
      },
      component: Home
    }, {// 用户注册
      path: '/user-register.html',
      name: 'userRegister',
      meta: {
        title: '注册'
      },
      component: userRegister
    }, {// 用户登陆
      path: '/user-login.html',
      name: 'userLogin',
      meta: {
        title: '登陆'
      },
      component: userLogin
    }, {
      path: '/404.html',
      name: 'notFound',
      component: notFound
    }, {
      path: '*',
      redirect: {name: 'notFound'}
    }
  ]
})
