<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="javascript:void(0);">My-LOGO</a>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">日记</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:void(0);" data-toggle="dropdown">新闻</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="javascript:void(0);">跳转一</a>
            <a class="dropdown-item" href="javascript:void(0);">跳转二</a>
            <a class="dropdown-item" href="javascript:void(0);">跳转三</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">评论</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">登陆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">注册</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'header_nav',
  data () {
    return {
      text: '导航'
    }
  },
  methods: {
  }
}
$(function () {
})
</script>

<style scoped>
</style>
