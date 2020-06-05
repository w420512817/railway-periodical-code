<template>
  <div class="header">
    <div class="title">标题</div>
    <div class="info">
      <el-link icon="el-icon-house" @click="$router.push('/main')">首页</el-link>
      <el-link icon="el-icon-user">{{ user }}</el-link>
      <el-link icon="el-icon-edit" @click="logout">退出</el-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  computed: {
    user: function() {
      return sessionStorage.getItem("NAME") || "用户名";
    }
  },
  methods: {
    logout() {
      this.$confirm("是否要退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnClickModal: false,
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "登出成功!"
        });
        this.$router.push("/main");
      });
    }
  }
};
</script>
<style scoped lang="less">
@import "../assets/less/color";
.header {
  display: flex;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid @border1;
  .title {
    line-height: 60px;
    font-size: 20px;
  }
  .info {
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    line-height: 60px;
    .el-link {
      padding: 0 10px;
    }
  }
}
</style>
