<style scoped>
  .red-packet{
    padding-top: 0.80rem;
    text-align: center;
  }
  .red-packet .info {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .red-packet .info span {
    font-weight: bold;
    font-size: 20px;
    color: #333;
    margin-left: 0.30rem;
  }
  .red-packet .info image{
      width: 0.58rem;
      vertical-align: top;
  }
  .info-tip {
    font-size: 20px;
    line-height: 0.5rem;
    color: #333;
    padding-left: 1.90rem;
    padding-right: 0.80rem;
    margin-top: 0.16rem;
    text-align: left;
    margin-bottom: 0.2rem;
  }
  .redBag {
    width: 4.80rem;
    vertical-align: top;  
  }
  .money {
    position: absolute;
    bottom: 1.50rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    color: #fff;
  }
  .money span {
    color:#fff;
    font-size: 20px;
  }
  .btn {
    width: 6.38rem;
    height: 0.90rem;
    border-radius: 0.15rem;
    background: #2eab3b;
    font-size: 20px;
    line-height: 0.90rem;
    color: #fff;
    margin: 0.80rem auto 0;
  }
  .grayBut{
    width: 6.38rem;
    height: 0.90rem;
    border-radius: 0.15rem;
    background: #7f7f7f;
    font-size: 20px;
    line-height: 0.90rem;
    color: #fff;
    margin: 0.80rem auto 0;
  }

  .img-top{
    width:30px;
    height:30px;
  }
  .timer-word{
    color:#fff;
  }
</style>
<template>
  <div class='red-packet' v-if="readyState">
      <div class="info">
          <img src="../images/defeated.png" class="img-top">
          <span>手慢了，订单被别人抢走了~</span>
      </div>
    <!--   <div class='info-tip'>别灰心，送您一个红包奖励，拆开后继续去抢单吧</div> -->
      <div style='position:relative;height:584rrem;margin-top:54rpx;' v-if="moneyData">
      <img src='../images/red_packet.png' class='redBag' v-if='!isOpen' @click="openRedPacket">
      <img src="../images/Open_red_envelopes.png" class='redBag' v-if='isOpen'>
      <div class='money' v-if='isOpen'><span>{{moneyData}} </span> 元</div>
      </div>
      <div v-bind:class="{ 'btn':!isTiming, 'grayBut':isTiming }" @click="getMoreOrder">继续抢单 <span v-show="isTiming" class="timer-word">（{{timeLeft}}s）</span></div>
  </div>
   
</template>
<script>

  export default {
    components: {
      // personalInfo
    },
    name:"redPacket",
    data() {
      return {
          readyState:false,
          moneyData:"",
          timer:"", // 计时器
          timeLeft: 10,  // 倒计时
          uid: '',  // 用户id
          orderNo: '', // 订单号,
          isOpen: false, // 红包拆开了吗
          isTiming: true, // 是否在倒计时
      }
    },
    created(){
      
    },
    mounted() {
     // 清除定时器
     if(this.timer) clearTimeout(this.timer);

     // 开始倒计时
     this.timer = setInterval (() => {
       console.log(this.timeLeft)
       if(this.timeLeft > 0) {
         this.timeLeft = --this.timeLeft
       }else {
        this.timeLeft = 0;
        this.isTiming = false;
         clearTimeout(this.timer);
       }
     },1000)
     this.readyState = true;
      //获取红包信息
      //this.getRedPacket();
    },
    computed:{
     
    },
    watch: {
   
    },
    methods: {
       //获取红包信息
       getRedPacket(){
          var paramData = { 
            uid: this.$store.state.uid,
            orderNo: this.$store.state.orderno
          };
          this.$ajax.post("/boot-xcx-survey-api/rider/income/v1/redpacket/receive",paramData)
            .then(response => {
                this.readyState = true;
                if(res.data.rescode == 200) {
                   console.log("获取到的红包金额是",res.data.data);
                   this.moneyData = res.data.data;
                 }else{
                  this.moneyData = "";
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
       // 拆开红包
       openRedPacket() {
         this.isOpen = true;
         console.log(this.$store.state.uid)
         console.log(this.$store.state.orderno)
         // var paramData = { 
         //   uid: this.$store.state.uid,
         //   orderNo: this.$store.state.orderno
         // };
         // this.$ajax.post("/boot-xcx-survey-api/rider/income/v1/redpacket/receive",paramData)
         //   .then(response => {
         //       if(res.data.rescode == 200) {
         //          console.log("获取到的红包金额是",res.data.data);
         //          this.moneyData = res.data.data;
         //        }
         //       console.log(response,33333)
         //   }, err => {

         //     console.log(err);

         //   })
         //   .catch((error) => {
         //     // this.$message({
         //     //     message: '短信验证码发送失败',
         //     //     type: 'error'
         //     //   });
         //   });
       },

       // 抢单
       getMoreOrder () {
         if(!this.isTiming) {
           this.$router.push({path:'/caseList?riderId='+this.$store.state.uid});
         }
       },
        
    }

    
  };
</script>

