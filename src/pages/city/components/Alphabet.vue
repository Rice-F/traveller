<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
    {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 组件被重新渲染时发生该事件
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 当字母表发生click事件时，将被点击字母传给City
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // move事件延迟16ms执行，如果在16ms内频繁触发该事件则不执行，优化性能
        this.timer = setTimeout(() => {
          // 当前滑动字母距离顶部高度=当前滑动字母距离页面顶部高度-顶部高度
          const touchY = e.touches[0].clientY - 79
          // 当前滑动字母下标=（当前滑动字母距离顶部高度-字母A距离顶部高度）/ 每个字母高度
          const index = Math.floor((touchY - this.startY) / 20)
          // if表示只有滑动范围在字母表范围内才发布事件
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
