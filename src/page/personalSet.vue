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
    margin-bottom:0.02rem;
  }
  .p_img{
    width:12px;
    height:24px;
    border:1px solid red;
  }
  .feed_back_li_te{
    margin-bottom:0.2rem;
  }
</style>
<template>
   <div class="feed_back_wrap">
      <div class="feed_back_li" @click="ModifyPhoneNumber">
         <p class="left">修改手机号</p>
         <p class="right"> <img src="" class="p_img"> </p>
      </div>
      <div class="feed_back_li feed_back_li_te" @click="ModifyListRange">
         <p class="left">修改接单范围</p>
         <p class="right"> <img src="" class="p_img"> </p>
      </div>
      <div class="feed_back_li" @click="suggestionFeedback">
         <p class="left">意见反馈</p>
         <p class="right"> <img src="" class="p_img"> </p>
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
   </div>
   
</template>
<script>

  export default {
    components: {
      
    },
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
        ModifyListRange(e){
             this.$router.push({path:'/feedback'});
        },
        //意见反馈
        suggestionFeedback(e){
            this.$router.push({path:'/feedback'});
        },
        //修改手机号
        ModifyPhoneNumber(e){
           this.$router.push({path:'/reset'});
        },
        //抢单按钮
        switchChange(e){
               console.log(e)
        }
    }

    
  };
</script>

