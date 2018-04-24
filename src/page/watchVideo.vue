<template>
  <div class="watch-video">
      <img class="bg" src="../images/watchVideobg.png" alt="" srcset="">
      <div class="video">
        <video @click="pause" src="../images/video.mp4" ref="video"></video>
        <img src="../images/videoBtn.png" v-show="!isPlaying" alt="" @click='play'>
      </div>
      <div class="btn" @click="beganSingle">开始接单<span>(2:13)</span></div>
  </div>
</template>

<script>

  export default {
    components: {
       
    },
    data() {
      return {
         isPlaying: false,
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
        beganSingle(e){
          this.$router.push({path:'/'});
        },

        //点击按钮播放
        play () {
            this.$refs.video.play();
            this.isPlaying = true;
        },

        // 点击按钮暂停
        pause(){
            if(this.isPlaying) {
                this.$refs.video.pause();
                this.isPlaying = false;
            }
        }
    }

    
  };
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
    position: absolute;
    top: 3.43rem;
    left: 50%;
    transform: translateX(-50%);
}
.video video {
    width: 6.9rem;
    height: 4rem;
    border-radius: .28rem;
}
.video img {
    width: .7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
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


