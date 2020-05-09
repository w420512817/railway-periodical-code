import axios from "axios";
// import qs from 'qs'
import { Message, Loading } from "element-ui";
import router from "../router/index";
import serverConfig from "./serverConfig";

export const commonAjax = (ServiceId, ServiceMethod, params) => {
  var instance = axios.create({
    baseURL: serverConfig.api,
    timeout: 10000,
    responseType: "json",
    withCredentials: true,
    headers: {
      "X-Access-Token": "jienfadifaifafdifndfdfefe",
      "Content-Type": "application/json;charse=UTF-8",
      "X-Service-Id": ServiceId,
      "X-Service-Method": ServiceMethod
    }
  });

  let loadingInstance = null;
  // 请求拦截（配置发送请求的信息） 传参序列化
  instance.interceptors.request.use(
    config => {
      if (loadingInstance === null) {
        loadingInstance = Loading.service({
          target: "#main",
          fullscreen: false
        });
      }
      // if (
      //   config.method === 'post' ||
      //   config.method === 'put' ||
      //   config.method === 'delete'
      // ) {
      //   // 序列化
      //   config.data = qs.stringify(config.data)
      // }
      return config;
    },
    error => {
      Message({
        showClose: true,
        message: error,
        type: "error.data.error.message"
      });
      return Promise.reject(error);
    }
  );

  // 响应拦截（配置请求回来的信息）
  instance.interceptors.response.use(
    function(response) {
      // 处理响应数据
      if (loadingInstance !== null) {
        loadingInstance.close();
        loadingInstance = null;
      }
      // if (response.data && !response.data.success) {
      //   let msg = null
      //   switch (response.data.code) {
      //     case 999:
      //       router.push('/login')
      //       msg = '未登录,请先登录'
      //       break
      //     default:
      //       msg = response.data.msg || '系统错误'
      //       console.error('Axios response error.Url: ' + response.request.responseURL + ', code: ' + response.data.code + ', msg: ' + response.data.msg)
      //   }
      //   Message({
      //     showClose: true,
      //     message: msg,
      //     type: 'error'
      //   })
      // }
      return response;
    },
    function(error) {
      // 处理响应失败
      if (loadingInstance !== null) {
        loadingInstance.close();
        loadingInstance = null;
      }
      let msg = "网络错误";
      if (!error.response) {
        msg = error.message;
      } else {
        router.push("/error/" + error.response.status + "/" + msg);
      }
      Message({
        showClose: true,
        message: msg,
        type: "error"
      });

      return Promise.reject(error);
    }
  );

  //   return new Promise((resolve, reject) => {
  //     instance.post('/cbs-pfd/*.jsonRequest', JSON.stringify(params)).then(response => {
  //       resolve(response.data)
  //     }, err => {
  //       reject(err)
  //     })
  //   })

  return instance
    .post("/cbs-pfd/*.jsonRequest", JSON.stringify(params))
    .then(res => {
      if (res && res.data && res.data.code == 200) {
        return res.data;
      } else if (res.data.msg) {
        Message({
          showClose: true,
          message: res.data.msg,
          type: "error.data.error.message"
        });
        return res.data;
      } else {
        Message({
          showClose: true,
          message: "服务器内部错误",
          type: "error"
        });
        return res.data;
      }
    })
    .catch(err => {
      if (err.msg) {
        Message({
          showClose: true,
          message: err.msg,
          type: "error"
        });
      } else if (err.response) {
        Message({
          showClose: true,
          message: "服务器内部错误",
          type: "error"
        });
      } else {
        Message({
          showClose: true,
          message: "网络错误!请检查网络!",
          type: "error"
        });
      }
      return Promise.resolve(null);
    });
};
