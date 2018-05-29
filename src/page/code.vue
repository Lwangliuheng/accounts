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
        case:"",
        openId:""
        
      }
    },
    created(){

    },
    mounted() {
       //alert(1111)
       //console.log(localStorage.getItem('case'));
       // if(localStorage.getItem('case') == 1){
       //    console.log("case111")
       //    this.case = localStorage.getItem('case');
       // };
       // localStorage.setItem('case',"");
       this.getCode();
    },
    computed:{
    
    },
    watch: {
   
    },
    methods: {

      getCode(){
      
        var code = this.$route.query.code;
        //alert(code);
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
        this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/getOpenId",paramData)
            .then(response => {
                  var openid = response.data.openid;
                  //alert(openid)
                  console.log(response.data,"openid5466645654654656");
                  //localStorage.setItem('openid',"safafasfd98879879safd");
                  localStorage.setItem('openid',response.data.openid);
                  this.$store.commit('setopenidActive',openid);
                  //判断用户信息
                  console.log(this.$store.state.maiden,"第一次1111进入");
                   //判断第几步并获取基本信息
                   if(localStorage.getItem('openid')){
                        this.getInfo();
                   };
             if(!response.data.openid){
               console.log("没有获取到openid，请重新登录")
                this.$message({
                  message: '获取失败',
                   type: 'error'
                }); 

                // 进入空白页
                WeixinJSBridge.call('closeWindow');
             };
                
            }, err => {
              console.log(err);
            })
            .catch((error) => {
            
            })
      },
      interceptPage(type){
        console.log(type);
        console.log(type == 4);   
           if(type == 0){
              this.$router.push({path:'/login'});
           }
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
       },
       //拦截我的任务页面
       interceptVegetarian(){
         var currentPathOne =  window.location.href.split("#")[1];
         if(currentPathOne ==　"/caseDetail"){
           this.$router.push({path:'/caseDetail'});
         };
       },
       //获取基本信息
        getInfo(){
           var openid = localStorage.getItem('openid');
           if(openid == "undefined" || openid == null || !openid){
               return
           };
           console.log("register",openid)
           var paramData = {
                openid:openid
           }
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                    var that = this;
                   if(response.data.result.follow != 1){
                        setTimeout(()=>{
                             //解决进入空白问题
                             that.$confirm('请关注公众号！', '温馨提示', {
                                           confirmButtonText: '确定',
                                           showCancelButton:false,
                                           customClass:"tsk",
                                           type: 'warning',
                                           showClose:false,
                                           center: true
                                   }).then(() => {
                                         // 进入空白页
                                          //localStorage.setItem('openid',"");
                                          WeixinJSBridge.call('closeWindow');
                                   }).catch(() => {
                                         // 进入空白页
                                       WeixinJSBridge.call('closeWindow');
                                   });
                              //页面显示
                             // that.readyState = true;
                        },1000);
                      return
                   };
                    if(response.data.result.complete == 1){
                       //alert(localStorage.getItem('case'))
                         this.$confirm('此账号已存在，无需重复注册！', '温馨提示', {
                                  confirmButtonText: '确定',
                                  showCancelButton:false,
                                  customClass:"tsk",
                                  type: 'warning',
                                  showClose:false,
                                  center: true
                          }).then(() => {
                                // 进入空白页
                               WeixinJSBridge.call('closeWindow');
                          }).catch(() => {
                               
                                // 进入空白页
                              WeixinJSBridge.call('closeWindow');
                          });
                      
                       return
                    };
                   this.$store.commit('setfirstTimeActive');
                   this.$store.commit('setcompanyActive',response.data.result);
                   console.log(response.data.result.qcode);
                   this.invitationCode = response.data.result.qcode; 
                   console.log(response.data.result.step);
                   //拦截我的任务页面
                   //this.interceptVegetarian();
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

