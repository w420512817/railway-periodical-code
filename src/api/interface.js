/**
 * 接口地址
 */
export default {
  // 普通发送验证码
  sendSmsCode: 'user/sendSmsCode',
  // 绑定新手机号发送验证码
  bindcaptcha: 'util/bindcaptcha',
  // 校验验证码
  verifyCode: 'util/phonecode/verify',
  // 查询用户是否存在
  findUser: 'user/findUser',
  // 绑定新用户
  bind: 'user/bind',
  // 完善个人信息
  modifyAccount: 'user/modifyAccount',
  // 解绑
  unbind: 'user/unbind',
  // 添加就诊人
  addMember: 'family/addForH5',
  // 修改就诊人
  updateMember: 'ainfo/contact/update',
  // 删除就诊人
  removeMember: 'ainfo/contact/del',
  // 就诊人列表
  listFamily: 'ainfo/contact/listFamily',
  // listFamily: 'user/listFamily',
  // 就诊人详情
  detail: 'user/detai',
  // 添加卡认证
  addCard: 'ainfo/card/add',
  // 删除认证
  removeCard: 'ainfo/card/del',
  //获取卡类型列表
  getCardList: 'hinfo/getCardList',
  // 获取我的信息
  getSelf: 'user/getSelf',
  // 手机号与身份证号是否匹配
  mathMobileAndIdCard: 'user/mathMobileAndIdCard',
  // 修改手机号
  updateMobile: 'user/updateMobile',
  // 医院介绍
  getHosptialInfo: 'news/getHosptialInfo',
  // 新闻公告
  Announcement: 'news/listAnnouncement',
  // 健康宣教
  list: 'news/list',
  // 患者信息是否匹配 needAuth
  patientIsMatch: 'register/patientIsMatch',
  // 获取科室列表 needAuth
  listDepartment: 'appointment/listDepartment',
  // 获取医生列表 needAuth
  listDoctor: 'appointment/listDoctor',
  // 搜索科室、医生 needAuth
  queryDeptAndDoctor: 'appointment/queryDeptAndDoctor',
  // 医生主页 needAuth
  getDoctorHomePage: 'appointment/getDoctorHomePage',
  // 获取号源 needAuth
  listNumber: 'appointment/listNumber',
  // 提交预约
  confirmAppointment: 'appointment/confirmAppointment',
  // 待就诊
  listAppointmentWait: 'appointment/listAppointmentWait',
  // 预约支付
  appointmentPay: 'appointment/appointmentPay',
  // 取消预约
  appointmentPayCancel: 'appointment/appointmentPayCancel',
  // 预约列表
  listAppointment: 'appointment/listAppointment',
  // 检查报告
  listCheckReport: 'checkreport/listCheckReport',
  // 报告查看
  listInspectionReport: 'inspectionreport/listInspectionReport',
  // 排队叫号
  listQueues: 'queues/listQueues',
  // 排队叫号全院
  listQueuesALL: 'queues/listWholeQueues',
  // 门诊费用
  listOutpatientExpenses: 'outpatient/listOutpatientExpenses',
  // 住院 一日清单
  listBill: 'onedaybill/listBill',
  // 历史住院记录
  listHospitalizationRecord: 'hospitalization/listHospitalizationRecord',
  // 费用明细
  listHospitalizationPayment: 'hospitalization/listHospitalizationPayment',
  // 住院预交金充值
  hospitalizationDeposit: 'hospitalization/hospitalizationDeposit',
  // 预缴记录
  listPaymentHistory: 'hospitalization/listPaymentHistory',
  // 科室介绍
  listLeafDepartment: 'home/listLeafDepartment',
  // 医生介绍
  listDoctorByDept: 'home/listDoctorByDept',
  // 搜索科室和医生
  queryDeptAndDoctor2: 'home/queryDeptAndDoctor',
  // 搜索科室
  queryDept: 'home/listLeafDepartment',
  // 门诊候诊信息查询
  mzQueue: 'queues/listQueues',
  // 门诊费用查询
  mzFee: 'outpatient/listOutpatientExpenses',
  // 查询检验报告
  jyReport: 'inspectionreport/listInspectionReport',
  // 查询检查报告
  jcReport: 'checkreport/listCheckReport',
  // 治疗查询
  queryTreatment: 'price/queryTreatment',
  // 药品查询
  queryDrugs: 'price/queryDrugs',
  // 账户查询
  queryAccount: 'hisaccount/queryAccount',
  // 交易记录
  queryRecord: 'trade/queryRecord',
  // 身份验证，用手机号获取验证码
  confirmIdByPhone: 'util/phonecode',
  // 满意度调查-获取门诊记录
  listMedicalRecords: 'satisfaction/listMedicalRecords',
  // 满意度调查-获取住院记录
  getHospitalizationRecords: 'satisfaction/getHospitalizationRecords',
  // 住院预缴金-查询预缴金余额
  getBalance: 'hospitalization/getBalance',
  // 微信支付接口
  wxPay: 'wxPay/prepay',
  // 诊间支付-待支付列表
  listPayment: 'diagnosisPayment/listPayment',
  // 诊间支付-已支付列表
  listPaymented: 'diagnosisPayment/listPaid',
  // 诊间支付-待支付详情
  paymentDetails: 'diagnosisPayment/paymentDetails',
  // 诊间支付-预结算
  // 诊间支付-查询药品清单
  listDrug: 'diagnosisPayment/listDrug',
  // 体检预约-获取体检套餐列表
  getSet: 'physical/getSet',
  // 问卷详情
  getByType: 'question/getByType',
  // 保存问卷
  createResult: 'question/createResult',
  // 获取医院预留手机号
  getHisPhone: 'register/getHisPhone',
  // 签到取号队列
  takenumber: 'takenumber/listNumber',
  // 签到取号查看挂号单
  takenumberForm: 'takenumber/getRegistrationForm',
  // 认证添加卡
  addCards: 'ainfo/card/adds',
  // 查询已绑定的卡列表
  cardList: 'user/cardList',
  /******************* 市三院问诊模块 ***********************/
  //首页推荐医生&科室
  recomDoctorAndDept: 'consult/base/index',
  //首页搜索
  querySearch: 'consult/base/selectDeptAndDoctor',
  //搜索结果跳转
  querySearchJmp: 'consult/base/getDetailOrList',
  queryConsultDetail: 'consult/base/getDetail',
  //收藏医生
  addDoctorCollect: 'doctorCollect/addDoctorCollect',
  //取消收藏
  cancelDoctorCollect: 'doctorCollect/cancelDoctorCollect',
  //保存问诊
  saveQuery: "consult/save",
  //更新问诊状态(支付成功或确认接诊)
  updateQueryStatus: "consult/updateConsultStatus",
  //问诊记录查询列表
  queryHisList: "consult/list",
  //问诊详情
  queryDetail: "consult/detail",
  // 就诊记录
  // 取消就诊预约
  cancelQueryOnline: 'consult/cancel',
  // getVisitRecord: 'outpatient/doc/listHistoryRecord',
  listHistoryRecord: 'outpatient/doc/listHistoryRecord',
  getVisitRecord: 'consult/app/getVisitRecord',
  getDrugPrescriptions: 'outpatient/doc/getDrugPrescriptions',
  checkDrug: 'consult/app/checkDrug',
  // 选择复诊医生
  getFillDoctors: 'consult/base/getDoctorsByConsultType',
  // 复诊配药科室
  getFillDept: 'consult/base/getFillDept',
  // 复诊配药提交
  // saveQuery: 'consult/save',
  // 复诊配药记录
  consultList: 'consult/app/consultList',
  // 复诊配药详情
  getConsultDetails: 'consult/app/consultDetails',
  // 取消复诊配药
  cancelDispenseOrder: 'consult/app/cancelDispenseOrder',

  // 处方费用支付前创建订单
  commitRecipePay: 'consult/app/commitRecipePay',
  // 处方费用预结算
  // 处方支付查询订单金额
  // buyDrugBudget: 'consult/app/paymentBudget',
  buyDrugBudget: '/diagnosisPayment/paymentBudget',
  getPendingPaymentCalc: 'consult/fill/wx/getPendingPaymentCalc',
  // 购买的药品（处方）列表
  // getBuyDrugs: 'consult/app/getBuyDrugs',
  queryOrderList: 'orderManage/queryOrderList',
  queryOrderDetail: 'orderManage/queryOrderDetail',

  // 获取服务器时间
  getCurrentTime: '/pub/getCurrentTime',
  //居民回复
  queryReply: "consult/reply",
  //问诊回复记录列表
  queryTalkList: "consult/reply/list",
  // 处方订单取消
  cancelFillOrder: 'orderManage/cancelOrder',
  // 处方订单删除
  deleteOrder: 'orderManage/deleteOrder',
  // 获取系统参数
  getSysParameterList: 'sysParameter/getSysParameterList',
  // 在线咨询零元支付
  zeroPaymentForConsultAsk: "pay/zeroPaymentForConsultAsk",
  // 问诊记录预结算
  budgetAndSettlement: "consult/app/budgetAndSettlement",
  /**
   * 收件地址管理
   */
  saveOrUpdate: 'shippingAddress/addOrUpdate',
  // 确认收货
  confirmDrugReceived: 'orderManage/confirmReceipt',
  delete: 'consult/app/receiverAddress/delete',
  getList: 'shippingAddress/list',
  // 问诊记录
  cancelConsult: "consult/cancel",
  // 评价
  queryTemplate: 'evaluation/getEvaluationTemplateForJson',
  submitJudgeForm: 'evaluation/addEvaluationDetailsForJson',
  queryJudgeLabelList: 'evaluation/queryPatientEvaluateLabelListForJson',
  queryPersonJudgeList: 'evaluation/queryPatientEvaluateDetailsListForJson',
  queryJudgeDetail: 'evaluation/queryPatientEvaluateDetailsForJson',
  getCity: 'shippingAddress/getRegionLevelList',
  // 上传图片
  upLoadImg: 'upload',
  // 购药物流
  getExpressCompany: 'drugDelivery/getExpressCompany',
  getExpressCost: 'diagnosisPayment/getExpressCost',
  getExpressDetail: 'consult/app/getRoute',
  // 用药提醒
  reminderList: 'medicationReminder/allList',
  addReminder: 'medicationReminder/add',
  removeReminder: 'medicationReminder/delete',
  reminderDetail: 'medicationReminder/detail',
  reminderUpdate: 'medicationReminder/update',
  exportReminder: 'medicationReminder/exportReminder',
  //用药频次字典
  getUseRate: 'medicationReminder/getUseRate',
  //用药途径字典
  getTakeWay: 'medicationReminder/getTakeWay',
  //获取配送方式
  getDeliveryModeCof: 'sysPayCof/getDeliveryModeCof',
  //获取支付方式
  getPayModeCof: 'sysPayCof/getPayModeCof',
  // 问诊-查询医生排班信息
  querySchedulingListByDoctorId: 'consult/querySchedulingListByDoctorId',
  informedConsent: 'sysCopywriting/getSysCopywriting',
  // 意见反馈
  popBaseFeedback: 'popBaseFeedback/list',
  popBaseFeedbackAdd: 'popBaseFeedback/add',
  appDownload: 'down?code=ios_doc',
  // 楼层指引、就诊指南
  queryConstructNavigationList: 'navigation/queryConstructNavigationList',
  getConsultGuide: 'navigation/queryConsultGuideList',
  //获取支付方式
  getPayConfig: 'pay/getPayConfig',
  getWXPayConfig: 'pay/getWXPayConfig',
  //文案配置
  getSysCopywriting: 'sysCopywriting/getSysCopywriting',
  // 患者查询满意度调查列表
  geSatistList: 'satisfaction/getList',
  getDetailForPatient: 'satisfaction/getDetailForPatient',
  getQuestionnaireDetail: 'editorQuestionnaireTitle/getQuestionnaireDetail',
  editorAnswerSave: 'editorAnswer/save',
  saveQuestionnaireResult: 'followUp/saveQuestionnaireResult',
  // 问题列表
  getQuestionList: 'copyApply/getQuestionList',
  // 获取所有医院
  getHospitals: 'hos/getHospitals',
  // 检查是否已经预约了视频问诊
  checkSubmitConsult: 'consult/checkSubmitConsult',
  // 查询药房列表
  findRecipeSuppliers: 'diagnosisPayment/findRecipeSuppliers',
  saveOrder: 'diagnosisPayment/saveOrder',
  // 复诊配药-获取待煎费用
  getMachiningChineseHerbalMedicineCost: 'diagnosisPayment/getMachiningChineseHerbalMedicineCost',
  getExpressCostByConfig: 'sysBillingRule/getExpressCost',
  getExpressPayMode: 'diagnosisPayment/getExpressPayMode',
  //处方笺
  getRecipeDetail2: 'diagnosisPayment/getRecipeDetail',
  // 查询历史诊断
  getDiagnoseInformation:'outpatient/doc/getDiagnoseInformation',
  queryNavigationSetting: 'navigation/queryNavigationSetting',
  //复诊配药,云诊室是否有就诊记录校验
  isThereAnyVisitingRecord: 'consult/isThereAnyVisitingRecord',
  //候诊室
  cloudWaiting: 'appointment/cloudWaiting',
  // 诊断代码字典  搜索复诊
  queryDiagnosticList: 'appCloudClinic/queryDiagnosticList'
}
