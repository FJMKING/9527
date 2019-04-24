<template>
  <div class="classification">
    <!-- bar-serach -->
    <div class="bar-search">
      <!-- 筛选 -->
       <div class='search-one' @click='showMsgOne()'>
        <span class="saech-one-title">{{defautValueOne}}</span>
        <image v-if="Url" style='height:20rpx;width:20rpx;' :src="Url+'up1.png'"></image>
       </div>
       <div class="select-one" v-if="oneStatus">
        <div class="select_one" @click="mySelectOne(item)"  v-for="(item,index) in selectListOne" :key="index">{{item}}</div>
       </div>
       <!-- 日期 -->
        <div class='search-two' @click='showMsgTwo()'>
        <span class="saech-two-title">{{defautValueTwo}}</span>
        <image v-if="Url" style='height:20rpx;width:20rpx;' :src="Url+'up1.png'"></image>
       </div>
       <div class="select-two" v-if="twoStatus">
        <div class="select_two" @click="mySelectTwo(item)"  v-for="(item,index) in selectListTwo" :key="index">{{item}}</div>
       </div>
       <!-- 类型 -->
        <div class='search-three' @click='showMsgThree()'>
        <span class="saech-three-title">{{defautValueThree}}</span>
        <image v-if="Url" style='height:20rpx;width:20rpx;' :src="Url+'up1.png'"></image>
       </div>
       <div class="select-three" v-if="threeStatus">
        <div class="select_three" @click="mySelectThree(item)"  v-for="(item,index) in selectListThree" :key="index">{{item}}</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oneStatus: false,
      twoStatus: false,
      threeStatus: false,
      defautValueOne: '筛选',
      defautValueTwo: '日期',
      defautValueThree: '类型',
      selectListOne: ['热门招新', '热门比赛', '热门讲座'],
      selectListTwo: ['04-24', '04-25', '04-26'],
      selectListThree: ['年轻', '靓丽', '漂亮'],
      selectOne: '',
      selectTwo: '',
      selectThree: '',
      Url: ''
    }
  },
  mounted () {
    this.Url = this.imgUrl
    console.log(this.imgUrl)
  },
  methods: {
    showMsgOne () {
      this.oneStatus = !this.oneStatus
    },
    showMsgTwo () {
      this.twoStatus = !this.twoStatus
    },
    showMsgThree () {
      this.threeStatus = !this.threeStatus
    },
    mySelectOne (item) {
      this.selectOne = item
      this.oneStatus = false
      console.log(this.selectOne)
    },
    mySelectTwo (item) {
      this.selectTwo = item
      this.twoStatus = false
      console.log(this.selectTwo)
    },
    mySelectThree (item) {
      this.selectThree = item
      this.threeStatus = false
      console.log(this.selectThree)
    }

  }
}
</script>
<style lang="scss" scoped>
.bar-search{
 position: relative;
  height: 30px;
  width: 100%;
  background-color: #fff;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
 .search-one,.search-two,.search-three{
   padding: 10px;
   margin-right: 40px;
 }
  .saech-one-title, .saech-two-title, .saech-three-title{
     margin-right: 10px;
   }
 .select-one,.select-two,.select-three{
    position: absolute;
    top: 30px;

   }
 .select-one{
    left: 10px;
 }
 .select-two{
    left: 110px;
 }
 .select-three{
    left:230px;
 }
.select_one,.select_two,.select_three{
      font-size: 13px;
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #fff;
      opacity: .6;
      border-bottom: 1px solid #666;
    }
  
}
</style>


