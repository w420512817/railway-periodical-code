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
              <div class="base-line-info">ISSN 1001-4632 CN 11-2480/U</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="base-panel">
          <div class="base-panel-header">
            <span>当期期刊</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="flex-box">
              <el-image
                class="flex-img"
                src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                fit="cover"
              ></el-image>
              <div class="flex-tip">
                <div class="base-line">
                  <div class="base-line-title">期刊时间</div>
                  <div class="base-line-info">2020-04</div>
                </div>
                <div class="base-line">
                  <div class="base-line-title">封面下载</div>
                  <div class="base-line-info">下载</div>
                </div>
                <div class="base-line">
                  <div class="base-line-title">目录下载</div>
                  <div class="base-line-info">下载</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="login-block" :class="[loginChange?'':'none']">
          <div class="login-title">
            <i class="el-icon-arrow-left" @click="loginChange=!loginChange"></i>
            用户登录
          </div>
          <!-- <div class="login-input"></div> -->
          <el-input class="login-input" v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
          <el-input class="login-input" v-model="loginForm.password" placeholder="请输入密码" clearable></el-input>
          <div class="login-tip">
            没有账号？
            <el-link type="primary">立即注册</el-link>
          </div>
          <el-button class="login-submit" type="primary" @click="$router.push('/system')">下一步</el-button>
          <el-radio v-model="loginForm.read" label="1">
            我已阅读并同意
            <el-link type="primary">《投稿须知》</el-link>与
            <el-link type="primary">《版权转让协议》</el-link>
          </el-radio>
        </div>
        <div class="base-panel" :class="{ none: loginChange }">
          <div class="base-panel-header">
            <span>在线办公</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <el-row v-for="(item, index) in linkData" :key="index">
              <el-col :span="8" v-for="( item2, index2 ) in item.data" :key="index2">
                <div class="link-block">
                  <i :class="item2.icon"></i>
                  <span>{{ item2.label }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="base-panel">
          <div class="base-panel-header">
            <span>期刊介绍</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="qk-info">
              <p>《铁道车辆》月刊（英文名称：Rolling Stock）创刊于1963年7月1日，每月10日出版，国内外公开发行。曾为铁道部主管期刊，现为中国中车集团主管、中车青岛四方车辆研究所有限公司主办的铁道车辆专业的综合性技术期刊。</p>
              <p>《铁道车辆》为中国科技论文统计源期刊、中国科学引文数据库来源期刊、中国学术期刊综合评价数据库来源期刊、中国期刊网万方数据入网期刊、中国学术期刊（光盘版）入编期刊。</p>
              <p>《铁道车辆》主要刊载与铁道车辆相关的试验研究、设计制造、运用检修、综述·述评、问题讨论、车辆产品与零部件、学术活动等方面的论文。其中，三大支柱栏目为“试验研究”“设计制造”“运用检修”。</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-tabs v-model="activeName">
          <el-tab-pane label="优秀文章" name="0">
            <div class="tab-content">
              <el-scrollbar>
                <div class="news-list1" v-for="(item, index) in newsData" :key="index">
                  <div class="news-title ellip-2">{{ item.title }}</div>
                  <div class="news-info">
                    <div class="news-btn1">
                      [摘要]（
                      <span>{{ item.zyNum }}</span>
                      ）
                    </div>
                    <div class="news-btn2">{{ item.pdf }}</div>
                  </div>
                </div>
              </el-scrollbar>
            </div>
          </el-tab-pane>
          <el-tab-pane label="当期目录" name="1">当期目录</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="8">
        <div class="base-panel">
          <div class="base-panel-header">
            <span>动态信息</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="news-list2" v-for="(item, index) in newsData2" :key="index">
              <div class="news-title ellip-1">
                <i class="el-icon-arrow-right"></i>
                {{ item.title }}
              </div>
              <div class="news-time">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="base-panel">
          <div class="base-panel-header" style="border:none">
            <span>在线期刊</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="online-tab">
              <el-tabs v-model="activeName2">
                <el-tab-pane label="铁道车辆" name="0">
                  <div class="tab-content">
                    <el-scrollbar>
                      <div class="news-list1" v-for="(item, index) in newsData" :key="index">
                        <div class="news-title ellip-2">{{ item.title }}</div>
                        <div class="news-info">
                          <div class="news-btn1">
                            [摘要]（
                            <span>{{ item.zyNum }}</span>
                            ）
                          </div>
                          <div class="news-btn2">{{ item.pdf }}</div>
                        </div>
                      </div>
                    </el-scrollbar>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="10">
          <el-col :span="6" v-for="(item, index) in imgData" :key="index">
            <div class="img-link">{{ item.text }}</div>
          </el-col>
        </el-row>
        <div class="base-panel">
          <div class="base-panel-header">
            <span>国外铁路动态</span>
            <!-- <el-button type="text">更多</el-button> -->
          </div>
          <div class="base-panel-body">
            <div class="news-list2" v-for="(item, index) in newsData2" :key="index">
              <div class="news-title ellip-1">
                <i class="el-icon-arrow-right"></i>
                {{ item.title }}
              </div>
              <div class="news-time">{{ item.time }}</div>
            </div>
          </div>
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
      userId: this.$route.query.userId || "",
      id: "4406",
      activeName: "0",
      activeName2: "0",
      loginChange: true,
      loginForm: {
        username: "",
        password: "",
        read: ""
      },
      linkData: [
        {
          data: [
            { icon: "el-icon-tickets", label: "作者投稿" },
            { icon: "el-icon-search", label: "作者查稿" },
            { icon: "el-icon-document", label: "专家审稿" }
          ]
        },
        {
          data: [
            { icon: "el-icon-collection", label: "编委办公" },
            { icon: "el-icon-reading", label: "编辑办公" },
            { icon: "el-icon-edit-outline", label: "主编办公" }
          ]
        }
      ],
      newsData: [
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        },
        {
          title:
            "《共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推动发展》————徐三友、张磊",
          zyNum: "392",
          pdf: "[PDF 4354531K]"
        }
      ],
      newsData2: [
        {
          title:
            "共克时艰！大连电牵与永济电机公司发挥协同优势，保项目稳步推进，希望长期合作。",
          time: "2020-03-26"
        },
        { title: "“复兴”家族再添“大同造”新成员", time: "2020-03-26" },
        {
          title: "中车戚墅堰公司出口阿根廷机车维保服务完美收官",
          time: "2020-03-26"
        },
        { title: "中车四方：复产后首批“复兴号”动车组", time: "2020-03-26" }
      ],
      imgData: [
        { url: "", text: "论文模板下载" },
        { url: "", text: "投稿须知下载" },
        { url: "", text: "参考文献著录格式下载" },
        { url: "", text: "咨询窗口" }
      ]
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
@import "../../assets/less/base";
.base-panel {
  .base-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 2px solid @border1;
    span {
      font-size: 32px;
      color: @title1;
    }
  }
  .base-panel-body {
    padding: 10px 0;
  }
}
.base-line {
  display: flex;
  border-bottom: 1px dotted @border1;
  line-height: 28px;
  font-size: 14px;
  .base-line-title {
    color: @gray1;
    // width: 80px;
    flex-basis: 80px;
  }
  .base-line-info {
    color: @text2;
  }
}
.flex-box {
  display: flex;
  .flex-img {
    width: 150px;
    height: 200px;
    margin-right: 20px;
  }
  .flex-tip {
    flex: auto;
  }
}
.link-block {
  text-align: center;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: @blue1;
    color: @white;
    border-radius: 2px;
    span {
      color: @white;
    }
  }
  i {
    font-size: 40px;
  }
  span {
    font-size: 18px;
    color: @text1;
  }
}
.qk-info {
  color: @text2;
  font-size: 14px;
  line-height: 32px;
  p {
    margin: 0;
  }
}
.tab-content {
  height: 300px;
  // overflow-y: auto;
}
.news-list1 {
  border-bottom: 1px dotted @border1;
  padding-bottom: 5px;
  margin-bottom: 5px;
  .news-title {
    color: @text2;
    font-size: 14px;
  }
  .news-info {
    display: flex;
    font-size: 14px;
    color: @text2;
    .news-btn1 {
      margin-right: 10px;
      &::before {
        display: inline-block;
        content: "...";
        width: 20px;
      }
      span {
        color: red;
      }
    }
    .news-btn2 {
      &::before {
        display: inline-block;
        content: "pfd";
        width: 20px;
      }
    }
  }
}
.news-list2 {
  border-bottom: 1px dotted @border1;
  padding-bottom: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .news-title {
    color: @text2;
    .el-icon-arrow-right {
      color: @blue1;
    }
  }
  .news-time {
    color: @gray1;
    flex: none;
  }
}
.online-tab {
  border: 1px solid @border1;
  border-radius: 8px;
  padding: 10px 30px;
}
.img-link {
  border-radius: 2px;
  color: @white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-block {
  // background-image: @linear3;
  background-color: #f8fcff;
  border: 1px solid @border1;
  border-radius: 8px;
  // height: 350px;
  padding: 20px;
  .login-title {
    font-size: 32px;
    color: @title1;
    margin-bottom: 10px;
  }
  .login-input {
    margin-bottom: 10px;
  }
  .login-tip {
    font-size: 14px;
    color: @gray1;
    margin-bottom: 10px;
  }
  .login-submit {
    width: 100%;
    margin-bottom: 10px;
  }
}

.el-scrollbar {
  height: 100%;
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
  height: 100%;
}
</style>
