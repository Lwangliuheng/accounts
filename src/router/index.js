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
    // 我的钱包
    {
      path: "/",
      component: myWallet
    },
    // 收入详情
    {
      path: "/incomeDetail",
      component: incomeDetail
    },
    // 邀请好友
    {
      path: "/inviteFriends",
      component: inviteFriends
    },
    // 工作范围
    {
      path: "/workRange",
      component: workRange
    },
    // 运营活动
    {
      path: "/operateActions",
      component: operateActions
    },
    // 观看视频
    {
      // path: "/",
      path: "/watchVideo",
      component: watchVideo
    }
  ]
});

