<template>
  <section class="operate-actions">
      <div class="title"><img src="../images//registerSuccess.png" alt="">恭喜您，注册成功！</div>
      <div class="have-actions" v-if="haveActions">
        <div class="tips"><span>100元返现券</span>已发放到您的账户内，完成首单即可提现！</div>
        <div class="ticket"><span>￥100</span></div>
      </div>
      <div class="no-actions" v-else>
          <img src="../images//noActions.png" alt="" srcset="">
      </div>
    <div class="learn-tip">
        <span>完成在线学习后即可接单</span><br>
        <span>距离月入万元还差最后一步</span>
    </div>
    <div class="btn" @click='toLearn'>开始学习</div>
    <img class="bg" src="../images/registerSuccessbg.png" alt="">
  </section>
</template>

<script>
export default {
  data () {
      return {
          haveActions: false
      }
  },

  methods: {
      toLearn () {
          this.$router.push('/watchVideo');
      }
  }
}
</script>

<style scoped>
.operate-actions {
    height: 100%;
    padding-top: 1.1rem;
    position: relative;
}
.title {
    height: .56rem;
    font-size: .38rem;
    line-height: .56rem;
    display: flex;
    align-content: center;
    justify-content: center;
}
.title img {
    width: .56rem;
    height: .56rem;
    margin-right: .32rem;
}
.tips {
    width: 4.4rem;
    margin: 0 auto;
    font-size: .28rem;
    line-height: .4rem;
    margin-top: .12rem;
}
.tips span {
    color: #fa1d48;
}
.ticket {
    position: relative;
    height: 2.35rem;
    width: 6.3rem;
    margin: .48rem auto 0;
    text-align: center;
    background: url('../images/ticketbg.png');
    background-size: 100%;
}
.ticket span {
    line-height: .82rem;
    font-size:.82rem;
    color: #ff5d12;
    position: absolute;
    top: .68rem;
    right: 1.7rem;
}
.no-actions  {
    text-align: center;
}
.no-actions img {
    width: 6.47rem;
}
.learn-tip {
    width: 100%;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 4.27rem;
    font-weight: bold;
}
.learn-tip::before,
.learn-tip::after {
    content: '';
    display: block;
    width: 1.07rem;
    border-top: 1px solid #666;
    position: absolute;
    top: .4rem;
}
.learn-tip::before {
    left: .67rem;
}
.learn-tip::after {
    right: .67rem;
}
.btn {
    width: 6.38rem;
    height: .9rem;
    border-radius: .15rem;
    background: #2fab3b;
    text-align: center;
    line-height: .9rem;
    color: #fff;
    font-size: .34rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2.96rem;
}
.bg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>


