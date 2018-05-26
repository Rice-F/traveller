<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img class="swiper-img" alt="" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 56%             /*以上的写法：相对图片宽度的33%，提前撑开图片的高度所占位置*/
    background #eee
    .swiper-img
      width 100%
</style>
