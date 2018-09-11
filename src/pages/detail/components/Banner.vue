<template>
  <div>
    <div
      class="banner"
      @click="handleShowGallary"
    >
      <img class="banner-img" :src="bannerImage" alt="">
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe604;</span>
          {{this.bannerImages.length}}
        </div>
        <div class="banner-title">{{this.sightName}}</div>
      </div>
    </div>
    <common-gallary
      :imgs="bannerImages"
      v-show="showGallary"
      @close="handleGallaryInvisible"
    ></common-gallary>
  </div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImage: String,
    bannerImages: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleGallaryInvisible () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-number
        position absolute
        left .2rem
        right .2rem
        bottom .85rem
        max-width 1.2rem
        height .4rem
        line-height .4rem
        border-radius 2rem
        background rgba(0,0,0,.5)
        text-align center
        font-size .24rem
        .banner-icon
          font-size .24rem
      .banner-title
        position absolute
        left .2rem
        right .2rem
        bottom .36rem
        font-size .36rem
        text-shadow 0 1px 2px rgba(0,0,0,.7)
</style>
