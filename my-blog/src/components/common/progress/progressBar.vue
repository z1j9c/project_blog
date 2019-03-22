<template>
  <transition name="fade">
    <div class="progress-bar" v-if="isShow">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    /**
     * 每10毫秒自增幅度
     */
    step: {
      type: Number,
      default: 5
    },
    /**
     * 初始值
     */
    initVal: {
      type: Number,
      default: 0
    },
    /**
     * 到一定进度停止
     */
    stopVal: {
      type: Number,
      default: 80
    },
    /**
     * 进度条继续到成功
     */
    isOK: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: true, // 是否显示进度条
      val: 0 // 进度
    }
  },
  mounted () {
    // 初始化加载进度，加载到百分之多少由stopVal决定
    this.val = this.initVal
    let step = this.step
    let timer = setInterval(() => {
      this.val = this.val + step
      this.$el.style.width = this.val + '%'
      if (this.val >= this.stopVal) {
        clearInterval(timer)
        return false
      }
    }, 10)
  },
  watch: {
    // 监听组件 props 变化决定是否继续加载，一般在父组件数据加载完成后改变此标志
    isOK () {
      let val = this.val
      let step = this.step
      let timer = setInterval(() => {
        val = val + step
        this.$el.style.width = val + '%'
        // 加载到百分之百
        if (val >= 100) {
          // 关闭定时器
          clearInterval(timer)
          // 加载完成关闭进度条
          this.isShow = false
          // 加载完成的回调
          this.$emit('callback', 'load success')
          return false
        }
      }, 10)
    }
  }
}
</script>

<style scoped>
.progress-bar {
  position:fixed;
  top:0;height:5px;
  width: 0px;
  background-color:#999;
  z-index: 999;
}
.fade {
&-enter-active, &-leave-active {
  transition: all .3s;
}
&-enter, &-leave-active {
  opacity: 0;
}
}
</style>
