<style scoped>
  .survey-wrap{
     background-color:#f0eff5;
     font-size: 12px;
     height: 100vh;
  }
  .top-wrap-back{
    width:100%;
    height:20vh;
    margin-bottom:0.22rem;
  }
  .top-wrap{
    background-size:auto auto;
   /* height:2.67rem;*/
  }
  .top-content{
    width:5rem;
    margin:0 auto;
    padding-top:0.6rem;
    overflow:hidden;
    position:absolute;
    top:0px;
    left:1.5rem;
  }
  .top-content-left{
      width:50%;
      border-right:1px solid #ffffff;
  }
  .top-content-right{
      width:50%;
      text-align: right;
  }
  .top-content-p1{
    line-height: 30px;
    font-size:16px;
    color:#ffffff;
    text-align: center;
  }
  /* .top-content-p2{
    font-size:30px;
    color:#ffffff;
    text-align: center;
  } */
  .top-content-span{
    color:#fff;
     font-size:20px;
  }
  .left{
    float:left;
  }
  .right{
    float:right;
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
    margin-right:0.20rem;
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
  .yellow-word{
    color:#f46b03;
  }
  .order-footer{
    height:1rem;
  }
  .but-wrap{
    width:1.80rem;
    height:0.70rem;
    margin-top:0.15rem;
    background: #2fab3b;
    line-height: 0.70rem;
    border-radius: 10px;
    text-align: center;
    color:#fff;
    font-size: 15px;
  }

  .order-footer-word{
    height:1rem;
    line-height: 1rem;
    font-size: 13px;
  }
  .warmPrompt{
    width:100%; 
   /* position: fixed;*/
    bottom:0px; 
    padding-bottom:0.40rem; 
    padding-top:0.40rem;
    font-size:12px;
    color:#b1b1b3;
    text-align: center;
    background-color: #f0eff5;
  }
  .el-message-box-te{
    margin-top:10px !important;
  }
  .order-list-wrap{
    max-height:80vh;
    overflow: scroll;
  }
</style>
<template>
  
      <div class="survey-wrap" >
        <div v-if="readyState">
          <div class="top-wrap">
               <div>
                 <img src="../images/background_one.png" class="top-wrap-back">
               </div>
                <div class="top-content">
                    <div class="left top-content-left">
                       <div class="top-content-p1"><span class="top-content-span">{{todayReceiveOrderCount}}</span> 单</div>
                       <div class="top-content-p1">每日接单</div>
                    </div>
                    <div class="right top-content-right">
                        <div class="top-content-p1"><span class="top-content-span">{{todayIncome}}</span> 元</div>
                        <div class="top-content-p1">今日收入</div>
                    </div>
                </div>
          </div>
         <div class="order-list-wrap">
            <div class="order-list" v-for="(item, index) in orderList">
                  <div class="order-title">
                      <span class="left order-plate">{{item.vehicleLicenseNo}}</span>
                      <span class="right order-company">{{item.insuranceCompanyName}}</span>
                  </div>
                  <div class="order-word-wrap">
                    <img class="word-img left" src="../images/time_one.png">
                    <span class="order-word left">{{item.createTime}}</span>
                  </div>
                  <div class="order-word-wrap">
                    <img class="word-img left" src="../images/circle.png">
                    <span class="order-word left">要求{{item.estimateArrivalTime}}到达</span>
                  </div>
                  <div class="order-word-wrap order-word-wrap-te">
                    <img class="word-img left word-img-te" src="../images/site.png">
                    <span class="order-word left">{{item.address}} <span class="yellow-word"> {{item.straightLineDistance}}k</span></span>
                  </div>
                  <div class="order-footer">
                      <div class="left order-footer-word yellow-word">
                         正在等待查勘
                      </div>
                      <div class="right but-wrap" @click="lootMenu" :orderNo="item.orderNo">
                         抢单
                      </div>
                      
                   </div>
                 
            </div>

            <div class="warmPrompt">
                   温馨提示：抢单成功后不能手动取消，需联系客服取消订单
           </div>
        </div>
      </div>
         <el-button class="loadingBut"
            v-loading.fullscreen.lock="fullscreenLoading" v-if="fullscreenLoading">
          </el-button>
          <!-- 弹出框 -->
          <!-- <div class="pop-box">
              
          </div> -->
          <!--  <div class="warmPrompt">
                   温馨提示：抢单成功后不能手动取消，需联系客服取消订单
           </div> -->
      </div>

  
</template>
<script>

  // import personalInfo from '../components/personalInfo'
  export default {
    components: {
      // personalInfo
    },
    name:"List",
    data() {
      return {
          readyState:false,
          topPromise:"",
          listPromise:"",
          fullscreenLoading:true,
          lng: "",
          lat: "",
          riderId:"",//用户id
          orderList:[],
          todayReceiveOrderCount:"",//今日接单数
          todayIncome: ""//今日收入
      }
    },
    created(){
      
    },
    mounted() {
      // this.$confirm('您已有存在订单，请前往App完成查勘任务！', '温馨提示', {
      //                       confirmButtonText: '确定',
      //                       cancelButtonText: '取消',
      //                       type: 'warning',
      //                       customClass:"el-message-box-te",
      //                       center: true
      //                     }).then(() => {
      //                        WeixinJSBridge.call('closeWindow');
      //                     }).catch(() => {
      //                       WeixinJSBridge.call('closeWindow');
      //                     });
      //alert(this.$route.query.riderId);
      //this.riderId = "eac8cb6f-e5a6-4e2e-b741-6bc414fb0576" //this.$route.query.riderId;
      this.riderId = this.$route.query.riderId;
      this.$store.commit('setuidActive',this.riderId);
      var that = this;
    
       setTimeout(function(){
          that.getPlace();
       },1000)
     
    },
    computed:{
     
    },
    watch: {
   
    },
    methods: {
        //定位
        getPlace(){
          var that = this;
          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              that.lng = r.point.lng;
              that.lat = r.point.lat
              console.log('您的位置：'+r.point.lng+','+r.point.lat);

              that.$store.commit('setlngActive',r.point);
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
              var paramData = {
                  uid: this.riderId,
                  lng: this.lng,//getApp().data.longitude,
                  lat: this.lat 
              };
             this.$ajax.post("/boot-xcx-survey-api/order/v1/undone",paramData)
               .then(response => {
                   if(response.data.rescode == 200){
                      if(!response.data.data){
                          this.getOrderList();
                          this.getTopInfo();
                          var that = this;
                          Promise.all([this.topPromise,this.listPromise]).then(function() {
                               that.readyState = true;
                               that.fullscreenLoading = false;
                           });
                      }else{
                          this.fullscreenLoading = false;
                          this.$confirm('您已有存在订单，请前往App完成查勘任务！', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning',
                            center: true
                          }).then(() => {
                             WeixinJSBridge.call('closeWindow');
                          }).catch(() => {
                            WeixinJSBridge.call('closeWindow');
                          });
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
        },
        //获取订单列表
        getOrderList(){
             var paramData = {
                 userId: this.riderId,
                 lng: this.lng,
                 lat: this.lat 
             };
          this.listPromise = this.$ajax.post("/boot-xcx-survey-api/order/v1/unconsumed/list",paramData)
              .then(response => {
                  if(response.data.rescode == 200){
                       this.orderList = response.data.data;
                      // this.orderList  = [{
                      //   vehicleLicenseNo:"111",
                      //   createTime:"222",
                      //   estimateArrivalTime:"333",
                      //   address:"4444",
                      //   insuranceCompanyName:"5555",
                      //   straightLineDistance:"666",
                      //   orderNo:"777777"
                      // }]
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
        //获取头部信息
        getTopInfo(){
           var mobilePhone = this.riderId;
           this.topPromise = this.$ajax.get("/boot-xcx-survey-api/rider/v1/me/"+mobilePhone)
             .then(response => {
                 if(response.data.rescode == 200){
                  this.todayReceiveOrderCount = response.data.data.todayReceiveOrderCount;
                  this.todayIncome = response.data.data.todayIncome
                  
                   console.log(response.data.data, 555555555)
                   
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
        //抢单按钮
        lootMenu(event){
          
          var orderno = event.target.getAttribute('orderno');

          this.$store.commit('setordernoActive',orderno);

          console.log(orderno,"订单号");
          this.getLootDat(orderno);
          this.fullscreenLoading = true;
        },
        //抢单数据请求
        getLootDat(id){
          var paramData = {
            uid: this.riderId,
            orderNo:id,
            lng: this.lng,
            lat: this.lat 
          };
         this.$ajax.post("/boot-xcx-survey-api/order/v1/scramble",paramData)
         .then(response => {
             if(response.data.rescode == 200){
                 //抢单成功
                this.fullscreenLoading = false;
                 if (response.data.data.ok){
                     this.$confirm('您已抢单成功！请前往App进行查勘。', '温馨提示', {
                           confirmButtonText: '确定',
                           cancelButtonText: '取消',
                           type: 'warning',
                           center: true
                     }).then(() => {
                          WeixinJSBridge.call('closeWindow');
                     }).catch(() => {
                         WeixinJSBridge.call('closeWindow');
                     });

                 }else{
                     //发放了红包
                     if (response.data.data.grantRedPacket){
                       this.$router.push({path:'/redPacket'});
                     }
                     if(!response.data.data.grantRedPacket){
                       //没有红包
                       this.$router.push({path:'/redPacket'});
                     }
                 };
                
             }else{
                //发放了红包
                if (response.data.data.grantRedPacket){
                  this.$router.push({path:'/redPacket'});
                }
                if(!response.data.data.grantRedPacket){
                  //没有红包
                  this.$router.push({path:'/redPacket'});
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

