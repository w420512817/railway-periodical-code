<template>
  <div>
    <div id="nav" class="nav">
      <div class="nav_title container">
        <div class="title">铁道车辆</div>
        <div class="btn">简体中文|ENGLISH</div>
      </div>
      <div class="nav_box">

      </div>
      <!-- <div class="nav-box">
        <template v-for="(item, index) in navList">
          <router-link class="nav-item" :to="item.value" :key="index">
            <i :class="item.icon"></i>
            <p>{{ item.name }}</p>
          </router-link>
        </template>
      </div>-->
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
        { value: "/main", name: "首页", icon: "el-icon-s-home" },
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
@import "../../assets/less/color";
.nav {
  // height: 230px;
  box-sizing: border-box;
  .nav_title {
    box-sizing: border-box;
    padding: 55px;
    background-color: @white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .title {
      color: @text3;
      font-size: 64px;
      font-weight: bold;
    }
    .btn {
      font-size: 16px;
    }
  }
  .nav_box{
    box-sizing: border-box;
    height: 64px;
    background-color: @background2;
  }
}
// .nav {
//   height: 600px;
//   .nav-box {
//     text-align: center;
//     background-image: @linear1;
//     width: 1190px;
//     margin: 0 auto;
//     position: relative;
//     top: 400px;
//     height: 150px;
//     display: flex;
//     border-radius: 8px;
//     .nav-item {
//       width: 20%;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       color: @white;
//       font-size: 16px;
//       border-radius: 8px;
//       &:hover {
//         background-image: @linear2;
//       }
//       i {
//         color: @white;
//         display: block;
//         font-size: 50px;
//       }
//       p {
//       }
//     }
//   }
// }
.container {
  width: 1728px;
  margin: 0 auto;
  background-color: @white;
}
</style>
