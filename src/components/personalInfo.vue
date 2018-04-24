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
   .register_top_img{
      width:1.86rem;
    height:1.86rem;
  /*  border:1px solid red;*/
   }
   .top_wrod{
    margin-top:0.2rem;
    color:#b1b1b1;
    font-size: 13px;
   }
   .input_box{
    position: relative;
   }
   .input_box input{
      color:#343434;
   }
   .auth_code{
     font-size: 14px;
     width:0.4rem;
     text-align: center;
     line-height:1.16rem;
     position:absolute;
     right:0px;
     color:#343434;
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
    /*border-bottom:1px solid #b6b6b6;*/
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
  .city_input{
    display:inline-block;
    height:58px;
    width:100%;
    border-bottom:1px solid #9e9e9e;
    overflow: hidden; 
  }
  .city_name_te{
    margin-right:0.6rem;
  }
  .city_input p{
    font-size: 14px;
     height:58px;
     line-height:58px;
  }
  .city_title{
    width:1.5rem;
    color:#a8a8a8;
  }
  .city_name{
    text-align:right;
    width:3rem;
    color:#343434;
  }
  .name_input{
    height:50px;
    width:100%;
    text-align: right;
  }
  .auth_code_img{
    width:0.6rem;
    height:0.6rem;
    margin-top:0.24rem;
  }
  .auth_code_te{
    width:auto;
  }
</style>
<template>
    <div class="register_wrap">
      <div class="register_content"  v-if="!cityModuleState">
        <div class="register_top">
          <img class="register_top_img" src="../images/headPortrait1.png" v-on:click="imgChange">
          <p class="top_wrod">请按照示例图上传大头照</p>
        </div>
        <p class="input_box">
         <div class="city_input">
            <p class="city_title left">姓名</p>
            <p class="city_name right">
                <input type="text" name="" value="" @input="nameInput" v-on:blur="nameChange" maxlength="20" class="name_input" placeholder="请输入姓名">
            </p>
          </div>
        </p>
        <div class="input_box" v-on:click="selectCity">
          <div class="city_input" >
            <p class="city_title left">所在城市</p>
            <p class="city_name right city_name_te">{{city}}</p>
          </div>
          <p class="auth_code auth_code_te"> <img src="../images/RightOn.png" class="auth_code_img"> </p>
        </div>
        <div class="input_box">
        <div class="city_input">
            <p class="city_title left">所在公司</p>
            <p class="city_name right">
                <input type="text" name="" value="" @input="companyInput" v-on:blur="companyChange" maxlength="20" class="name_input" placeholder="请输入公司">
            </p>
          </div>
        </div>

        <p v-bind:class="{ 'green_but_box':isGreen, 'gray_but_box': !isGreen }" v-on:click="registerButton">
            下一步
        </p>


      </div>

      <city-module v-if="cityModuleState"></city-module>

   </div>

</template>
<script>
  import Bus from '../../accident/static/js/bus.js'
  import cityModule from '../components/cityModule'
  export default {
     components: {
      cityModule
    },
    data() {
      return {
          isGreen:false,
          cityModuleState:false,//组件显示状态
          img:"",
          imgState:"",
          name:"",
          nameState:false,
          city:"",
          lat:"",//纬度
          lng:"",//经度
          cityState:false,
          company:"",
          companyState:false
      }
    },
    created(){
      
    },
    mounted() {

       // setTimeout(() => {
       //    this.$store.commit('setSurveyNoActive',"改变后")
       //  }, 1000)
       //注册城市选择回调
      Bus.$on('addSelectCity',(data)=>{
           console.log("城市名回现数据",data)
           this.cityModuleState = false;
           this.city = data.value;
           this.cityState = true;
           this.lat = data.lat;
           this.lng = data.lng;
           this.setButGreen();
      })
      
    },
    computed:{
     aDouble: function () {
         return this.$store.state.surveyNo
      }
    },
    watch: {

    },
    methods: {
         //下一步按钮变色
       setButGreen(){
           if(this.imgState && this.nameState && this.cityState && this.companyState){
              this.isGreen = true;
           }else{
              this.isGreen = false;
           }
        },
       imgChange(){
        this.imgState = true
       },
       //姓名实时校验
       nameInput(e){
          var phone = e.target.value;
          if (phone.length == 0) {
             this.nameState = false;
             this.name = '';
           }else{
             this.nameState = true;
             this.name = phone;
             this.setButGreen();
          }
       },
       //姓名失去焦点校验
       nameChange(e){
           var phone = e.target.value;
           if (phone.length == 0) {
             this.$message({
                message: '请输入姓名',
                type: 'error'
              });
             this.nameState = false;
             this.name = '';
           }else{
             this.nameState = true;
             this.name = phone;
             //this.setButGreen();
          }
       },
       selectCity(){
           this.cityModuleState = true;
       },
       //公司实时校验
       companyInput(e){
          var company = e.target.value;
          if (company.length == 0) {
             this.companyState = false;
             this.company = '';
          }else{
             this.companyState = true;
             this.company = company;
             //this.setButGreen();
          }
       },
       //公司失去焦点校验
       companyChange(e){
          var company = e.target.value;
          if (company.length == 0) {
             this.$message({
                message: '请输入公司名',
                type: 'error'
              });
             this.companyState = false;
             this.company = '';
          }else{
             this.companyState = true;
             this.company = company;
             //this.setButGreen();
          }
       },
       //下一步
       registerButton(){
          this.$router.push({path:'/workRange'});
       }
    }

    
  };
</script>

