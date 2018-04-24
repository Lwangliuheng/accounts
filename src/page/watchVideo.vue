<template>
  <div class="watch-video">
      <img class="bg" src="../images/watchVideobg.png" alt="" srcset="">
      <video class="video" src=""></video>
      <div class="btn">开始接单<span>(2:13)</span></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.watch-video {
    width: 100%;
    height: 100%;
    position: relative;
}
.bg {
    width: 100%;
}
.video {
    width: 6.9rem;
    height: 4rem;
    background: chartreuse;
    border-radius: .28rem;
    position: absolute;
    top: 3.43rem;
    left: 50%;
    transform: translateX(-50%);
}
.btn {
    width: 6.38rem;
    height: .9rem;
    font-size: .34rem;
    margin: 3.96rem auto 0;
    background: #cacaca;
    border-radius: .15rem;
    line-height: .9rem;
    text-align: center;
    color: #fff;
}
.btn span {
    color: #fff;
    margin-left: .25rem;
}
</style>


