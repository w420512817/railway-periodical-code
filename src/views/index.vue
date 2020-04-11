<template>
  <div>
    <el-container>
      <el-header>铁道车辆</el-header>
      <el-main>
        Main
        {{data}}
      </el-main>
    </el-container>
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
      data: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$api.doclist.findAllDic([this.id]).then(res => {
        console.log(res);
        if (res.body) {
          this.data = res.body;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/question";
</style>
