<template>
  <div id="app">
    <div id="nav" class="nav-box">
      <template v-for="(item,index) in navList">
        <router-link class="nav-item" :to="item.value" :key="index">
          <i :class="item.icon"></i>
          {{ item.name }}
        </router-link>
      </template>
    </div>
    <div class="container">
    <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { value: "/", name: "首页", icon: "el-icon-s-home" },
        { value: "/", name: "期刊介绍", icon: "el-icon-s-order" },
        { value: "/", name: "编委会", icon: "el-icon-user-solid" },
        { value: "/", name: "期刊订阅", icon: "el-icon-star-on" },
        { value: "/", name: "联系我们", icon: "el-icon-phone" }
      ]
    };
  }
};
</script>
<style lang="less">
@import "assets/css/base";
</style>
<style lang="less" scoped>
.nav-box {
  background-color: #3aa3f5;
  width: 1190px;
  margin: 0 auto;
  height: 130px;
  display: flex;
  border-radius: 10px;
  .nav-item {
    width: 20%;
    display: block;
    height: 130px;
    padding: 30px;
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    &:hover {
      background-color: #198feb;
    }
    i {
      color: #fff;
      display: block;
      font-size: 50px;
    }
  }
}
.container{
  width: 1190px;
  margin: 0 auto;
}
</style>
