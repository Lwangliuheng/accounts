<template>
  <div class="watch-video">
      <img class="bg" src="../images/watchVideobg.png" alt="" srcset="">
      <div class="video">
        <video @click="pause" ref="video" id="video" controls @ended="end">
            <source src="../images/video.mp4" type="video/mp4">
            您的手机暂不支持video标签，请升级系统
        </video>
        <img src="../images/videoBtn.png" v-show="!isPlaying" alt="" @click='play'>
      </div>
      <div class="btn" @click="beganSingle" :class="{active: isEnd}">开始接单<span>(2:13)</span></div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
         isPlaying: false,
         isEnd: false
      }
    },
    mounted() {
        // alert(this.$refs.video)
        console.log(this.$refs.video.duration);

    },
    computed:{
     
    },
    watch: {

    },
    methods: {
        beganSingle(e){
            if(this.isEnd) {
            var paramData = {
                openid:"wlhabc",
                step:"5",
                complete:"1"
            }
            this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
                .then(response => {

                  if(response.data.rescode == 200){
                   
                   alert("开始接单吧")
                  
                  }
                }, err => {
                  console.log(err);
                })
                .catch((error) => {
                    console.log(err);
                  // this.$message({
                  //     message: '短信验证码发送失败',
                  //     type: 'error'
                  //   });
                })
            }
        },

        //点击按钮播放
        play () {
            this.$refs.video.play();
            this.isPlaying = true;
        },

        end() {
            this.isEnd = true;
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
    background: #ccc;
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
.active {
    background: #2fab3b;
}
.btn span {
    color: #fff;
    margin-left: .25rem;
}
</style>


