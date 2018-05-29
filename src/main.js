// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import axios from "axios";
import store from "./vuex/index";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/reset.css";
import "viewerjs/dist/viewer.css";


//import {WXBaseAuthorize} from "@/js/wechat.js";
import WXData from "@/js/wechat.js";
//判断type进行页面的跳转
//import intercept from "@/js/intercept.js";
//引入rem布局
import "../accident/static/js/rem.js";
Vue.prototype.ajaxUrl = "/public-surveyor-api-boot";
Vue.prototype.$ajax = axios;

Vue.use(ElementUI);
// http请求拦截器
var loadinginstace = "";
axios.interceptors.request.use(
  config => {
    console.log("config.url", config);
    // 注册loading
    if (config.url == "/public-surveyor-api-boot/weixin/public/v1/register") {
      loadinginstace = ElementUI.Loading.service({ fullscreen: true });
    };
    //短信
    if (config.url == "/public-surveyor-api-boot/public/sms/v1/send") {
      loadinginstace = ElementUI.Loading.service({ fullscreen: true });
    };
     //判断是否存在已有订单
    if (config.url == "/boot-xcx-survey-api/order/v1/undone") {
      loadinginstace = ElementUI.Loading.service({ fullscreen: true });
    };
    //红包loading
    if (config.url == "/boot-xcx-survey-api/rider/income/v1/redpacket/receive") {
      loadinginstace = ElementUI.Loading.service({ fullscreen: true });
    }
    return config;
  },
  error => {
    ElementUI.Message.error({
      message: "加载超时"
    });
    return Promise.reject(error);
  }
);


//cs
localStorage.setItem('openid',"oYqIewD0n3rALGJOd7JBQnjEkwc4");
//localStorage.setItem('complete',"1");
 var currentPathOne =  window.location.href.split("#")[1];
 var currentPathTwo =  window.location.href.split("#")[1].split("?")[0];
 console.log(currentPathOne,1);
 console.log(currentPathTwo,2);
 // //我的任务
 // if(currentPathOne ==　"/caseDetail"){
 //       WXData.WXBaseAuthorizeCase();
 // };
 // alert(11111)
 if(localStorage.getItem('openid') == "undefined" || localStorage.getItem('openid') == null || !localStorage.getItem('openid')){
        console.log("没有openid",currentPathOne);
        //注册
       if(currentPathOne !=　"/redPacket"  && currentPathOne !=　"/code" && currentPathOne !=　"/caseCode" && currentPathOne !=　"/caseDetail"){
                  if( currentPathTwo != "/caseList"){
                        console.log("没有openid回调！");
                        WXData.WXBaseAuthorize();
                  };
       }; 
       //我的任务
       if(currentPathOne ==　"/caseDetail"){
          WXData.WXBaseAuthorizeCase();
        };   
 }else{
        console.log("有openid");
        if(currentPathOne !=　"/redPacket"  && currentPathOne !=　"/code" && currentPathOne !=　"/caseCode" && currentPathOne !=　"/caseDetail"){
                  if( currentPathTwo != "/caseList"){
                         router.push("/");
                  };
       };     
 }; 

// http响应拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading

    if (loadinginstace) {
      loadinginstace.close();
      loadinginstace = "";
    }
    if (data.data.rescode == 300) {
      router.push("/");
    }
    return data;
  },
  error => {
    console.log(error);
    // loadinginstace.close()
    ElementUI.Message.error({
      message: "加载失败"
    });
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  template: "<App/>",
  components: { App }
});
