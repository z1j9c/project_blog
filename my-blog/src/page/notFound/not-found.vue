<template>
  <div class="not_box">
    <div>
      <h3>{{text}}</h3>
    </div>
    <div>
      <router-link :to="{name:'homeIndex',params:{}}">
        <button class="btn btn-danger">返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      text: '没有找到页面'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.not_box{
  width: 100%;height:100%;
  padding: 20% 0 20% 0;
}
</style>
