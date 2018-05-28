<template>
  <div id="app">

  <router-view v-if="readyState"/>
  </div>
</template>

<script>
import intercept from "./js/intercept.js"
export default {
	  name: 'app',
	  data() {
	      return {
	          readyState:false
	      }
	   },
	 created(){
	      //alert("app")
	    },
	 mounted() {
	 	//获取路径进行拦截
	 	var currentPathOne =  window.location.href.split("#")[1];
    var currentPathTwo =  window.location.href.split("#")[1].split("?")[0];
    console.log(currentPathOne);
	 	var openid = localStorage.getItem('openid'); 
    // 优化
        // if(localStorage.getItem('openid') == "undefined" || localStorage.getItem('openid') == null || !localStorage.getItem('openid')){

        //     this.readyState = true;
        //     return
        // }else{
          
        //        if(currentPathOne !=　"/redPacket"  && currentPathOne !=　"/code" && currentPathOne !=　"/caseDetail"){
        //              if( currentPathTwo != "/caseList"){
        //                this.getInfo();
        //                return
        //              }
        //        };
        //     this.readyState = true;
        // };
       this.readyState = true;
	  },
	methods: {
      //获取基本信息
       getInfo(){
          var openid = localStorage.getItem('openid');
          console.log("register",openid)
          var paramData = {
               openid:openid
          }
          ///public-surveyor-api-boot
         this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",paramData)
           .then(response => {
               if(response.data.rescode == 200){
                 this.complete =  response.data.result.complete;
                  var that = this;
                  if(this.complete == 1){
                    setTimeout(()=>{
                         //解决进入空白问题
                         that.$confirm('此账号已存在，无需重复注册！', '温馨提示', {
                                       confirmButtonText: '确定',
                                       showCancelButton:false,
                                       customClass:"tsk",
                                       type: 'warning',
                                       showClose:false,
                                       center: true
                               }).then(() => {
                                     // 进入空白页
                                      localStorage.setItem('openid',"");
                                      WeixinJSBridge.call('closeWindow');
                               }).catch(() => {
                                     // 进入空白页
                                   WeixinJSBridge.call('closeWindow');
                               });
                             return
                          //页面显示
                         // that.readyState = true;
                    },1000);
                  }else{
                      //页面显示
                     this.readyState = true;
                     intercept.interceptPage(response.data.result.step,this.$router);
                     
                  };
                  
               };
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
	}
}
</script>

<style>
   /* .el-checkbox{
    	margin:0.05rem 0.20rem 0px 0 !important;
    }*/
   /* .el-checkbox__inner{
    	width:0.3rem !important;
    	height:0.3rem !important;
    }*/
    .career_wrap{
    	 min-width: 100px !important;
    	/*position:fixed !important;
    	top:0rem !important;
        left: 4.0rem !important;*/
    }
    .el-input--suffix .el-input__inner{
    	padding-right:0.6rem;
         border:none;
    }
    .el-input__inner{
    	text-align: right;
    }
    .el-select{
    	margin-right: 0px;
    	margin-left: 0px; 
    }
	.tsk{
	    width:80% !important;
	  }
    #app{
   	  font-size:12px;
			height: 100%;
			overflow: auto;
    }
    iframe{
    display:none;
    }
    .hide{
    	direction: none;
    }
    .lading_wrap{
    	background:rgba(0,0,0,.5);
    	width:100%;
    	height:100vh;
    	position: fixed;
    	top:0px;
    }
   .left{
    float:left;
    }
	.el-checkbox__inner {
			width: .4rem;
			height: .4rem;
	}
	.el-checkbox__input.is-checked .el-checkbox__inner {
		background: #fff;
		border-color: #dcdfe6;
	}
	.el-checkbox__input.is-focus .el-checkbox__inner {
		background: #fff;
		border-color: #dcdfe6;
	}
	.el-checkbox__inner::after {
		border-color: #ff4d01;
		width: 5px;
		height: 10px;
		top: 2px;
		left: 6px;
	}
	.el-checkbox__inner:hover {
		border-color: #dcdfe6;		
	}
  .right{
    float:right;
  }
	.el-message__icon{
		font-size: 20px;
	}
	.el-message {
		padding: 10px;
	}
</style>
