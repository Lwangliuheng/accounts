import axios from 'axios'
import router from '../router'
import store from '../vuex/index'
export default {
       interceptPage(type){
           if(type == 1){
              router.push({path:'/'});
           }
           if(type == 2){
                router.push({path:'/personalInfo'});
           }
           if(type == 3){
                router.push({path:'/workRange'});
           }
           if(type == 4){
                router.push({path:'/operateActions'});
           }
           if(type == 5){
                router.push({path:'/learn'});
           }
           // if(type == 6){
           //      router.push({path:'/personalInfo'});
           // }
          
       },
       getInfo(){
           var openid = localStorage.getItem('openid');
           console.log("register",openid)
           var paramData = {
                openid:openid,
                step:"1"
           }
          axios.post("/public-surveyor-api-boot/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){

                   store.commit('setcompanyActive',response.data.result);
                   this.interceptPage(response.data.result.step);

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