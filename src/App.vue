<template>
  <div id="app">
    <div id="nav" class="nav">
      <div class="nav-box">
        <template v-for="(item, index) in navList">
          <router-link class="nav-item" :to="item.value" :key="index">
            <i :class="item.icon"></i>
            <p>{{ item.name }}</p>
          </router-link>
        </template>
      </div>
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
<style lang="less" scoped>
@import "assets/less/base";
.nav {
  height: 600px;
  .nav-box {
    background-image: @linear1;
    width: 1190px;
    margin: 0 auto;
    position: relative;
    top: 400px;
    height: 150px;
    display: flex;
    border-radius: 8px;
    .nav-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: @white;
      font-size: 16px;
      border-radius: 8px;
      &:hover {
        background-image: @linear2;
      }
      i {
        color: @white;
        display: block;
        font-size: 50px;
      }
      p {
      }
    }
  }
}
.container {
  width: 1190px;
  margin: 0 auto;
}
</style>
