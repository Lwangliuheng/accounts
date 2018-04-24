import Vue from 'vue'
import Router from 'vue-router'
import resetPassword from  '@/page/resetPassword'
import feedBack from  '@/page/feedBack'
import personalSet from  '@/page/personalSet'
import login from '@/page/login'
import onlineLearn from '@/page/onlineLearn'
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
    // },feedback
    //个人设置
    {
      path: '/set',
      component: personalSet
    },
    //意见反馈
    {
      path: '/feedback',
      component: feedBack
    },
    //密码修改
    {
      path: '/reset',
      component: resetPassword
    },
    //首页
    {
      path: '/login',
      component: login
    },
    // {
    //   path: '/:num',
    //   component: login
    // },
    // 在线学习
     {
      path: '/learn',
      // path: '/personalCenter',
      component: onlineLearn
    },
    // 首页
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

