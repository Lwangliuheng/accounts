<style scoped>
   .register_wrap{
    width:100%;
    height:100vh;
    background-color:#fff; 
    
   }
   .register_content{
     width:100%;
    height:100vh;
    padding-top:0.9rem;
    margin:0 auto;
    width:6.35rem;
   }
   .register_top{
    text-align: center;
    padding-bottom:0.64rem;
   }
   .top_wrod{
    margin-top:0.2rem;
    color:#000;
    font-size: 18px;
   }
   .input_box{
    position: relative;
   }
   /*.input_box input{
    font-size: 16px;
   }*/
   .auth_code{
     font-size: 14px;
     line-height:1.16rem;
     position:absolute;
     right:0px;
     color:#e6e6e6;
     top:-0.2rem;
   }
   .yqm{
    color:#e6e6e6;
   }
  .input_box input{
    color:#6d6d6d;
    height:.76rem;
    line-height: .76rem;
    width:100%;
    border-bottom:1px solid #b6b6b6;
    box-sizing: border-box;
    margin: .2rem 0;
    font-size: 16px;
  }
  .green_but_box{
     margin-top:0.7rem;
     text-align: center;
     line-height: 0.91rem;
     border: 1px solid #2fab3b;
     border-radius: 10px;
     background-color: #2fab3b;
     height:0.91rem;
     color:#fff;
     font-size: 20px;
  }
  .gray_but_box{
     margin-top:0.7rem;
     text-align: center;
     line-height: 0.91rem;
     border: 1px solid #cacaca;
     border-radius: 10px;
     /*background-color: #2fab3b;*/
     height:0.91rem;
     color:#fff;
     font-size: 20px;
    background-color: #cacaca;
  }
  .footer{
    width:6.35rem;
    margin-top:0.2rem;
    /*position:fixed;*/
   /* bottom:0.23rem;*/
  }
  .footer p{
      text-align: center;
      color:#e4e4e4;
      font-size: 15px;
  }
  .award{
    padding:0.18rem 0.24rem;
    width:100%;
    height:0.66rem;
    background-color:#ffefc1;
    position: fixed;
    top:0px;
    overflow: hidden;  
  }
  .hide{
    display:none;
  }
  /*.award p{
     
  }*/
  .petunia{
      margin-right:0.2rem;
      
      width:20px;
      height:15px;
      text-align: top;
     /* border:1px solid red;*/
  }
  .petunia img{
    width:0.6rem;
    height:0.6rem;
    margin-top:-0.1rem;
  }
  .award_word{
    font-size: 14px;
    color:#676d6d;
  }
  .left{
    float:left;
  }
  .right{
    float:right;
  }
  .red{
    color:red;
  }
  .close{
    position:relative;
    text-align: center;
   /* line-height: 17px;*/
    color:#6d6163;
   /* width:20px;
    height:20px;*/
    border:1px solid #6d6163;
    border-radius: 50%;
  }
  .register_top_img{
    width:3.8rem;
    height:2.07rem;
  }
  .close_img{
    position:absolute;
    width:0.6rem;
    height:0.6rem;
    left:-0.34rem;
    top:-0.1rem;
  }
  .input_box_span{
    display:inline-block;
    width:100%;
    line-height: 0.8rem;
    border-bottom:1px solid #b6b6b6;
    height:0.8rem;
  }
  .auth_code_te{
    font-size: 16px;
    color:#000;
  }
  .clause_wrod{
    color:#2fab3b;
    text-decoration: underline;
  }
  .clause_but_wrap{
    padding-top:0.2rem;
  }
  .clause_wrap{
    width:100%;
    height:100vh;
    position:absolute;
    top:0px;
    background-color:#666666;
    opacity:0.8;
    background: rgb(128,128,128,0.8);
    z-index: 10;
    padding-top:10vh;
   /* background-color:#*/
  }
  .clause_content{
    position:absolute;
    top:10vh;
    width:80%;
    z-index: 20;
   /* height:80vh;*/
    background-color:#fff; 
    left:50%;
    margin-left:-40%;
    border-radius: 10px;
  }
  .consent_but{
     text-align: center;
     line-height: 0.91rem;
     border: 1px solid #2fab3b;
     background-color: #2fab3b;
     height:0.91rem;
     border-radius:0px 0px 10px 10px;
     color:#fff;
     font-size: 20px;
  }
  .clause_content_wrod{
    padding:0.4rem 0.3rem;
    margin-bottom:1rem;
  }
  .el-checkbox{
    margin:0.05rem 0.20rem 0px 0 !important;
  }
</style>
<template>
   <div>
       
   </div>
   
</template>
<script>
//import {WXBaseAuthorize} from "../js/wechat.js";
import WXData from "@/js/wechat.js";
  export default {
    components: {
      // personalInfo
    },
    name:"Home",
    data() {
      return {
          readyState:false
      }
    },
    created(){
      
    },
    mounted() {
      //alert(22222)
      //优化苹果手机进入首页问题 
      //// 优化
        if(localStorage.getItem('openid') == "undefined" || localStorage.getItem('openid') == null || !localStorage.getItem('openid')){
                 console.log("home","没有openid")
                  WXData.WXBaseAuthorize();
        }else{
                 console.log("home","有openid");
                 //alert("open5")
                 this.getInfo();
        };
    },
    computed:{
     
    },
    watch: {
   
    },
    methods: {
       //获取基本信息
       interceptPage(type){
        //alert(type)
        console.log(type);
           if(type == 0){
           // alert("app8")
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
        getInfo(){
           var openid = localStorage.getItem('openid');
           //var openid = "oYqIewHK593VkLLuDtT1Axx2yaAM";
           console.log("register",openid)
           var paramData = {
                openid:openid
           }
           ///public-surveyor-api-boot
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){

                  this.complete =  response.data.result.complete;
                   var that = this;
                   if(this.complete == 1){
                     setTimeout(()=>{
                          //解决进入空白问题
                          that.$confirm('此账号已存在，无需重复注册！', '温馨提示', {
                                        confirmButtonText: '确定',
                                        showCancelButton:false,
                                        customClass:"tsk",
                                        type: 'warning',
                                        showClose:false,
                                        center: true
                                }).then(() => {
                                      // 进入空白页
                                       localStorage.setItem('openid',"");
                                       WeixinJSBridge.call('closeWindow');
                                }).catch(() => {
                                      // 进入空白页
                                    WeixinJSBridge.call('closeWindow');
                                });
                              return
                           //页面显示
                          // that.readyState = true;
                     },1000);
                   }else{
                       //页面显示
                      this.readyState = true;
                      //路径跳转
                      this.interceptPage(response.data.result.step);
                   };
                    console.log(response.data.result.complete,"是否注册成功！")

                };
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

    
  };
</script>

