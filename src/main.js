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


import {WXBaseAuthorize} from "@/js/wechat.js";
//判断type进行页面的跳转
import intercept from "@/js/intercept.js";
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
    

    // element ui Loading方法
    // if(config.url == '/boot-pub-survey-manage/monitor/v1/overview'){
    //   loadinginstace = "";
    // }else if(config.url == '/boot-pub-survey-manage/pub/survey/v1/page'){
    //   loadinginstace = "";
    // }else if(config.url == '/boot-pub-survey-manage/survey-detail/v1/photo/page'){
    //   loadinginstace = "";
    // }else if(config.url == '/boot-pub-survey-manage/pubsurvey/manage/department/v1/14/citys'){
    //   loadinginstace = "";
    // }
    // 注册loading
    if (config.url == "/public-surveyor-api-boot/weixin/public/v1/register") {
      loadinginstace = ElementUI.Loading.service({ fullscreen: true });
    };
    //短信
    if (config.url == "/public-surveyor-api-boot/public/sms/v1/send") {
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


  window.addEventListener("popstate", function(e) { 
      history.go(-1);
  }, false); 
   
    




Vue.config.productionTip = false;
console.log(window.location.href.split("#")[1].split("?")[0],99999);
var currentPathOne =  window.location.href.split("#")[1];
var currentPathTwo =  window.location.href.split("#")[1].split("?")[0];
console.log(currentPathOne);
console.log(currentPathTwo);
//刚进入路径跳转
if(localStorage.getItem('openid')){
   if(currentPathOne !=　"/redPacket"){
      if( currentPathTwo != "/caseList"){
          console.log("我有openid，也不是特殊页面！")
          intercept.getInfo();
      }
   };  
};

router.beforeEach((to, from, next) => {
  console.log(to.path);
  console.log(to.path != "/code");
  console.log(localStorage.getItem('openid') == "undefined");
  console.log(localStorage.getItem('openid') == null);
  if(localStorage.getItem('openid') == "undefined" || localStorage.getItem('openid') == null){
        if(to.path != "/code" && to.path != "/caseList" && to.path != "/redPacket"){
           WXBaseAuthorize();
        };
  };
  //路径跳转优化
  //在进入code页面之前不能进行页面跳转！
  // if(currentPathOne !=　"/code"){
  //   if(currentPathOne !=　"/redPacket"){
  //      if( currentPathTwo != "/caseList"){
  //          console.log("我有openid，也不是特殊页面！")
  //          intercept.getInfo();
  //      }
  //   };
  // };
   if(currentPathOne ==　"/redPacket"){
       next();
   };
   if(currentPathTwo == "/caseList"){
       next();
   }
  if(localStorage.getItem('openid') ){
    console.log(store.state.firstTime,"有id并且首次进入");
    if(store.state.firstTime){
      next();
    };
  }else{
    if(currentPathOne !=　"/redPacket" && currentPathTwo != "/caseList"){
        next();
    };
  }
  
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  template: "<App/>",
  components: { App }
});
