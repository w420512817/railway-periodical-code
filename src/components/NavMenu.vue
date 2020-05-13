<template>
  <div class="aside">
    <el-menu :default-active="activeIndex" :default-openeds="userSetting" router>
      <!-- v-show="item.disabled" -->
      <el-submenu :index="String(index)" v-for="(item, index) in menuList" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          {{ item.name }}
        </template>
        <el-menu-item :index="item2.path" v-for="(item2, index2) in item.child" :key="index2">
          <span slot="title">{{ item2.name }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      userSetting: [],
      menuList: [
        {
          name: "预约管理",
          id: 1,
          icon: "el-icon-document",
          path: "",
          child: [
            {
              name: "空白页",
              id: 2,
              path: "/system/blank"
            },
            {
              name: "新增页面",
              id: 3,
              path: "/system/dashboard"
            },
            {
              name: "叫号系统",
              id: 4,
              path: "/system/jiaohao"
            },
            {
              name: "设备管理",
              id: 5,
              path: "/system/equipment"
            }
          ]
        },
        {
          name: "患者管理",
          id: 6,
          disabled: false,
          path: "",
          icon: "el-icon-user",
          child: [
            {
              name: "患者列表",
              id: 7,
              disabled: false,
              path: "/system/consumer"
            },
            {
              name: "双向转诊",
              id: 13,
              disabled: false,
              path: "/system/referral"
            },
            {
              name: "盆底术后",
              id: 15,
              disabled: false,
              path: "/system/afterPeration"
            },
            {
              name: "医患互动",
              id: 14,
              disabled: false,
              path: "/system/question"
            },
            {
              name: "报告查询",
              id: 16,
              disabled: false,
              path: "/system/reportSearch"
            }
          ]
        },
        {
          name: "统计分析",
          id: 8,
          disabled: false,
          icon: "el-icon-pie-chart",
          path: "",
          child: [
            {
              name: "日常统计",
              id: 9,
              disabled: false,
              path: "/system/statistics"
            },
            {
              name: "数据导出",
              id: 10,
              disabled: false,
              path: "/system/export"
            },
            {
              name: "术后统计",
              id: 17,
              disabled: false,
              path: "/system/shStatistics"
            }
          ]
        },
        {
          name: "系统管理",
          id: 11,
          disabled: false,
          icon: "el-icon-setting",
          path: "",
          child: [
            {
              name: "权限管理",
              id: 12,
              disabled: false,
              path: "/system/authority"
            }
          ]
        }
      ]
    };
  },
  props: {
    msg: String
  },
  watch: {
    "$route.path": function(newVal) {
      this.activeIndex = newVal;
    }
  },
  methods: {},
  created() {}
};
</script>
<style scoped lang="less">
@import "../assets/less/color";
</style>
