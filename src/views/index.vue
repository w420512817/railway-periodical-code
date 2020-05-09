<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="base-panel">
          <div class="base-panel-header">
            <span>期刊信息</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="base-line">
              <div class="base-line-title">主管</div>
              <div class="base-line-info">中国中车集团有限公司</div>
            </div>
            <div class="base-line">
              <div class="base-line-title">主办</div>
              <div class="base-line-info">中车青岛四方车辆研究所有限公司</div>
            </div>
            <div class="base-line">
              <div class="base-line-title">编辑出版</div>
              <div class="base-line-info">《铁道车辆》编辑部</div>
            </div>
            <div class="base-line">
              <div class="base-line-title">主编</div>
              <div class="base-line-info">陈凯</div>
            </div>
            <div class="base-line">
              <div class="base-line-title">副主编</div>
              <div class="base-line-info">田玉坤</div>
            </div>
            <div class="base-line">
              <div class="base-line-title">标准编号</div>
              <div class="base-line-info">ISSN 1001-4632  CN 11-2480/U</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class></div>
      </el-col>
      <el-col :span="8">
        <div class></div>
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
      userId: this.$route.query.userId || "",
      id: "4406",
      listData: ""
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      this.$api.doclist.findAllDic([this.id]).then(res => {
        // console.log(res);
        if (res.body) {
          this.listData = res.body;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/question";
.base-panel {
  .base-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 2px solid #eee;
    span {
      font-size: 28px;
    }
  }
  .base-panel-body {
    padding: 10px 0;
  }
}
.base-line {
  text-align: left;
  display: flex;
  border-bottom: 1px dotted #eee;
  line-height: 28px;
  font-size: 14px;
  .base-line-title {
    color: #909399;
    // width: 80px;
    flex-basis: 80px;
  }
  .base-line-info {
    color: #303133;
  }
}
</style>
