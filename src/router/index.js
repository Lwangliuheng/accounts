import Vue from 'vue'
import Router from 'vue-router'
// import surveyContant from  '@/page/surveyContant'
// import photoList from  '@/page/photoList'
// import signName from  '@/page/signName'
import login from '@/page/login'
import personalCenter from '@/page/personalCenter'
import myWallet from "@/page/myWallet";
import incomeDetail from "@/page/incomeDetail";
import inviteFriends from "@/page/inviteFriends";
import workRange from "@/page/workRange";
import operateActions from "@/page/operateActions";
import watchVideo from "@/page/watchVideo";



Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // {
    //   path:'/surveyContant',
    //   component: surveyContant,
    // },
    // {
    //   path:'/photoList/:licenseNo',
    //   component: photoList,
    // },
    // {
    //   path:'/signName',
    //   component: signName,
    // },
    // {
    //   path: '/',
    //   component: login
    // },
    // {
    //   path: '/:num',
    //   component: login
    // },
    {
      path: "/personalCenter",
      component: personalCenter
    },
    {
      path: "/myWallet",
      component: myWallet
    },
    {
      path: "/incomeDetail",
      component: incomeDetail
    },
    {
      path: "/inviteFriends",
      component: inviteFriends
    },
    {
      path: "/workRange",
      component: workRange
    },
    {
      path: "/operateActions",
      component: operateActions
    },
    {
      path: "/",
      // path: "/watchVideo",
      component: watchVideo
    }
  ]
});

