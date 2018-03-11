<template>
  <div class="main">
    <div>
      <el-row class="header">
        <el-col :span="12" class="header-left">
          <el-row class="main-page">intro Title</el-row>
          <el-row class="intention">求职意向：前端开发</el-row>
          <!-- <el-row class="angle"></el-row> -->
        </el-col>
        <el-col :span="12" class="header-right">
          <el-row>Personal Resume</el-row>
        </el-col>
      </el-row >
      <el-row class="header-info">
        <el-col :span="12">
          <el-row>
            <el-col :span="2"><i class="iconfont icon-laba"></i></el-col>
            <el-col :span="10">10 岁</el-col>
          </el-row>
          <el-row>
            <el-col :span="2"><i class="iconfont icon-laba"></i></el-col>
            <el-col :span="10">上海市</el-col>
          </el-row>
          <el-row>
            <el-col :span="2"><i class="iconfont icon-laba"></i></el-col>
            <el-col :span="10">15901998183</el-col>
          </el-row>
          <el-row>
            <el-col :span="2"><i class="iconfont icon-laba"></i></el-col>
            <el-col :span="10">wu08518@126.com</el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          我的照片
        </el-col>
      </el-row>
    </div>

    <el-row class="self-intro vivify popIn">
      <el-col :span="1"><i class="iconfont icon-laba"></i></el-col>
      <el-col :span="23">自我介绍</el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import http from '@/utils/httpclient'
export default {
  mounted () {
    this.init()
  },
  methods: {
    tosigin () {
      console.log('111')
      this.jump({name: 'sigin'})
    },
    init () {
      http.get('static/mock.json', {})
    }
  }
}
</script>

<style lang='stylus' scoped>
.main 
  padding 1rem 0
  .header
    font-size 4rem
    display flex
    align-items flex-end
    .header-left
      border-bottom 1rem solid #e64467
      margin-right 1rem
      position relative
      padding 1rem 2rem
      .main-page
        color #e64467
        font-size 5rem
        text-align left
      .intention
        font-size 2rem
      .angle
        float right
        position absolute
        right 0
        bottom -1rem
        display inline-block
        border-width: .5rem;
        border-color: red;  
        border-right-width: 0;  
        border-style: dashed;  
        border-right-style: solid;  
        border-top-color: transparent;  
        border-bottom-color: transparent;  
    .header-right
      color #81c272
      border-bottom 1rem solid #81c272
  .header-info
    padding 1rem 2rem
  .self-intro
    padding 1rem 2rem

</style>
