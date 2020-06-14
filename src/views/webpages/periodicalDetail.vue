<template>
  <div class=" pd20">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="base-panel">
          <div class="base-panel-header black" style="border:none">
            <span>文章标题</span>
            <!-- <el-button class="more-btn" type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="base-panel">
          <div class="base-panel-header">
            <span>来源期刊</span>
            <!-- <el-button class="more-btn" type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import quesRadioBase from "../../components/QuesRadioBase";
export default {
  components: {},
  data() {
    return {
      userId: this.$route.query.userId || ""
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      this.$api.doclist.findAllDic([this.id]).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/less/main.less";
</style>
