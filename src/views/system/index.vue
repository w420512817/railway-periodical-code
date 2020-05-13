<template>
  <div>
    <el-container>
      <el-header style="padding:0">
        <sys-header></sys-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-menu></nav-menu>
        </el-aside>
        <el-main>
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SysHeader from "../../components/SysHeader";
import NavMenu from "../../components/NavMenu";
export default {
  data() {
    return {};
  },
  components: {
    SysHeader,
    NavMenu
  }
};
</script>
<style lang="less">
@import "../../assets/less/base";
</style>
<style lang="less" scoped>
</style>
