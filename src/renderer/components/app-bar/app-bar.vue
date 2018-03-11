<template>
  <div>
    <el-row>
      <el-col :span="20" class="title">
        <slot name="title"></slot>
      </el-col>
      <el-col :span="2" @click.native="home"><i class="iconfont icon-safe"></i></el-col>
      <el-col :span="2" @click.native="back"><i class="iconfont icon-safe"></i></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.jump({name: 'pages'})
    },
    back () {
      this.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  text-align center 
  margin 2rem 0
</style>
