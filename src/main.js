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
//cs
//localStorage.setItem('openid',"oYqIewHziI_Er9A6fWkLNoFd06mQ");
//localStorage.setItem('complete',"1");
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  template: "<App/>",
  components: { App }
});
