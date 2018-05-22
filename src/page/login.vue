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
      <div class="register_wrap" v-if="readyState">
         <div class="register_content">
           <div class="register_top">
             <img src="../images/logo.png" class="register_top_img">
             <p class="top_wrod">视频查勘定损平台</p>
           </div>
           <p class="input_box">
             <input type="text" name="" :value="phoneNum" v-on:blur="phoneChange" @input="phoneInput" placeholder="请输入登录手机号">
           </p>
           <div class="input_box">
             <input type="text" name="" value="" @input="authInput"  v-on:blur="authChange" placeholder="请输入短信验证码">
             <p class="auth_code auth_code_te" v-on:click="gainAuthCode">{{authValue}}</p>
           </div>
           <div class="input_box">
             <p class="input_box_span" v-if="invitationCode">{{invitationCode}}</p>
             <input type="text" name="" value=""  placeholder="请输入邀请码" v-if="!invitationCode" v-on:blur="invitationChange">
            <!--  <input type="text" name="" value=""  @input="invitationInput" v-on:blur="invitationChange" placeholder="请输入邀请码"> -->
             <p class="auth_code">
               <span class="yqm">邀请码</span>
               <img src="">
             </p>
           </div>
           <div class="clause_but_wrap">
              <el-checkbox v-model="checked" @change="checkedChange" class="el-checkbox"></el-checkbox>
              <span class="clause_wrod" @click="clauseClick">注册条款</span>
           </div>
           
           <p v-bind:class="{ 'green_but_box':isGreen, 'gray_but_box': !isGreen }" v-on:click="registerButton">
               注册
           </p>


          <!--  <div class="footer">
               <p>注册即同意《注册条款》</p>
               <p>如不同意请停止注册</p>
           </div> -->

         </div>
         
         <div class="award">
             <p class="left petunia"><img src="../images/announcement.png"></p>
             <p class="left award_word">完成组成即送<span class="red">100元返现券</span>，赶紧加入吧</p>
             <p class="right close" @click="cancelBut"><img src="../images/close.png" class="close_img"></p>
         </div>
           <!-- <el-button type="primary" style="width:6rem;">主要按钮</el-button> -->
         
      </div>
     <!--  <personal-info v-if="registerState"></personal-info> -->
     <!-- 条款弹层 -->
       <div class="clause_wrap" v-if="clausePopupState"></div>
       <div class="clause_content" v-if="clausePopupState">
            <div class="clause_content_wrod">
               4556456465454
            </div>
            <p class=" consent_but" @click="consentClick">
               同意
           </p>
       </div>
   </div>
   
</template>
<script>
//import intercept from "../js/intercept.js";
  // import personalInfo from '../components/personalInfo'
  export default {
    components: {
      // personalInfo
    },
    name:"Login",
    data() {
      return {
          clausePopupState:false,
          checked:true,//注册按钮状态
          complete:"", 
          readyState:false,
          // registerState:false,//页面切换状态
          countdown:60,//计时器
          authValue:"获取验证码",
          authValueState:true,
          isGreen:false,
          phoneNum: '',//电话号
          phoneNumState:false,
          authCode:"",//验证码
          authCodeState:false,
          invitationCode:"",//邀请码
          invitationCodeState:false
      }
    },
    created(){
      
    },
    mounted() {
      //回车键
       document.onkeydown = (ev) => {
        if (ev.keyCode == 13) {
          this.registerButton();
        }
      };
      // console.log(1111111111111)
      // var step = localStorage.getItem('step');
      //  if(localStorage.getItem('step') == "undefined" || localStorage.getItem('step') == null){
      //     this.getInfo();
      //  }else{
      //    if(step != 0 && step != 5){
      //        console.log("login");
      //        //intercept.interceptPage(step,this.$router);  
      //    }else{
      //      console.log("login111111")
      //       this.getInfo();
      //    };
      //  }
      
      //获取openid
      //alert(33333)
      //this.getCode();
      this.getInfo();
    },
    computed:{
     aDouble: function () {
         return this.$store.state.surveyNo
      }
    },
    watch: {
   
    },
    methods: {
       //获取基本信息
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
                   };
                    console.log(response.data.result.complete,"是否注册成功！")
                    if(response.data.result.phone){
                       this.phoneNum = response.data.result.phone;//电话号
                       this.phoneNumState = true;
                    }else{
                       this.phoneNum = "";//电话号
                       this.phoneNumState = false;
                    };
                    if(response.data.result.pcode){
                       this.authCode = response.data.result.pcode;//验证码
                       this.authCodeState = true;
                    }else{
                       this.authCode = "";//验证码
                       this.authCodeState = false;
                    };
                    if(response.data.result.qcode){
                       this.invitationCode = response.data.result.qcode;//邀请吗
                       this.invitationCodeState = true;
                    }else{
                       this.invitationCode = "";//邀请吗
                       this.invitationCodeState = false;
                    };
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
       },
       //同意条按钮
       consentClick(){
          this.clausePopupState = false;
          this.checked = true;
       },
       //查看注册条款
       clauseClick(){
          this.clausePopupState = true;
       },
       //注册条款
       checkedChange(value){
        this.checked = value;
        this.setButGreen();
        console.log(value,"注册条款的选择")
       },
       cancelBut(){
           $(".award").addClass("hide")
       },
       //短信验证码轮训
       settime(){
        var that = this;
        if (this.countdown == 0) { 
            this.authValueState = true;
            this.authValue="获取验证码"; 
            this.countdown = 60; 
            return;
        } else { 
            this.authValueState = false;   
            this.authValue="重新发送(" + this.countdown + ")"; 
            this.countdown--; 
        } 
        
        setTimeout(function() { 
            that.settime() }
            ,1000) 
       },
       //获取短信验证码
       gainAuthCode(){
        if(!this.phoneNumState){
             this.$message({
                message: '请输入正确的手机号',
                type: 'error'
              });
            return;
        };
        if(this.authValueState){
           // this.settime();
           var paramData = {
            phone:this.phoneNum
           }
           console.log(paramData,"短信验证码数据")
           this.$ajax.post(this.ajaxUrl+"/public/sms/v1/send",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                 this.settime();
              }else{
                this.$message({
                  message: '短信验证码发送失败',
                  type: 'error'
                });
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              // this.$message({
              //     message: '短信验证码发送失败',
              //     type: 'error'
              //   });
            })
        }
       },
       //注册按钮变色
        setButGreen(){
          
           if(this.phoneNumState && this.authCodeState && this.checked){
              this.isGreen = true;
           }else{
              this.isGreen = false;
           }
        },
        //手机号实时监控
        phoneInput(e){
           var phone = e.target.value;
           var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
           if (!r.test(phone)) {
             this.phoneNumState = false;
             this.phoneNum = '';
             this.setButGreen();
           }else{
             this.phoneNumState = true;
             this.phoneNum = phone;
             this.setButGreen();
          }
        },
        //手机号失焦
        phoneChange(e){
           var phone = e.target.value;
           var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
           if (!r.test(phone)) {
             this.$message({
                message: '请输入正确的手机号',
                type: 'error'              
              });
             this.phoneNumState = false;
             this.phoneNum = '';
           }else{
             this.phoneNumState = true;
             this.phoneNum = phone;
          }
        },
        //短信验证码实时监控
        authInput(e){
          var auth = e.target.value;
          var r = /^\d{6}\b/;
          if (!r.test(auth)) {
             this.authCodeState = false;
             this.authCode = '';
             this.setButGreen();
          }else{
             this.authCodeState = true;
             this.authCode = auth;
             this.setButGreen();
          }
        },
        //短信验证码
        authChange(e){
           var auth = e.target.value;
           var r = /^\d{6}\b/;
          if (!r.test(auth)) {
             this.$message({
                message: '请输入正确的验证码',
                type: 'error'
              });
             this.authCodeState = false;
             this.authCode = '';
          }else{
             this.authCodeState = true;
             this.authCode = auth;
          }
        },
        //邀请码实时监控
        invitationInput(e){
          var invitation = e.target.value;
          var r = /^[A-Za-z0-9]+$/;
          if (!r.test(invitation)) {
             this.invitationCodeState = false;
             this.invitationCode = '';
             this.setButGreen();
          }else{
             this.invitationCodeState = true;
             this.invitationCode = invitation;
             this.setButGreen();
          }
        },
        //邀请码
        invitationChange(e){
           var invitation = e.target.value;
           var r = /^[A-Za-z0-9]+$/;
          if (!r.test(invitation)) {
             this.$message({
                message: '请输入正确的邀请码',
                type: 'error'
              });
             this.invitationCodeState = false;
             this.invitationCode = '';
          }else{
             this.invitationCodeState = true;
             this.invitationCode = invitation;
          }
        },
        //注册按钮发送请求
        registerAjax(){
          var openid = localStorage.getItem('openid');
          console.log(openid)
          var paramData = {
                openid:openid,
                step:"1",
                phone:this.phoneNum,
                pcode:this.authCode,
                qcode:this.invitationCode
          }
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {

              if(response.data.rescode == 200){
               localStorage.setItem('step',1);
               this.$router.push({path:'/personalInfo'});
                //console.log(response.result,"城市返回数据");
    

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              // this.$message({
              //     message: '短信验证码发送失败',
              //     type: 'error'
              //   });
            })
        },
        //注册按钮点击
        registerButton(e){

  //this.$router.push({path:'/personalInfo'});

          console.log(this.invitationCodeState,this.phoneNumState,this.authCodeState);
          console.log(this.invitationCode,this.phoneNum,this.authCode);
           if(this.complete == 1){
              this.$message({
                showClose: true,
                message: '此账号已被注册！',
                type: 'success'
              });
              return
           };
           if(!this.phoneNumState){
               this.$message({
                message: '请输入正确的手机号',
                type: 'error'
              });
               this.isGreen = false
              return
           };
           if(!this.authCodeState){
               this.$message({
                message: '请输入正确的验证码',
                type: 'error'
              });
               this.isGreen = false
              return
           };
           if(!this.checked){
               this.$message({
                message: '请勾选注册条款',
                type: 'error'
              });
              this.isGreen = false
              return
           };
           // if(!this.invitationCodeState){
           //     this.$message({
           //      message: '请输入正确的邀请码',
           //      type: 'error'
           //    });
           //    this.isGreen = false
           //    return
           // }
           this.registerAjax();
           //this.$router.push({path:'/personalInfo'});
           //发送ajax
        }
        
    }

    
  };
</script>

