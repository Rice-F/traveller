<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item  border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-particulars">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
        title: '南京海底世界',
        desc: '带孩子一起去的海底世界从新街口打车25元就到了，比较方便，进去后孩子玩的很开心还看了海狮和海豚表演，里面不是很大，但只要孩子玩的开心就好啦！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()
      .item-desc
        line-height .4rem
        color #ccc
        ellipse()
      .item-particulars
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
