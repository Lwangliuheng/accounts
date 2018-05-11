<template>
  <div id="app">

  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
