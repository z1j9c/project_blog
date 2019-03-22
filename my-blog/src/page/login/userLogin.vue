<template>
  <div class="user-login">
    <!--页面顶部导航 begin-->
    <header class="fixed-top">
      <header-nav></header-nav>
    </header>
    <!--页面顶部导航 end-->

    <!--页面正文 begin-->
    <div class="container ulo-box">
      <div class="row align-items-center justify-content-center">
        <div class="login-center">
          <h4 class="mb-md-5">用户登陆</h4>
          <div class="">
            <form class="">
              <div class="form-group form-inline">
                <label for="name" class="name_let">用户名：</label>
                <input type="text" class="form-control" id="name" placeholder="请输入登陆用户名">
              </div>
              <div class="form-group form-inline">
                <label for="password" class="pass_let">密码：</label>
                <input type="password" class="form-control" id="password" placeholder="请输入登陆密码">
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary btn_let">登陆</button>
              </div>
              <div class="form-group">
                <router-link :to="{name:'userRegister',params:{}}">
                  没有账号？去注册
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--页面正文 end-->
    <!--背景图片 begin-->
    <div class="page-back" :style="{backgroundImage:'url('+bmg+')'}"></div>
    <!--背景图片 end-->
    <!--页面底部页脚 begin-->
    <footer class="bg-dark fixed-bottom">
      <footer-nav></footer-nav>
    </footer>
    <!--页面底部页脚 end-->
  </div>
</template>

<script>
// 页面顶部导航
import HeaderNav from '../../components/header/header_nav'
// 页面底部导航
import FooterNav from '../../components/footer/footer_nav'
export default {
  name: 'userLogin',
  data () {
    return {
      text: '用户注册',
      bmg: require('../../../static/image/page_back/login_back.jpg')
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    'header-nav': HeaderNav,
    'footer-nav': FooterNav
  }
}
</script>

<style scoped>
.user-login{
}
/*登陆区域*/
.user-login .ulo-box{
  position: relative;
  z-index: 10;
  color:#fff;
}
.user-login .page-back{
  position: fixed;
  z-index: 1;
  top:0;left:0;right:0;bottom:0;
  width:100%;height:100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.user-login .login-center{
  margin-top: 15%;
  margin-bottom: 15%;
}
.user-login .pass_let{
  letter-spacing: 8px;
}
.user-login .name_let{
  letter-spacing: 2px;
}
.user-login .btn_let{
  letter-spacing: 6px;
  padding-left:18px;
}
</style>
