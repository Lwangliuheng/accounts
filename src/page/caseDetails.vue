<style scoped>
  .survey-wrap{
     background-color:#f0eff5;
     font-size: 12px;
     height: 100vh;
  }
  

   .order-list{
    background-color:#fff; 
    margin-bottom:0.22rem;
    padding-top:0.44rem;
    padding-left:0.33rem;
    padding-right:0.33rem;
  }
  .order-title{
    height:1rem;
  }
  .order-plate{
    font-size:20px;
  }
  .order-company{
    width:3.5rem;
    font-size:18px;
    color:#a9a9a9;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .order-word{
    color:#666666;
    font-size: 15px;
  }
  .word-img{
    text-align: center;
    width:16px;
    height:16px;
    /* border:1px solid red; */
    margin-left:0.20rem;
  }
  .word-img-te{
    width:16px;
    height:16px;
  }
  .order-word-wrap{
    overflow: hidden;
    padding-bottom:0.1rem;
  }
  .order-word-wrap-te{
    border-bottom:1px solid #eaeaea;
    padding-bottom:0.10rem;
  }
  .el-message-box-te{
    margin-top:10px !important;
  }
  .order-list-wrap{
    max-height:80vh;
    overflow: scroll;
  }
  .order-word-wrap-te{
    padding-bottom:0.4rem;
  }
</style>
<template>
  
      <div class="survey-wrap" >
        
          <div class="order-list-wrap" v-if="readyState">
               <div class="order-list" @click="jumpClick">
                   <div class="order-title">
                       <span class="left order-plate">{{this.infoData.vehicleLicenseNo}}</span>
                       <span class="right order-company">{{this.infoData.insuranceCompanyName}}</span>
                   </div>
                   <div class="order-word-wrap">
                     <span class="order-word left">报案时间：</span>
                     <span class="order-word left">{{this.infoData.createTime}}</span>
                   </div>
                   <div class="order-word-wrap">
                     <span class="order-word left">用户姓名：</span>
                     <span class="order-word left">{{this.infoData.orderUserFullName}}</span>
                   </div>
                   <div class="order-word-wrap">
                     <span class="order-word left">查勘地址：</span>
                     <span class="order-word left">{{this.infoData.orderAddress}}</span>
                     <img class="word-img left word-img-te" src="../images/site.png">
                   </div>
                   <div class="order-word-wrap order-word-wrap-te">
                     <span class="order-word left">用户电话：</span>
                     <span class="order-word left">{{this.infoData.orderUserMobilePhone}}</span>
                     <img class="word-img left word-img-te" src="../images/xdh.png">
                   </div>  
               </div>
          </div>
       
      </div>

  
</template>
<script>
import WXData from "../js/wechat.js";
  export default {
    components: {
      // personalInfo
    },
    name:"Detail",
    data() {
      return {
        readyState:false,
        lng:"",
        lat:"",
        infoData:"",
        riderId:""
      }
    },
    created(){
       localStorage.setItem('case',"");
       if(localStorage.getItem('openid') == "undefined" || localStorage.getItem('openid') == null || !localStorage.getItem('openid')){
            localStorage.setItem('case',"1");
            WXData.WXBaseAuthorizeCase();
       }else{
         this.getInfo();
       };
       
    },
    mounted() {
  
    },
    computed:{
     
    },
    watch: {
   
    },
    methods: {
      jumpClick(){
        this.$confirm('请前往App完成查勘任务！', '温馨提示', {
           confirmButtonText: '确定',
           showCancelButton:false,
           customClass:"tsk",
           type: 'warning',
           showClose:false,
           center: true
        }).then(() => {
           //WeixinJSBridge.call('closeWindow');
        }).catch(() => {
          //WeixinJSBridge.call('closeWindow');
        });
      },
       //获取基本信息
        getInfo(){
           var openid = localStorage.getItem('openid');
           // alert(44444)
           var paramData = {
                openid:openid
           }
          this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                      //注册成功
                    if(response.data.result.complete == 1){
                      //this.riderId = "068b88be-15b5-4b2b-b536-27c7b3ba3dfb"
                       this.riderId = response.data.result.userId;
                        console.log("jibenxinxi ")
                       //定位
                       this.getPlace();
                    }else{
                       //没有注册
                        this.$router.push({path:'/'});
                    };
                }
                console.log(response,33333)
            }, err => {
              console.log(err);
            })
            .catch((error) => {
            });
       },
       //定位
       getPlace(){
         var that = this;
         var geolocation = new BMap.Geolocation();
         geolocation.getCurrentPosition(function(r){
           if(this.getStatus() == BMAP_STATUS_SUCCESS){
             that.lng = r.point.lng;
             that.lat = r.point.lat
             console.log('您的位置：'+r.point.lng+','+r.point.lat);
             console.log("dingwei ")
             that.getCurrentStatus();
           }else {
             that.$message({
               message: '获取经纬度失败',
               type: 'error'
             });
           }        
         });
       },
       //判断是否存在已有订单
       getCurrentStatus(){
        console.log("dingdan ")
             var paramData = {
                 uid: this.riderId,
                 lng: this.lng,//getApp().data.longitude,
                 lat: this.lat 
             };
            this.$ajax.post("/boot-xcx-survey-api/order/v1/undone",paramData)
              .then(response => {
                  if(response.data.rescode == 200){
                     if(!response.data.data){
                         //没有详情
                        this.$router.push({path:'/caseList',query:{riderId:this.riderId}}); 
                     }else{
                        this.readyState = true;
                         this.infoData = response.data.data;
                     }
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

    
  };
</script>

