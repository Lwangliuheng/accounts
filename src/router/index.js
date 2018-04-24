import Vue from 'vue'
import Router from 'vue-router'
// import surveyContant from  '@/page/surveyContant'
import resetPassword from  '@/page/resetPassword'
import feedBack from  '@/page/feedBack'
import personalSet from  '@/page/personalSet'
import login from '@/page/login'

Vue.use(Router);

export default new Router({
  mode:"history",
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
      path: '/',
      component: login
    }
    // {
    //   path: '/:num',
    //   component: login
    // }
  ]
})

