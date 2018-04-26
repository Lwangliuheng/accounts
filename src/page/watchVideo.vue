<template>
  <div class="watch-video">
      <img class="bg" src="../images/watchVideobg.png" alt="" srcset="">
      <div class="video">
        <video @click="pause" ref="video" id="video" controls @ended="end" poster="../images/videoPoster.png">
            <source src="../images/video.mp4" type="video/mp4">
            您的手机暂不支持video标签，请升级系统
        </video>
        <img class="video-poster" v-show="!haveWatch" src="../images/videoPoster.png" alt="" srcset="">
        <img class="video-btn" src="../images/videoBtn.png" v-show="!isPlaying" alt="" @click='play'>
      </div>
      <div class="btn" @click="beganSingle" :class="{active: isEnd}">开始接单<span>({{minute}}:{{second}})</span></div>
  </div>
</template>

<script>
    var timer;
  export default {
    data() {
      return {
         isPlaying: false,
         haveWatch: false,
         isEnd: false,
         videoUrl: '',
         minute: 2,
         second: 13
      }
    },
    mounted() {
        // alert(this.$refs.video)
        // 设置页面加载完成
        console.log(this.$refs.video.duration);
        // 调用接口
        // this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",{openid: '1234',step: '4'})
        // .then(res => {
        //     if(res.data.rescode == 200){
        //         console.log("video url",res.data.result.video);
        //         this.videoUrl = res.data.result.video;
        //     }else{
        //         console.error(res)
        //     }
        // }, err => {
        //     console.log(err);
        // })
    },
    computed:{
     
    },
    watch: {

    },
    methods: {
        beganSingle(e){
            if(this.isEnd) {
                this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",{openid: '1234',step: '4',complete: '1'})
                .then(res => {
                    if(res.data.rescode == 200){
                        console.log("video url",res.data.result.video);
                        this.videoUrl = res.data.result.video;
                    }else{
                        console.error(res)
                    }
                }, err => {
                    console.log(err);
                })
                this.$router.push({path:'/'});
            }
        },

        //点击按钮播放
        play () {
            this.$refs.video.play();
            this.isPlaying = true;
            this.haveWatch = true;
            
        },

        // 点击按钮暂停
        pause(){
            if(this.isPlaying) {
                this.$refs.video.pause();
                this.isPlaying = false;
            }
        },

        // 当结束时
        end() {
            this.isEnd = true;
        },
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
.video video,
.video .video-poster {
    width: 6.9rem;
    height: 4rem;
    /* background: #ccc; */
    border-radius: .28rem;
}
.video .video-btn {
    width: .7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
}
.video .video-poster {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
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
.active {
    background: #2fab3b;
}
.btn span {
    color: #fff;
    margin-left: .25rem;
}
</style>


