/**   
 * api接口统一管理
 */
import { commonAjax } from './http';

export default {
    // 专家列表
    doclist: {
        //医院列表
        getHospitalList: p => commonAjax("cbs_pfd.PFDUserManagement", "getHospitalList", p),
    },


}