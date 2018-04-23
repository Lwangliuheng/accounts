import Vue from 'vue'
import Router from 'vue-router'
// import surveyContant from  '@/page/surveyContant'
// import photoList from  '@/page/photoList'
// import signName from  '@/page/signName'
import login from '@/page/login'
import personalCenter from '@/page/personalCenter'



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
    // {
    //   path: '/',
    //   component: login
    // },
    // {
    //   path: '/:num',
    //   component: login
    // },
    {
      path: '/',
      // path: '/personalCenter',
      component: personalCenter
    }
  ]
})

