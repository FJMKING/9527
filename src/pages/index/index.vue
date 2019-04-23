<template>
  <div class="index">
    <!-- //search -->
    <div class="search">
      <!-- address choose -->
      <!-- <div class="search-address"> -->
      <picker
        @change="bindPickerChange($event)"
        class="search-address"
        :value="index"
        :range="array"
      >
        <div class="picker">
          {{array[index]}}
        </div>
      </picker>
      <!-- </div> -->
      <!-- search action -->
      <div class="search-action">
        <input
          v-model="searchValue"
          placeholder-style="font-size: 14px;"
          placeholder="搜索热门活动"
          type="text"
        >
      </div>
    </div>
    <!-- swiper -->
    <swiper
      indicator-dots
      autoplay
      circular
    >
      <div
        v-for="item in imgList"
        :key="item"
      >
        <swiper-item>
          <image
            :src="item"
            class="slide-image"
            aspectFill
          />
        </swiper-item>
      </div>
    </swiper>
    <!-- bar -->
    <div class="bar">
      <div class="bar-list">
        <div class="bl-show">
          <img :src="Url+'clubs.svg'">
        </div>
        <div class="bl-title">社团招新</div>
      </div>
      <div class="bar-list">
        <div class="bl-show">
          <img :src="Url+'meeting.svg'">
        </div>
        <div class="bl-title">讲座报名</div>

      </div>
      <div class="bar-list">
        <div class="bl-show">

          <img :src="Url+'recruitment.svg'">
        </div>
        <div class="bl-title">干部招新</div>

      </div>
      <div class="bar-list">
        <div class="bl-show">

          <img :src="Url+'jiangbei_bisai.svg'">
        </div>
        <div class="bl-title">比赛报名</div>

      </div>
    </div>
    <!-- hot bar -->
    <div class="hot-bar">
      <div :class="currenIndex===index?'hb-title active-hbt':'hb-title'"  v-for="(item,index) in hotBarTip" :key="index" @click="chooseHot(index)">{{item}}</div>
      <!-- <div class="hb-title">热门比赛</div>
      <div class="hb-title">热门讲座</div> -->
    </div>
    <!-- hot bar-list -->
    <div class="hot-bar-list" v-if="currenIndex===0">
      <div class="list-item" v-for="item in [0,1,2]" :key="item">
        <div class="list-left">
          <img :src="Url+'u74.png'" >
        </div>
        <div class="list-center">
          <div class="lc-title">某某大学游泳协会</div>
          <div class="lc-btitle">游泳协会招新啦</div>
          <div class="lc-address">地址：东莞市</div>
          <div class="lc-time">时间：2019-01-01 09:30-12:00</div>
        </div>
        <div class="list-right">
            <div class="lr-order">已结束</div>
            <div class="lr-go">
            <img :src="Url+'u26.png'" alt="">

            </div>
        </div>
      </div>
      <div class="loading">
      <div
        v-if="hasMore"
        class="loding-it"
      >
        <img :src="Url+'loading.gif'">
      </div>
      <div v-if="!hasMore">加载更多</div>
    </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      Url: '',
      array: ['东莞市', '广州市', '阳江市', '珠海市'],
      hotBarTip: ['热门招新', '热门比赛', '热门讲座'],
      currenIndex: 0,
      index: 0,
      searchValue: '',
      imgList: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      hasMore: false
    }
  },
  mounted () {
    this.Url = this.imgUrl
  },

  methods: {
    bindPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.index = e.mp.detail.value
    },
    chooseHot (index) {
      console.log(index)
      this.currenIndex = index
    }
  },
  onReachBottom () {
    // wx.showNavigationBarLoading()
    // wx.startPullDownRefresh()
    // 加载下一页
    this.hasMore = true
    console.log(111)
  }

}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


