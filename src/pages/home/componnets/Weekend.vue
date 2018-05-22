<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
item-img-wrapper
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
   .item-img-wrapper
     overflow hidden
     height 0
     padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipse()
    .item-desc
      line-height .4rem
      color #ccc
      ellipse()
</style>
