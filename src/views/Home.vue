<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
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
    this.init();
  },
  methods: {
    init() {
      //   this.$api.question
      //     .readQuestionniare([this.questionId, this.type])
      //     .then(res => {
      //       console.log(res);
      //       if (res.body) {
      //       }
      //     });
    }
  }
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/question";
</style>
