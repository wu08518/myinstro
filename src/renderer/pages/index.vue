<template>
  <div class="main">
    <el-row>
      <el-col :offset="4" :span="6" class="enter" @click.native="enterInfos">在线填写简历信息</el-col>
      <el-col :offset="3" :span="6" class="enter" @click.native="improtDoc">已有信息导入模板</el-col>
    </el-row>
    <el-row class="foot">
      <el-col :span="24">版本：0.0.125</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 
    }
  },
  mounted () {
    // 
  },
  methods: {
    enterInfos () {
      this.jump({name: 'enterinfo'})
    },
    improtDoc () {
      this.jump({name: 'improtDoc'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.enter
  margin-top 12rem
  margin-bottom 12rem
  color #085eee
  border-radius 50%
  min-height 10rem
  line-height 10rem
  text-align center
  box-shadow 0 0 2rem #08a2f9
.foot
  position fixed 
  bottom 2rem
  left 40%
</style>
