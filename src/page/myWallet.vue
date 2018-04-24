<template>
  <section class="myWallet">
      <header>
          <div class="btn1">本日</div>
          <div class="btn2">本周</div>
          <div class="money">
              <span>588.00</span>
              <p>本月收入(元)</p>
          </div>
          <ul class="spot">
              <li :class="{active:current == 1}"></li>
              <li :class="{active:current == 2}"></li>
              <li :class="{active:current == 3}"></li>
          </ul>
      </header>
        <div class="all-info">
            <div>
                <span>420.00</span>
                <p>订单</p>
            </div>
            <div>
                <span>120.00</span>
                <p>提成</p>
            </div>
            <div>
                <span>42.00</span>
                <p>推广</p>
            </div>
        </div>
        <div class="all-get" @click="detailsClick">
            <div class="all-get-money">总收入<span>1080.00</span>元</div>
            <div class="all-get-detail">详情<span class="el-icon-arrow-right"></span></div>
        </div>
        <div class="gap"></div>
        <div class="welfare">
            <div class="welfare-title">福利<span>(程序员努力开发中...)</span></div>
            <ul class="welfare-list">
                <li>
                    <img src="../images/IntegralExchangeProduct.png" alt="">
                    <p>积分</p>
                    <span>0积分</span>
                </li>
                <li>
                    <img src="../images/prizeSet.png" alt="">
                    <p>推荐有奖</p>
                    <span>现金豪礼</span>
                </li>
                <li>
                    <img src="../images/activity.png" alt="">
                    <p>奖励活动</p>
                    <span>参与赚更多</span>
                </li>
            </ul>
        </div>
  </section>
</template>
<script>

  export default {
    components: {
      
    },
    data() {
      return {
        current: 1
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
        //详情
        detailsClick(e){
             this.$router.push({path:'/incomeDetail'});
        }
    }

    
  };
</script>

<style scoped>
header {
    width: 100%;
    height: 3.12rem;
    background: #01c66c;
    position: relative;
}
div[class^='btn'] {
    width: .8rem;
    height: .44rem;
    box-sizing: border-box;
    border: 0.5px solid #fff;
    border-radius: .07rem;
    position: absolute;
    top: 1.44rem;
    color: #fff;
    line-height: .44rem;
    text-align: center;
    z-index: 99;
}
div[class^='btn']:first-child {
    left: .45rem;
}
div[class^='btn']:nth-child(2) {
    right: .45rem;
}
.money{
    width: 100%;
    text-align: center;
    padding-top: 1rem;
}
.money span {
    font-size: .56rem;
    line-height: .56rem;
    font-weight: bold;
    color: #fff;
}
.money p {
    font-size: .26rem;
    line-height: .26rem;
    margin-top: .24rem;
    color: #fff;
}
header .spot {
    width: .5rem;
    position: absolute;
    bottom: .3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;

}
header .spot li {
    width: .1rem;
    height: .1rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, .5);
}
header .spot .active {
    background: #fff;
}
.all-info {
    width: 100%;
    height: 1.3rem;
    background: #01b262;
    display: flex;
}
.all-info div {
    width: calc( 100% / 3);
    text-align: center;
    box-sizing: border-box;
}
.all-info div span {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: .28rem;
    line-height: .28rem;
    margin: .3rem 0 .24rem;
}
.all-info div p {
    font-size: .24rem;
    line-height: .24rem;
    color: #fff;
}
.all-get {
    height: 1.18rem;
    padding: 0 .3rem;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.all-get div {
    height: 1.18rem;
    font-size: .3rem;
    line-height: 1.18rem;
}
.all-get span {
    font-weight: bold;
    margin-left: .24rem;
}
.all-get-detail {
    color: #666;
}
.gap {
    width: 100%;
    height: .2rem;
    background: #f0eff5;
}
.welfare-title {
    height: .8rem;
    padding: 0 .3rem;
    font-size: .3rem;
    line-height: .8rem;
    border-bottom: 0.5px solid #efeff1;
}
.welfare-title span {
    color: #999;
    font-size: .24rem;
    margin-left: .18rem;
}
.welfare-list {
    padding: 0 .3rem;
    display: flex;
    flex-wrap: wrap;
}
.welfare-list li {
    width: 33.3%;
    text-align: center;
}
.welfare-list li img {
    height: .7rem;
    margin: .4rem 0 .3rem;
}
.welfare-list li p {
    font-weight: bold;
    font-size: .28rem;
    line-height: .28rem;
    margin-bottom: .2rem;
}
.welfare-list li span {
    font-size: .2rem;
    line-height: .2rem;
    color: #999;
}
</style>


