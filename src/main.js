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
    }
    if (config.url == "/boot-pub-survey-manage/pub/survey/v1/page") {
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

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  //判断用户信息
  // if (!store.state.maiden) {
  //   intercept.getInfo();
  // }
  //判断openid
  next();
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  template: "<App/>",
  components: { App }
});
