<template>
    <section class="personalCenter">
        <header class="top">
            <div class="top-left">
                <img class="avatar" src="../images/headPortrait2.png" alt="">
            </div>
            <div class="top-right">
                <div class="nick-name">
                    <span>张扬</span>
                    <span class="level">lv5</span>
                </div>
                <el-rate
                    v-model="value"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
            </div>
        </header>
        <div class="content">
            <div class="item" @click="myPlan">
                <img class="icon" src="../images/wallet.png" alt="">
                <span>我的计划</span>
            </div>
            <div class="item" @click="onlineLearn">
                <img class="icon" src="../images/learn.png" alt="">
                <span>在线学习</span>
            </div>
            <div class="item" @click="recommendedPrize">
                <img class="icon" src="../images/prizeSet.png" alt="">
                <span>推荐有奖</span>
            </div>
            <div class="item" @click="customerService">
                <img class="icon" src="../images/service.png" alt="">
                <span>在线客服</span>
            </div>
            <div class="item" @click="personalSet">
                <img class="icon" src="../images/set_yellow.png" alt="">
                <span>设置</span>
            </div>
        </div>
        <div class="dial" v-show="isCall">
            <div>18811626366</div>
            <div>呼叫</div>
        </div>
    </section>
</template>

<script>

  export default {
    components: {
       
    },
    data() {
      return {
           value: 4, // 最高5
           isCall: false  
      }
    },
    created(){
      
    },
    mounted() {

    },
    computed:{
     
    },
    watch: {

    },
    methods: {
        //我的计划
        myPlan(e){
            alert("跳哪")
          this.$router.push({path:'/'});
        },
        //在线学习
        onlineLearn(e){
          this.$router.push({path:'/learn'});
        },
        //有奖推荐
        recommendedPrize(){
           this.$router.push({path:'/inviteFriends'});
        },
        //在线客服
        customerService(){
           this.isCall = true;
        },
        //设置
        personalSet(){
            this.$router.push({path:'/set'});
        }
    }

    
  };
</script>

<style scoped>

.top {
    width: 100%;
    height: 2.8rem;
    background: url('../images/personalInformation.png');
    background-size: 100vw;
    box-sizing: border-box;
    padding: 0.68rem 0.6rem;
    display: flex;
}
.top .top-left {
    width: 1.44rem;
    height: 1.44rem;
    border-radius: 50%;
}
.top .top-left img {
    width: 1.44rem;
}
.top .top-right {
    margin-left: 0.34rem;
}
.top .nick-name{
    font-size: 0.38rem;
    line-height: 0.38rem;
    margin-top: 0.34rem;
    margin-bottom: 0.16rem;
}
.top .nick-name .level {
    display: inline-block;
    height: 0.3rem;
    padding: 0 0.1rem;
    background: #fd8e18;
    font-size: 0.18rem;
    line-height: 0.3rem;
    border-radius: 0.05rem;

}
.top .nick-name span {
    color: #fff;
}
.content {
    padding:0.54rem 0.6rem;
    display: flex;
    flex-wrap: wrap;
}
.content .item {
    width: 1.46rem;
    margin-right: 0.94rem;
    margin-bottom: 1rem;
    text-align: center;
}
.content .item:nth-child(3n) {
    margin: 0;
}
.content .item .icon {
    width: 1rem;
}
.content .item span {
    display: block;
    font-size: .26rem;
    line-height: 0.26rem;
}
.dial {
    width: 5.3rem;
    height: 2rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: .14rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.dial div {
    height: 1rem;
    border-bottom: 0.5px solid #fff;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: .36rem;
}
.dial div:last-child {
    border: none;
    font-weight: bold;    
}
</style>

