<template>
  <div class="main">
    <app-bar>
      <div slot="title"><b>在线建立</b></div>
    </app-bar>
    <!-- 左边信息 -->
    <el-row>
      <el-col :span="18" class="xls-info">
        <div class="xls-info-area">
          <el-row>
            <el-col :span="24">
              <el-row><i class="iconfont icon-safe"></i><span>自我评价</span></el-row>
              <el-row class="enter-txt"><textarea type="text" class="text-area" placeholder="自我评价"/></el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-row><i class="iconfont icon-safe"></i><span>工作经验</span></el-row>
              <el-row class="enter-txt"><textarea type="text" class="text-area" placeholder="自我评价"/></el-row>
            </el-col>
          </el-row>
          <div v-if="addNub.length !== 0">
            <el-row v-for="(item, index) in addNub" :key="index" >
              <el-col :span="24">
                <el-row>
                  <el-col :span="20"><i class="iconfont icon-safe"></i><input type="text" maxlength="8" minlength="2" value placeholder="自定义模块"/></el-col>
                  <el-col :span="4" @click.native="delxls(index)">delete<i class="iconfont"></i></el-col>
                </el-row>
                <el-row class="enter-txt"><textarea type="text" class="text-area" value placeholder="自定义内容"/></el-row>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-row class="add-btn">
          <i @click="addxls" class="iconfont">+ 添加</i>
        </el-row>
        <el-row>
          <el-col :span="24" class="commit-area">
            <el-button type="primary" round>提 交</el-button>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右边信息 -->
      <el-col :span="6">
        <el-row>
          <el-col :span="24">
            头像
          </el-col>
        </el-row>
        <el-row class="personal">
          <ul>
            <li>基本信息</li>
            <li><i class="iconfont icon-safe"></i><input type="text" class="text-info" placeholder="姓名"/></li>
            <li><i class="iconfont icon-safe"></i><input type="number" class="text-info" placeholder="年龄"/></li>
            <li><i class="iconfont icon-safe"></i><input type="tel" class="text-info" placeholder="电话"/></li>
            <li><i class="iconfont icon-safe"></i><input type="email" class="text-info" placeholder="邮箱"/></li>
          </ul>
        </el-row>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      addNub: []
    }
  },
  methods: {
    addxls () {
      this.addNub.push({id: this.num++})
    },
    delxls (index) {
      console.log('要删除的', index)
      this.addNub.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.xls-info
  .xls-info-area
    max-height 50rem
    overflow-y auto
    margin-right .5rem
    .el-row
      margin 1rem 0
    .enter-txt
      .text-area
        display flex
        margin 0 auto
        width 90%
        min-height 5rem
        border .1rem solid #e0e0e0
        border-radius .2rem
  .add-btn
    text-align right 
    padding-right 3rem
    line-height 4rem
.personal
  li 
    margin 2rem 0
    .text-info
      border-bottom .1rem solid #d0d0d0  
      padding-left .5rem
.commit-area
  display flex
  justify-content center
</style>
