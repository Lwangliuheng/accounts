import axios from 'axios'
import router from '../router'
import store from '../vuex/index'
import ElementUI from "element-ui";
export default {
      interceptPage(type,routerCallback){
        console.log(type);
        console.log(type == 4);
           if(type == 0){
              router.push({path:'/'});
           }
           if(type == 1){
                router.push({path:'/personalInfo'});
           }
           if(type == 2){
                router.push({path:'/workRange'});
           }
           if(type == 3){
                router.push({path:'/operateActions'});
           }
           if(type == 4){
                router.push({path:'/learn'});
           }
           if(type == 5){
                localStorage.setItem('complete',1);
                router.push({path:'/'});
           }
            routerCallback();
           // if(type == 6){
           //      router.push({path:'/personalInfo'});
           // }
          
       },
       getInfo(routerCallback){
           var complete = localStorage.getItem('complete');
           var openid = localStorage.getItem('openid');
           console.log(complete,"是否完成")
           //解决异步坑
           if(complete == 1){
             this.interceptPage(5,routerCallback);
             return
           };
           //var openid = "oYqIewHK593VkLLuDtT1Axx2yaAM"
           console.log("register",openid)
           var paramData = {
                openid:openid
           };
           //异步是坑
          axios.post("/public-surveyor-api-boot/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                   store.commit('setfirstTimeActive');
                   this.interceptPage(response.data.result.step,routerCallback);

                }
                console.log(response,33333)
            }, err => {

              console.log(err);

            })
            .catch((error) => {
              // this.$message({
              //     message: '短信验证码发送失败',
              //     type: 'error'
              //   });
            });
       }
}