<template>
  <div class="editorial">
    <div class="pd20">
      <div class="base-panel">
        <div class="base-panel-header">
          <span></span>
          <!-- <el-button class="more-btn" type="text">更多</el-button> -->
        </div>
        <div class="base-panel-body">
          <div>
            地址：山东省青岛市市北区瑞昌路231号 《铁道车辆》编辑部
            邮编：266031
            传真：0532-86083400
            邮箱：tdclbjb@vip.sina.com
            电话：市电0532-86083210
            0532-86083211
            路电0406-83210
            0406-83211
          </div>
        </div>
      </div>
      <el-row>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="主管编辑" width="180"></el-table-column>
          <el-table-column prop="type" label="负责方向" width="180"></el-table-column>
          <el-table-column prop="phone" label="联系电话"></el-table-column>
        </el-table>
      </el-row>
    </div>
  </div>
</template>
<script>
// import quesRadioBase from "../../components/QuesRadioBase";
export default {
  components: {},
  data() {
    return {
      // userId: this.$route.query.userId || "",
      tableData: [
        {
          name: "2田编辑",
          type: "客车",
          phone: "0532-86083210"
        },
        {
          name: "郭编辑",
          type: "货车",
          phone: "0532-86083210"
        },
        {
          name: "任编辑",
          type: "制动",
          phone: "0532-86083210"
        },
        {
          name: "孙编辑",
          type: "空调车电",
          phone: "0532-86083210"
        }
      ]
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/less/base.less";
@import "../../assets/less/main.less";
</style>
