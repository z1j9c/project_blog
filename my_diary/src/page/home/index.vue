<template>
  <div class="container">
    <header>
      <header-nav></header-nav>
    </header>
    <div>{{text}}</div>
    <footer>
      <footer-nav></footer-nav>
    </footer>
  </div>
</template>

<script>
// 页面顶部导航
import HeaderNav from '../../components/header/header_nav'
// 页面底部导航
import FooterNav from '../../components/footer/footer_nav'
export default {
  name: 'homeIndex',
  data () {
    return {
      text: '首页'
    }
  },
  methods: {
  },
  components: {
    'header-nav': HeaderNav,
    'footer-nav': FooterNav
  }
}
</script>

<style scoped>

</style>
