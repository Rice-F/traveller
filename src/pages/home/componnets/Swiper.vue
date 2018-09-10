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
    // 一开始还没获取到数据时，list是个空数组，所以swiper遍历空数组显示到网页上，就不是从第一张图片开始轮播
    // 在遍历之前先判断下是否获取到轮播图数据，如果获取到了再创建轮播
    // 模板里尽量不要出现逻辑性代码，因此在这里先计算好
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
    padding-bottom 31.25%             /*以上的写法：相对图片宽度的33%，提前撑开图片的高度所占位置*/
    background #eee
    .swiper-img
      width 100%
</style>
