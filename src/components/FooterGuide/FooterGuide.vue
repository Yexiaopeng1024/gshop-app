<template>
      <div class="footer_guide">
    <span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-tableware-full"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wo"></i>
      </span>
      <span>我的</span>
    </span>
      </div>
</template>

<script>

export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}

</script>
<style lang='stylus' scoped>
  @import "../../common/stylus/mixins"
 .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    text-decoration none
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
