import Vue from 'vue'
import Router from 'vue-router'
// import surveyContant from  '@/page/surveyContant'
import resetPassword from  '@/page/resetPassword'
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
    // },
    {
      path: '/reset',
      component: resetPassword
    },
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

