<style scoped>
 
</style>
<template>
  <div>
   <!--  我是code:{{code}}
    我是openid:{{openid}} -->
  </div>
</template>
<script>
import axios from "axios";
// import jsonp from "jsonp";
  export default {
    components: {
      // personalInfo
    },
    name:"Code",
    data() {
      return {
        code:"",
        openId:""
        
      }
    },
    created(){

    },
    mounted() {
       this.getCode();
    },
    computed:{
    
    },
    watch: {
   
    },
    methods: {

      getCode(){
      
        var code = this.$route.query.code;
        var code = window.location.href.split("?")[1].split("&")[0].split("=")[1];
        console.log(code,"我是code")
        this.code = code;
        this.$store.commit('setcodeActive',code);
        // var code  = "001cggG21yrNoN1k7EG21WK0G21cggGD"
        var paramData = {
          code:code
        };
        console.log(localStorage.getItem('openid'),"getCode")
        console.log(localStorage.getItem('openid') == "undefined")
        if(localStorage.getItem('openid') != "undefined" && localStorage.getItem('openid') != null){
           console.log("本地已经保存openID")
           var openid = localStorage.getItem('openid');
           this.$store.commit('setopenidActive',openid);
            //判断用户信息
           console.log(this.$store.state.maiden,"1111进入");
            //判断第几步并获取基本信息
           this.getInfo();
           return
        };
        // if(localStorage.getItem('openid') != null){
        //    console.log("本地已经保存openID")
        //    var openid = localStorage.getItem('openid');
        //    this.$store.commit('setopenidActive',openid);
        //     //判断用户信息
        //    console.log(this.$store.state.maiden,"1111进入");
        //     //判断第几步并获取基本信息
        //    this.getInfo();
        //    return
        // };
        this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/getOpenId",paramData)
            .then(response => {
                  var openid = response.data.openid;
                  console.log(response.data,"openid5466645654654656");
                  //localStorage.setItem('openid',"safafasfd98879879safd");
                  localStorage.setItem('openid',response.data.openid);
                  this.$store.commit('setopenidActive',openid);
                  //判断用户信息
                  console.log(this.$store.state.maiden,"第一次1111进入");
                   //判断第几步并获取基本信息
                   this.getInfo();
                  // if (!this.$store.state.maiden) {
                  //   intercept.getInfo();
                  // }
             if(!response.data.openid){
               alert("没有获取到openid，请重新登录")
                this.$message({
                  message: '获取失败',
                   type: 'error'
                }); 

                //进入空白页
                var userAgent = navigator.userAgent;
                if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
                    window.location.href="about:blank";   
                }else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
                    window.opener=null;window.open('about:blank','_self','').close(); 
                }else {
                    window.pener = null;
                    window.open("about:blank", "_self");
                    window.close();
                }
             };
                
            }, err => {
              console.log(err);
            })
            .catch((error) => {
            
            })
      },
      interceptPage(type){
           if(type == 0){
              this.$router.push({path:'/'});
           }
           // if(type == 1){
           //    this.$router.push({path:'/'});
           // }
           if(type == 1){
                this.$router.push({path:'/personalInfo'});
           }
           if(type == 2){
                this.$router.push({path:'/workRange'});
           }
           if(type == 3){
                this.$router.push({path:'/operateActions'});
           }
           if(type == 4){
                this.$router.push({path:'/learn'});
           }
           if(type == 5){
                this.$router.push({path:'/learn'});
           }
           // if(type == 6){
           //      router.push({path:'/personalInfo'});
           // }
          
       },
       //获取基本信息
        getInfo(){
           var openid = localStorage.getItem('openid');
           console.log("register",openid)
           var paramData = {
                openid:openid
           }
          this.$ajax.post("/public-surveyor-api-boot/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                    
                   this.$store.commit('setcompanyActive',response.data.result);
                   console.log(response.data.result.qcode);
                   this.invitationCode = response.data.result.qcode; 
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
       },
      
    }

    
  };
</script>

