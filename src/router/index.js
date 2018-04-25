import Vue from 'vue'
import Router from 'vue-router'

import resetPassword from  '@/page/resetPassword'
import feedBack from  '@/page/feedBack'
import personalSet from  '@/page/personalSet'
import login from '@/page/login'
import personalCenter from '@/page/personalCenter'
import myWallet from "@/page/myWallet";
import incomeDetail from "@/page/incomeDetail";
import inviteFriends from "@/page/inviteFriends";
import workRange from "@/page/workRange";
import operateActions from "@/page/operateActions";
import watchVideo from "@/page/watchVideo";
import personalInfo from "@/page/personalInfo";


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
    //   path: '/:num',
    //   component: login
    // },
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
    // 首页
    {
      path: "/",
      component: personalCenter
    },
    //登录页
    {
      path: '/login',
      component: login
    },
    //账单页
    {
      path: "/myWallet",
      component: myWallet
    },
    //账单详情页
    {
      path: "/incomeDetail",
      component: incomeDetail
    },
    //邀请好友页
    {
      path: "/inviteFriends",
      component: inviteFriends
    },
    //设置查勘信息页
    {
      path: "/workRange",
      component: workRange
    },
    //注册成功页
    {
      path: "/operateActions",
      component: operateActions
    },
    //注册个人信息填写
    {
      path: "/personalInfo",
      component: personalInfo
    },
    //在线学习页
    {
      path: "/learn",
      // path: "/watchVideo",
      component: watchVideo
    }
  ]
});

