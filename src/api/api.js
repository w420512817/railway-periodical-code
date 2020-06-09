import axios from 'axios'
import md5 from 'md5'
import store from '../vuex/store'
import api from './interface'
/**
 * 环境配置
 * 开发 ------ develop
 * 测试 ------ test
 * 正式 ------ production
 * 连接app的服务 ----- app
*/

export const APP_ENVIRONMENT = process.env.NODE_ENV == 'development' ? 'test' : 'production'
const CONFIG = {
  develop: {
    base: '/develop/',
    CHILD_URL: '',
    SECOND_DOMAIN: '/wechat'
  },
  test: {
    base: '/test/',
    CHILD_URL: '',
    SECOND_DOMAIN: '/wechat'
},
  production: {
    base: getPathName(),
    CHILD_URL: getPathName(),
    SECOND_DOMAIN: '/cas-wechat'
  }
}

function getPathName(){
  let arr = location.pathname.split('/')
  const len = arr.length
  if (len >= 3) {
    return `/${arr[1]}/api/`
  } else {
    return `/api/`
  }
}

export const RESTFUL_API = api

export var base = CONFIG[APP_ENVIRONMENT].base
export const CHILD_URL = CONFIG[APP_ENVIRONMENT].CHILD_URL
export const SECOND_DOMAIN = CONFIG[APP_ENVIRONMENT].SECOND_DOMAIN

// 医生头像地址
export const DOCTOR_IMG_URL = 'http://weixin.zbzxyy.com/base-service31/doctorphoto/'


// 真趣导航对接
export const NAV_URL = 'https://nav.mobile.joysuch.com/navigation_HCPort/index.html?buildId=200744&'

/**
 * 生成签名
 * @author caols@bsoft.com.cn
 * @date 2019-08-19
 * @param {any} params
 * @param {any} minns
 * @returns {any}
 */
function getSignature(params, minns) {
  let c = Object.assign({
    device: sessionStorage.getItem('device') || '',
    sn: sessionStorage.getItem('sn'),
    timestamp: minns,
    token: sessionStorage.getItem('token'),
    utype: '1'
  }, params)
  let keyArr = []
  for (let i in c) {
    keyArr.push(i)
  }
  keyArr.sort()
  let valueStr = ''
  for (let j = 0; j < keyArr.length; j++) {
    for (let i in c) {
      if (i === keyArr[j]) {
        if (c[i] || c[i] === 0 || c[i] === '0') {
          if (typeof (c[i]) === 'object') {
            valueStr += JSON.stringify(c[i])
          } else {
            valueStr += c[i]
          }
        }
      }
    }
  }
  // console.log('签名：', valueStr)
  return md5(valueStr)
}

function _transformRequest(params) {
  let s = ''
  for (let i in params) {
    s += i + '=' + params[i] + '&'
  }
  return s
}

// 通用ajax请求方法
export const commonAjax = (url, params = {}, needAuth = false) => {
  let minns = new Date().getTime()
  var instance = axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'token': sessionStorage.getItem('token'),
      'sign': getSignature(params),
      'sn': encodeURIComponent(sessionStorage.getItem('sn')),
      'timestamp': minns,
      'device': sessionStorage.getItem('device'),
      'utype': '1'
    }
  })
  if (needAuth) {
    return instance.post(`${base}auth/${url}`, _transformRequest(params))
  } else {
    return instance.post(`${base}${url}`, _transformRequest(params))
  }
}
// 通用ajax请求方法'Content-Type': 'application/json'
export const commonAjaxJson = (url, params = {}, needAuth = false, showLoading = true) => {
  let minns = new Date().getTime()
  var instance = axios.create({
    headers: {
      'token': sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
      'sign': getSignature(params, minns),
      'sn': encodeURIComponent(sessionStorage.getItem('sn')),
      'timestamp': minns,
      'device': sessionStorage.getItem('device'),
      'utype': '1',
    }
  })

  // 请求成功拦截
  function responseSuccess(response) {
    if (!response) {
      var err = new Error();
      err.response = response;
      err.message = '没有返回';
      return Promise.reject(err)
    }
    // 单独处理登录超时
    if (response.data && (response.data.code == -99 || response.data.code == -500)) {
      store.commit('UPDATE_TOAST', { 
        message: '登录超时，请重新登录'
      })
    }

    if (response.data && (response.data.code == -98)) {
      store.commit('UPDATE_TOAST', { 
        message: '用户密码过期'
      })
    }

    return Promise.resolve(response);
  }

  // 请求失败拦截
  function responseFailed(err) {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          err.message = '未授权，请登录'
          break

        case 403:
          err.message = '拒绝访问'
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    }

    return Promise.reject(err)
  }

  // 启动拦截器
  instance.interceptors.response.use(responseSuccess, responseFailed)

  const postUrl = needAuth ? `${base}auth/${url}` : (base + url)

  showLoading && store.commit('SHOW_LOADING')

  return instance.post(postUrl, params).then(v => {
    showLoading && store.commit('HIDE_LOADING')
    return Promise.resolve(v)
  }).catch(e => {
    showLoading && store.commit('HIDE_LOADING')
    store.commit('UPDATE_TOAST', { message: e.message || '服务错误' })
  })


}




export const doImgUpload = function (params = {}, needAuth = false, cfg) {
  var config = {
    'showError': true,
    'hideLoading': false,
    requestStatus: true
  };
  if (cfg) {
    config = Object.assign(config, cfg);
  }
  var instance = axios.create({
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 20000
  });
  if (!config.hideLoading) {
    store.commit('SHOW_LOADING')
  }
  instance.interceptors.response.use(function (response) {
    if (!response) {
      var err = new Error();
      err.response = response;
      return Promise.reject(err)
    }
    if (!response.data) {
      var err = new Error();
      err.response = response;
      return Promise.reject(err)
    }
    if (!response.data.code) {
      var err = new Error();
      err.response = response;
      return Promise.reject(err)
    }
    return Promise.resolve(response);
  });
  var Url = 'upload';
  var rurl = `${base}${Url}`;
  if (needAuth) {
    rurl = `${base}auth/${Url}`
  }
  return instance.post(rurl, params).then(res => {
    if (!config.hideLoading) {
      store.commit('HIDE_LOADING')
    }
    res = res.data;
    if (res && (res.code == 200 || res.code == 1)) {
      return Promise.resolve(res);
    } else if (config.showError && res && res.msg) {
      store.commit('UPDATE_TOAST', { message: res.msg })
      return Promise.resolve(null);
    } else {
      return Promise.resolve(null);
    }
  }).catch((err) => {
    store.commit('HIDE_LOADING')
    var errInfo = null;
    if (err && err.response) {
      errInfo = "服务器内部错误";
    } else {
      errInfo = "网络错误!请检查网络!";
    }
    if (errInfo && config.showError) {
      store.commit('UPDATE_TOAST', { message: errInfo })
    }
    return Promise.resolve(null);
  })
}

// APP跳转统一地址管理
/**
 * APP跳转统一地址 
 * 拦截例子，跳转云支付：app://bsoft?com_bsoft_app_business_type=9
 * com_bsoft_app_business_type类型
 * 1 跳转app问诊列表
 * 2 跳转app医生主页
 * 3 跳转app地图
 * 4 跳转app复诊配药支付
 * 5 跳转app问诊IM窗口
 * 6 跳转app复诊配药主页
 * 7 跳转app复诊配药支付成功
 * 8 跳转app药品订单支付
 * 9 跳转app云支付
 */
export const APP_REDIRECT_URL = {
  // 1支付成功->app问诊列表
  onlineList: 'app://toQueryOnlineList',
  // 2医生列表->app医生主页（挂号业务）
  doctorHome: 'app://doctor',
  // 3医院介绍->app地图
  map: 'app://map',
  // 4复诊配药支付
  medicalAgainPay: 'app://medicalAgainPay',
  // 5问诊im
  medicalAgainIMFromMainPage: 'app://medicalAgainIMFromMainPage',
  // 6medicalAgainIMFromPayOk
  medicalAgainIMFromPayOk: 'app://medicalAgainIMFromPayOk',
  // 7medicalAgainIM
  medicalAgainIM: 'app://medicalAgainIM',
  // 8drugPay
  drugPay: 'app://drugPay',
  // 9cloudPay
  cloudPay: 'app://bsoft?com_bsoft_app_business_type=9',
}