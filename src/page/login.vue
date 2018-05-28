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
   /* border:1px solid #6d6163;*/
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
   /* margin-bottom:1rem;*/
    height:70vh;
    overflow: scroll;
  }
  .el-checkbox{
    margin:0.05rem 0.20rem 0px 0 !important;
  }
  .clause_content_top{
    text-align: center;
  }
  .clause_content_top_content{
    text-indent: 0.3rem;
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
             <input type="text" name="" value="" v-model="phoneNums" v-on:blur="phoneChange" @input="phoneInput" placeholder="请输入登录手机号">
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
                <p class="clause_content_top">你我保用户注册与服务须知</p>
                <div>
                   <p>一、总则</p>
                   <p class="clause_content_top_content">
                      1、请务必认真阅读和理解本《用户注册与服务须知》(以下简称《须知》)中规定的所有权利和限制。

                      2、除非另有明确规定，你我保平台所推出的新功能、新服务，均无条件的使用本须知。

                      3、你我保平台保留在任何时候修改本须知条款的权利，且无需另行通知，用户在使用服务时应关注并遵守；当发生有关争议时,以最新的须知文本为准。
                   </p>
                  
                </div>
                 <div>
                   <p>二、用户注册</p>
                   <p class="clause_content_top_content">
              
                      1、用户应当同意本须知的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击"确认"按钮即表示用户完全接受本须知项下的全部条款。

                      2、用户在使用本平台服务过程中应保证各项服务业务所需信息的真实性,如果因确认的信息不真实而引起的问题，并对问题发生所带来的后果，你我保平台不负任何责任。

                      3、在您注册和使用你我保平台时，本平台会提示、收集您的部分个人信息和设备信息，本平台不对外公开或向第三方提供用户的信息资料。仅会将这些资料用于：改进为您提供的服务及网页内容。
                   </p>
                  
                </div>
                 <div>
                   <p>三、服务内容</p>
                   <p class="clause_content_top_content">
                      1、你我保平台免费为用户提供服务，用户使用网络下载服务软件产生的流量费用需自行承担。
                      2、除非本服务须知另有其它明示规定，本平台所推出的新产品、新功能、新服务，均受到本服务须知之规范。
                      3、用户同意使用本平台服务,由本平台根据实际情况提供。用户的使用行为视为其对服务条款以及本平台在服务中发出的各类公告的同意。
                   </p>
                  
                </div>
                <div>
                   <p>四、服务变更、中断或终止</p>
                   <p class="clause_content_top_content">
                        1、你我保平台会定期或不定期的对本平台系统进行检修或维护，无需为此承担任何责任。
                        2、鉴于网络服务的特殊性（包括但不限于服务器的稳定性问题、恶意的网络攻击等行为的存在及你我保平台无法控制的情形），用户同意你我保平台有权随时中断或终止部分或全部的服务。
                   </p>
                  
                </div>
                <div>
                   <p>五、用户使用规则</p>
                   <p class="clause_content_top_content">
                      1、用户在使用系统过程中,应遵守道路交通管理相关法律和法规。
                      2、用户应遵守本平台网络服务须知的各项规定。
                      3、用户对以其账号发生的或通过其账号发生的一切活动和事件负全部法律责任。
                      4、用户不得为任何非法目的或利用本平台系统服务进行不正当活动。
                      5、用户不得对本平台系统服务任何部分或本平台系统服务中使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。
                   </p>
                  
                </div>
                <div>
                   <p>六、免费声明</p>
                   <p class="clause_content_top_content">
                      1、鉴于本科技系统使用网络服务的特殊性,不担保网络服务一定满足用户的要求,也不担保网络服务不会中断,对网络服务的及时性、安全性和准确性也不作担保。
                      2、对于因电信系统或互联网网络故障、计算机故障、计算机系统问题或其它任何不可抗力原因而产生损失, 本平台系统不承担任何责任,但将尽力减少因此给用户造成的损失和影响。
                   </p>
                  
                </div>
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
          phoneNums:"",
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
                       this.phoneNums = response.data.result.phone;//电话号
                       this.phoneNumState = true;
                    }else{
                       this.phoneNum = "";//电话号
                       this.phoneNums = "";//电话号
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
                       //获取二维码进来的邀请码
                       // if(localStorage.getItem('authCode')){
                       //   this.invitationCode = localStorage.getItem('authCode');//邀请吗
                       //   this.invitationCodeState = true;
                       // }else{
                       //    this.invitationCode = "";//邀请吗
                       //    this.invitationCodeState = false;
                       // }
                       
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
           this.phoneNums = phone;
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
    

              }else{
                this.$message({
                   showClose: true,
                   message: response.data.resdes,
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

