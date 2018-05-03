<style scoped>
  .feed_back_wrap{
    width:100%;
    height:100vh;
    background-color:#f0eff5; 
    padding-top:0.2rem;
  }
  .feed_back_li{
    padding-top:0.2rem;
    background-color: #fff;
    height:0.88rem;
    padding-left:0.34rem;
    padding-right:0.34rem;
    font-size: 16px;
    color:#353535;
    margin-bottom:0.05rem;
  }
  .p_img{
    width:0.6rem;
    height:0.6rem;
   /* border:1px solid red;*/
  }
  .feed_back_li_te{
    margin-bottom:0.2rem;
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
</style>
<template>
   <div class="feed_back_wrap">
      <div class="feed_back_li" @click="modifyPhoneNumber">
         <p class="left">修改手机号</p>
         <p class="right"> <img src="../images/RightOn.png" class="p_img"> </p>
      </div>
      <div class="feed_back_li feed_back_li_te" @click="modifyListRange">
         <p class="left">修改接单范围</p>
         <p class="right"> <img src="../images/RightOn.png" class="p_img"> </p>
      </div>
      <div class="feed_back_li" @click="suggestionFeedback">
         <p class="left">意见反馈</p>
         <p class="right"> <img src="../images/RightOn.png" class="p_img"> </p>
      </div>
      <div class="feed_back_li">
         <p class="left">开启抢单</p>
         <div class="right"> 
             <el-switch
                v-model="switchState"
                active-color="#13ce66"
                inactive-color="#ff4949" @change="switchChange">
             </el-switch> 
         </div>
      </div>

       <p class="green_but_box" @click="logOut">
               退出登录
       </p>
   </div>
   
</template>
<script>

  export default {
    components: {
      
    },
    name:"set",
    data() {
      return {
        switchState:false
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
        //修改接单范围
        modifyListRange(e){
             this.$router.push({path:'/workRange'});
        },
        //意见反馈
        suggestionFeedback(e){
            this.$router.push({path:'/feedback'});
        },
        //修改手机号
        modifyPhoneNumber(e){
           this.$router.push({path:'/reset'});
        },
        //抢单按钮
        switchChange(e){
               console.log(e)
        },
        //退出登录
        logOut(e){
           this.$router.push({path:'/login'})
        }
    }

    
  };
</script>

