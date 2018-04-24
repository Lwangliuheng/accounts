<template>
  <div class="invite-friends">
    <div class="rule">活动规则></div>
    <div class="btn1">二维码邀请</div>
    <div class="btn2">立即邀请好友</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.invite-friends {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("../images/inviteFriendbg.png");
    background-size: 100% 100%;
}
.rule {
    font-size: .28rem;
    line-height: .28rem;
    text-decoration: underline;
    color: #eaf503;
    position: absolute;
    bottom: 2.82rem;
    left: 50%;
    transform: translateX(-50%);
}
.invite-friends div[class^='btn'] {
    width: 2.98rem;
    height: .9rem;
    border-radius: .15rem;
    font-size: .34rem;
    line-height: .9rem;
    text-align: center;
    position: absolute; 
    bottom: 1.58rem;
}
.btn1 {
    color: #ff8e30;
    background: #fff;
    left: .3rem;
}
.btn2 {
    color: #fff;
    background: #ff8e30;
    right: .3rem;
}
</style>

