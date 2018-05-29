<style scoped>
     .register_wrap{
    width:100%;
    height:100vh;
    background-color:#fff; 
    
   }
   .register_content{
    padding-top:0.5rem;
    margin:0 auto;
    width:6.35rem;
   }
   .register_top{
     width: 1.86rem;
    height:1.86rem;
    margin: 0 auto;
    border: 0.5px dashed #ccc;
    margin-bottom:0.64rem;
    position: relative;
   }
   .register_top .el-icon-plus {
     font-size: .5rem;
     color: #999;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
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
    font-size: 16px;
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
    line-height: 52px !important;
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
  


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:1.86rem;
    height:1.86rem;
    line-height: 1.86rem;
    text-align: center;
  }
  .avatar {
    /*width: 178px;
    height: 178px;*/
      width:1.86rem;
    height:1.86rem;
    display: block;
  }
  .city_name_select{
    overflow: hidden;
  }
  .input_box_te{
    position:relative;
  }
  .career_ul{
    width:100%;
    position:fixed;
    max-height: 5rem;
    overflow: scroll;
    bottom:0px;
    background-color: #fff;
  }
  .career_li{
    border-bottom:2px solid rgb(239, 239, 239);
    text-align: center;
    font-size: 14px;
    width:100%;
    height:0.9rem;
    line-height: 0.9rem;
  }
  .tc{
    position:fixed;
    top:0px;
    width:100%;
    height:100vh;
    opacity:0.6;
    background-color:#e1e1e1;

   /* background: rgba(255, 255, 255, 0.5);*/
  }
</style>
<template>
  <div>
    <div class="register_wrap" v-if="readyState">
      <div class="register_content"  v-show="!cityModuleState" >
        <div class="register_top" @click='clickInput'>
          <input class="js_upFile" v-show="false"  @change='getImage' ref='avatar' id="avatar" type="file" multiple accept="image/*" capture="camera" v-if="!isIos"/>
          <input class="js_upFile" v-show="false"  @change='getImage' ref='avatar' id="avatar" type="file" multiple accept="image/*" v-if="isIos"/>
          <span class="el-icon-plus" v-if="!imageUrl"></span>
          <img :src="imageUrl" class="register_top_img" alt="" srcset="">
          <!-- <el-upload
            name="image"
            class="avatar-uploader"
            action="/public-surveyor-api-boot/public/file/v1/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" >
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
<!--           <img class="register_top_img" src="../images/headPortrait1.png" v-on:click="imgChange">
          <p class="top_wrod">请按照示例图上传大头照</p> -->
        </div>
        <div class="input_box">
         <div class="city_input">
            <p class="city_title left">姓名</p>
            <p class="city_name right">
                <input type="text" name="" :value="name" @input="nameInput" v-on:blur="nameChange" maxlength="4" class="name_input" placeholder="请输入姓名">
            </p>
          </div>
        </div>
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
                  {{company}}
                <!-- <input type="text" name="" value="" @input="companyInput" v-on:blur="companyChange" maxlength="20" class="name_input" placeholder="请输入公司"> -->
            </p>
          </div>
        </div>
        <div class="input_box input_box_te" >
         <div class="city_input" v-on:click="openCareer">
            <p class="city_title left">职业</p>
            <p class="city_name right city_name_te">{{careerName}}</p>
            <p class="auth_code auth_code_te"> <img src="../images/RightOn.png" class="auth_code_img"> </p>
           <!--  <div class="city_name right city_name_select">
              
               <el-select v-model="optionsValue" placeholder="请选择" popper-class="career_wrap" @change="careerChange">
                 <el-option
                   v-for="item in options"
                   :key="item.code"
                   :label="item.name"
                   :value="item.code">
                 </el-option>
               </el-select>
            </div> -->
          </div>
        </div>
        <p v-bind:class="{ 'green_but_box':isGreen, 'gray_but_box': !isGreen }" v-on:click="registerButton">
            下一步
        </p>


      </div>

      <city-module v-show="cityModuleState"></city-module>
       <div class="tc" v-if="selectCareerStatue" @click="cancelLayer"></div>
       <ul class="career_ul" v-if="selectCareerStatue">
          <li class="career_li" v-for="item in options" @click="selectCareer($event,item.code,item.name)">{{item.name}}</li>
        </ul>
   </div>
</div>
</template>
<script>
  import Bus from '../../accident/static/js/bus.js'
  import cityModule from '../components/cityModule'
  export default {
     components: {
      cityModule
    },
    name:"personalInfo",
    data() {
      return {
          isIos:false,
          selectCareerStatue:false,//弹层状态
          careerCode:"",
          careerName:"",
          careerStatus:false,//职业选择状态
          options:[],//职业列表
          complete:"", 
          readyState:false,//页面显示状态
          action:this.ajaxUrl + "/public/file/v1/uploadImage",
          imageUrl:'',//本地图片引用地址
          imgeUrlLine:"",//后台返回的线上图片地址
          isGreen:false,
          cityModuleState:false,//组件显示状态
          img:"",
          imgState:"",
          name:"",//用户名
          nameState:false,
          city:"",
          lat:"",//纬度
          lng:"",//经度
          cityCode:"",//城市code
          cityState:false,
          companyCode:null,
          company:"",
          companyState:false
      }
    },
    created(){
       
    },
    mounted() {
        //获取浏览器的userAgent,并转化为小写
        var ua = navigator.userAgent.toLowerCase();
        //判断是否是苹果手机，是则是true
        var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
        if (isIos) {
            this.isIos = true;
            this.$nextTick(function () {
                //$('#avatar').attr('capture',"")
               //document.getElementById('avatar').removeAttribute("capture");
            })
            
        };


      //回车键
       document.onkeydown = (ev) => {
        if (ev.keyCode == 13) {
          this.registerButton()
        }
      };
      //获取基本信息
      this.getInfo();
      //获取职业列表
      this.getDicts();
       // setTimeout(() => {
       //    this.$store.commit('setSurveyNoActive',"改变后")
       //  }, 1000)
       //注册城市选择回调
      Bus.$on('addSelectCity',(data)=>{
           console.log("城市名回现数据",data)
           this.cityState = true;
           this.cityModuleState = false;
           this.city = data.value;
           this.cityState = true;
           this.cityCode = data.code;
           this.lat = data.lat;
           this.lng = data.lng;
           this.setButGreen();
      })
    },
    computed:{
     // company: function () {
     //     return this.$store.state.companyName
     //  }
    },
    watch: {

    },
    methods: {
      //职业选择
      selectCareer(e,code,name){
          this.careerCode = code;
          this.careerName = name;
          this.careerStatus = true;
          this.setButGreen();

          this.selectCareerStatue = !this.selectCareerStatue;
      },
      //关闭弹层
      cancelLayer(){
         this.selectCareerStatue = !this.selectCareerStatue;
      },
      //打开弹层
      openCareer(e){
        this.selectCareerStatue = !this.selectCareerStatue;
      },
       //获取基本信息
        getInfo(){
           var openid = localStorage.getItem('openid');
           //var openid = "oYqIewHK593VkLLuDtT1Axx2yaAM";
           var paramData = {
                openid:openid
           }
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                    //页面显示
                      this.readyState = true;
                    //判断是否注册过
                      this.complete =  response.data.result.complete;
                    if(response.data.result.username){//用户名
                       this.name = response.data.result.username;
                       this.nameState = true;
                    }else{
                       this.name = "";
                       this.nameState = false;
                    };
                    if(response.data.result.cityCode){
                       this.cityCode = response.data.result.cityCode;//城市名
                       this.cityState = true;
                       this.city = response.data.result.cityName
                       this.lat = response.data.result.lat
                       this.lng = response.data.result.lng
                    }else{
                       this.cityCode = "";//城市名
                       this.cityState = false;
                       this.city = "";
                       this.lat = "";
                       this.lng = "";
                    };
                    if(response.data.result.companyName){
                       this.company = response.data.result.companyName;//公司名
                       this.companyCode = response.data.result.companyCode;
                       
                    }else{
                      this.company = "";//公司名
                      this.companyCode = "";
                    };
                    if(response.data.result.logo){
                      this.imageUrl = response.data.result.logo;
                      this.imgState = true;
                    }else{
                      this.imageUrl = "";
                      this.imgState = false;
                    }
                    //职业
                    if(response.data.result.type){//用户名
                        this.careerCode = type;
                        this.careerName = this.typeName;
                        this.careerStatus = true;
                    }else{
                        this.careerCode = "";
                        this.careerName = "";
                        this.careerStatus = false;
                    };
                   // this.$store.commit('setcompanyActive',response.data.result);
                   // console.log(response.data.result.qcode);
                   // this.invitationCode = response.data.result.qcode; 
                   // this.interceptPage(response.data.result.step);

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
      // click input file
      clickInput(){
        this.$refs.avatar.click();
      },
      uploadAvatar(url){
        var formData = new FormData();
        formData.append("image", url);
        this.$ajax.post(this.ajaxUrl+"/public/file/v1/uploadImage",formData)
        .then(response => {
          if(response.data.rescode == 200){
              this.imageUrl = response.data.url;
              this.setButGreen(); 
          }else{
            this.$message({
              message: response.data.resdes,
              type: 'error'
            });
          }
        }, err => {
          console.log(err);
        })
      },
       // 获取到的图片
      getImage(){
          var reader = new FileReader();//新建一个FileReader
          console.log(this.$refs.avatar.files[0])
          reader.readAsDataURL(this.$refs.avatar.files[0]);//读取文件
          var that = this;
          reader.onload = (evt) => { //读取完文件之后会回来这里
              // var fileString = evt.target.result;
              //post方式上传图片到控制器
              this.uploadAvatar(this.$refs.avatar.files[0]);       
          }
       },
       getDicts(){
           var paramData = {
                type:"vocation"
           }
          this.$ajax.post(this.ajaxUrl+"/public/dict/v1/getDicts",paramData)
            .then(response => {
                if(response.status == 200){
                   this.options = response.data.dicts;
                }
                console.log(this.options,666666)
                console.log(response,444444)
            }, err => {

              console.log(err);

            })
            .catch((error) => {
              
            });
       },
       // careerChange(code){
        
       // },
       //下一步按钮变色
       setButGreen(){
           if(this.imageUrl && this.nameState && this.cityState && this.careerStatus){
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
             this.setButGreen();
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
             this.setButGreen();
          }else{
             this.companyState = true;
             this.company = company;
             
             this.setButGreen();
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
          if(this.complete == 1){
             this.$message({
               showClose: true,
               message: '此账号已被注册！',
               type: 'success'
             });
             return
          };
          if(!this.imageUrl){
               this.$message({
                message: '请上传头像',
                type: 'error'
              });
               this.isGreen = false
              return
           }
           if(!this.nameState){
               this.$message({
                message: '请输入姓名',
                type: 'error'
              });
               this.isGreen = false
              return
           }
           if(!this.cityState){
               this.$message({
                message: '请选择城市',
                type: 'error'
              });
              this.isGreen = false
              return
           }
           if(!this.careerStatus){
              this.$message({
                message: '请选择职业',
                type: 'error'
              });
              this.isGreen = false
              return
           }
          var openid = localStorage.getItem('openid');
          var paramData = {
                openid:openid,
                step:"2",
                userName:this.name,
                cityCode:this.cityCode,
                cityName:this.city,
                companyName:this.company,
                companyCode:this.companyCode,
                logo:this.imageUrl,//传入后台返回线上链接
                lat:this.lat,
                lng:this.lng,
                typeName:this.careerName,
                type:this.careerCode
          }
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {

              if(response.data.rescode == 200){
                localStorage.setItem('step',2);
                console.log(response.data.result,"城市返回数据");
                this.$router.push({path:'/workRange'});

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
       //上传图片成功
      handleAvatarSuccess(res, file) {
        // alert(111111)
        console.log(res,"图片上传后台返回数据",file.raw)
        this.imgeUrlLine = res.url
        this.imgState = true
        //本地显示地址
        this.imageUrl = URL.createObjectURL(file.raw);
        this.setButGreen();
      },
      //上传图片过程
      beforeAvatarUpload(file) {
        const isJPG = file.type
        const isLt2M = file.size / 1024 / 1024 ;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        return isJPG && isLt2M;
        
      }

    }

    
  };
</script>

