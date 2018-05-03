<style scoped>
 
</style>
<template>
  <div>
    我是code:{{code}}
    我是openid:{{openid}}
  </div>
</template>
<script>
import axios from "axios";
import jsonp from "jsonp";
  export default {
    components: {
      // personalInfo
    },
    name:"Code",
    data() {
      return {
        code:"",
        openId:""
        
      }
    },
    created(){

    },
    mounted() {
      var code = this.$route.query.code;
      var code = window.location.href.split("?")[1].split("&")[0].split("=")[1];
      console.log(code,"我是code")
      // console.log(window.location.href,"78987987987897")
      // var str = window.location.href;
      // var arr = str.split("?");
      // var arr1 = arr[1].split("&")[0].split("=")[1];
      this.code = code;
      this.$store.commit('setcodeActive',code);
      const url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx2ee0af7fbdfe267e&secret=db81e0704e0011f7a64074e456f8ccfd&code='+code+'&grant_type=authorization_code';
       // const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${secret}&code=${code}&grant_type=authorization_code`

  // axios
  //   .get(url)
  //   .then(function({ data }) {
  //     console.log('WXBaseAuthorize', data)
  //     const { openid, access_token } = data
  //     // res.redirect(`/wx-base-authorize-callback?openid=${openid}`)
  //   })
  //   .catch(err => {
  //     console.error('WXBaseAuthorize', err)
  //     throw err
  //   })
        $.ajax({ 
            url: url, 
            type: 'POST', 
            data:"",
            dataType:'JSONP', 
            crossDomain: true, 
            success: function (res) { 
              this.openId = res.openid;
              console.log(res,"openID信息！！！！！")
              console.log(res.openid)
            } ,
            error:function(res){
               this.openId = res.openid;
              console.log(res,"openID信息！！！！！")
              console.log(res.openid)
            }
        }) 
    },
    computed:{
    
    },
    watch: {
   
    },
    methods: {
      
    }

    
  };
</script>

