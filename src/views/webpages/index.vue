<template>
  <div>
    <div id="nav" class="nav">
      <div class="nav-login-box container" v-if="isLogin">
        <div>
          欢迎您，{{ loginName }}
          <i class="el-icon-right"></i>
        </div>
        <!-- <div v-else></div> -->
      </div>
      <div class="nav_title container">
        <div class="title">铁道车辆</div>
        <div class="btn">
          <el-button type="text">简体中文</el-button>|
          <el-button type="text">ENGLISH</el-button>
        </div>
      </div>
      <div class="nav_box">
        <div class="nav_content">
          <template v-for="(item, index) in navList">
            <router-link class="nav_item" :to="item.value" :key="index">{{ item.name }}</router-link>
          </template>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="footer">
      <div class="footer-info">
        <div>地址：山东省青岛市市北区瑞昌路231号</div>
        <div>
          <span>电话：0532-86083210 053</span>
          <span>|</span>
          <span>邮箱：tdclbjb@vip.sina.com</span>
          <span>|</span>
          <span>邮编：266031</span>
        </div>
        <div>
          <span>技术支持：杭州福汀科技有限公司</span>
          <span>|</span>
          <span>总访问量：237327</span>
        </div>
        <div>版权所有 铁道期刊 2020 保留一切权利 浙ICP备*****3223号</div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "../../plugins/http";
export default {
  data() {
    return {
      navList: [
        { value: "/main", name: "网站首页", icon: "el-icon-s-home" },
        {
          value: "/periodicalDetail",
          name: "期刊介绍",
          icon: "el-icon-s-order"
        },
        { value: "/editorialBoard", name: "编委会", icon: "el-icon-user-solid" },
        { value: "/", name: "理事会", icon: "el-icon-user-solid" },
        { value: "/subscribe", name: "期刊订阅", icon: "el-icon-star-on" },
        { value: "/aboutUs", name: "联系我们", icon: "el-icon-phone" }
      ],
      isLogin: true,
      loginName: "张三"
    };
  },
  mounted() {
    // 动态信息、国外铁路动态  首页顶部导航栏信息
    get("m/site.php?act=findwxnewlist", {}).then(res => {
      console.log(res);
    });
    // 动态信息、国外铁路动态（点击更多）
    get("m/site.php?act=morearticle&page=1&art_type=1", {}).then(res => {
      console.log(res);
    });
    // 模板下载列表
    get("m/site.php?act=ajax_modellist", {}).then(res => {
      console.log(res);
    });
    // 首页bannner
    get("m/site.php?act=banner", {}).then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/less/color";
.nav {
  .nav-login-box {
    background-color: @white;
    text-align: right;
  }
  // height: 230px;
  box-sizing: border-box;
  .nav_title {
    box-sizing: border-box;
    padding: 30px;
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
  .nav_box {
    box-sizing: border-box;
    height: 64px;
    background-color: @background2;
    .nav_content {
      display: flex;
      margin: 0 auto;
      max-width: 1280px;
      justify-content: flex-end;
      .nav_item {
        margin: 0 50px;
        color: white;
        font-size: 16px;
        line-height: 64px;
      }
    }
  }
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  background-color: @white;
}
.footer {
  background-color: @background4;
  padding: 25px;
  .footer-info {
    text-align: center;
    color: @white;
    font-size: 14px;
    > div {
      margin-bottom: 10px;
    }
  }
}
</style>
