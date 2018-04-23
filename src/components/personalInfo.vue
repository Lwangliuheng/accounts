<style scoped>
     .register_wrap{
    width:100%;
    height:100vh;
    background-color:#fff; 
    
   }
   .register_content{
    padding-top:1.5rem;
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
   .auth_code{
     font-size: 14px;
     line-height:1.16rem;
     position:absolute;
     right:0px;
     color:#e6e6e6;
     top:0px;
   }
   .yqm{
    color:#e6e6e6;
   }
  .input_box input{
    color:#6d6d6d;
    height:1.16rem;
    line-height: 1.16rem;
    width:100%;
    border-bottom:1px solid #b6b6b6;
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
   position:fixed;
   bottom:0.23rem;
  }
  .footer p{
      text-align: center;
      color:#e4e4e4;
      font-size: 12px;
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
      border:1px solid red;
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
    text-align: center;
    line-height: 17px;
    color:#6d6163;
    width:20px;
    height:20px;
    border:1px solid #6d6163;
    border-radius: 50%;
  }
</style>
<template>
    <div class="register_wrap">
      <div class="register_content">
        <div class="register_top">
          <img src="../images/logo.png">
          <p class="top_wrod">视频查勘定损平台</p>
        </div>
        <p class="input_box">
          <input type="text" name="" value="" v-on:blur="phoneChange" placeholder="请输入登录手机号">
        </p>
        <div class="input_box">
          <input type="text" name="" value=""  v-on:blur="authChange" placeholder="请输入短信验证码">
          <p class="auth_code" v-on:click="gainAuthCode"> > </p>
        </div>
        <div class="input_box">
          <input type="text" name="" value="" v-on:blur="invitationChange" placeholder="请输入邀请码">
          <p class="auth_code">
            <span class="yqm">邀请码</span>
            <img src="">
          </p>
        </div>

        <p v-bind:class="{ 'green_but_box':isGreen, 'gray_but_box': !isGreen }" v-on:click="registerButton">
            注册
        </p>


        <div class="footer">
            <p>注册即同意《注册条款》</p>
            <p>如不同意请停止注册</p>
        </div>

      </div>
      
      <div class="award">
          <p class="left petunia">1</p>
          <p class="left award_word">完成组成即送<span class="red">100元返现券</span>，赶紧加入吧</p>
          <p class="right close" @click="cancelBut">X</p>
      </div>
        <!-- <el-button type="primary" style="width:6rem;">主要按钮</el-button> -->
   </div>

</template>
<script>
  export default {
    data() {
      return {
         
      }
    },
    created(){
      
    },
    mounted() {

       // setTimeout(() => {
       //    this.$store.commit('setSurveyNoActive',"改变后")
       //  }, 1000)
       //  
      
    },
    computed:{
     aDouble: function () {
         return this.$store.state.surveyNo
      }
    },
    watch: {

    },
    methods: {
       
    }

    
  };
</script>

