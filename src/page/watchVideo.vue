<template>
  <div class="watch-video" v-if="readyState">
      <img class="bg" src="../images/watchVideobg.png" alt="" srcset="">
      <div class="video">
        <video @click="pause" ref="video" id="video" controls @ended="end" x5-playsinline="" playsinline="" webkit-playsinline="">
            <source :src="videoUrl" type="video/mp4">
            您的手机暂不支持video标签，请升级系统
        </video>
        <img class="video-poster" v-show="!haveWatch" src="../images/videoPoster.png" alt="" srcset="" >
        <img class="video-btn" src="../images/videoBtn.png" v-show="!isPlaying" alt="" @click='play'>
      </div>

      <div class="btn" @click="beganSingle" :class="{active: isEnd}">开始接单<span></span></div>
  </div>
</template>

<script>
    var timer;
  export default {
    name:"learn",
    data() {
      return {
         complete:"", 
         readyState:false,//页面显示状态
         isPlaying: false,
         haveWatch: false,
         isEnd: false,
         videoUrl: ''
      }
    },
    mounted() {
      // video.addEventListener('ended', function() {
      //                 //播放完毕，退出全屏
      //       console.log(4)
      //       this.webkitExitFullScreen();
      //     }, false);
        this.videoUrl = "https://static.zhongchebaolian.com/message/survey/images/WeChat_20180301131800.mp4";
        this.getInfo();
        // alert(this.$refs.video)
        // 设置页面加载完成
        //console.log(this.$refs.video.duration);
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
         //获取基本信息
        getInfo(){
           var openid = localStorage.getItem('openid');
           var paramData = {
                openid:openid
           }
          this.$ajax.post("/public-surveyor-api-boot/weixin/public/v1/register",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                     //页面显示
                      this.readyState = true;
                    //判断是否注册过
                      this.complete =  response.data.result.complete;
                    console.log("video url",response.data.result.video);
                     //this.videoUrl = response.data.result.video;
                this.videoUrl = "https://static.zhongchebaolian.com/message/survey/images/WeChat_20180301131800.mp4";

                }
                console.log(response,33333)
            }, err => {

              console.log(err);

            })
            .catch((error) => {
              // this.$message({
              //     message: '短信验证码发送失败',
              //     type: 'error'
              //   });
            });
        },
        beganSingle(e){
            if(this.complete == 1){
               this.$message({
                 showClose: true,
                 message: '此账号已被注册！',
                 type: 'success'
               });
               return
            };
            if(this.isEnd) {    
                var openid = localStorage.getItem('openid');
                this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",{openid: openid,step: '5',complete: '1'})
                .then(res => {
                    if(res.data.rescode == 200){
                        localStorage.setItem('step',5);
                        localStorage.setItem('complete',"1");
                        console.log(localStorage.getItem('complete'));
                        this.readyState = false;
                        this.$confirm('您已注册成功！', '温馨提示', {
                                confirmButtonText: '确定',
                                showCancelButton:false,
                                customClass:"tsk",
                                type: 'warning',
                                showClose:false,
                                center: true
                        }).then(() => {
                              // 进入空白页
                             WeixinJSBridge.call('closeWindow');
                        }).catch(() => {
                             
                              // 进入空白页
                            WeixinJSBridge.call('closeWindow');
                        });

                    }else{
                        console.error(res)
                    }
                }, err => {
                    console.log(err);
                })
                // this.$router.push({path:'/'});
            }
        },

        //点击按钮播放
        play () {
            /*alert(1111111111111)*/
            this.$refs.video.play();
            this.isPlaying = true;
            this.haveWatch = true;
            
        },

        // 点击按钮暂停
        pause(){
            /*alert(66666666)*/
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


