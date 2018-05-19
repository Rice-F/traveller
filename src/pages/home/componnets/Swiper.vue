<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of swiperList"
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
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://n2-q.mafengwo.net/s11/M00/09/73/wKgBEFr9YtGATpdRAAewM27SB3w73.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
      },
      {
        id: '0002',
        imgUrl: 'https://n2-q.mafengwo.net/s11/M00/84/F5/wKgBEFr7hDqAc7Q-AAe4iFdF5Pg31.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
      },
      {
        id: '0003',
        imgUrl: 'https://n4-q.mafengwo.net/s11/M00/04/A0/wKgBEFr6mmaAPEisAAeUDvn--Hc21.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
      }]
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
