/**
 * api接口统一管理
 */
import { commonAjax } from "./http";

export default {
  // 专家列表
  doclist: {
    //医生列表
    findAllDic: p => commonAjax("cbs_pfd.PFDNewsService", "findAllDic", p),
    // 资讯详情
    getInfor: p => commonAjax("cbs_pfd.PFDNewsService", "getInfor", p)
  }
};
