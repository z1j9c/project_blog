<template>
  <div class="hello">
    {{msg}}
    <button class="btn btn-primary">点击我</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '页面'
    }
  }
}
</script>

<style scoped>

</style>
