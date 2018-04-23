<template>
  <div id="app">

  <router-view/>
  <!-- 加载弹层 -->
  <div class="lading_wrap hide">
       <div class="lading">
       	  加载中……
       </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    #app{
   	  font-size:12px;
    }
    .hide{
    	direction: none;
    }
    .lading_wrap{
    	background-color:#b6b6b6;
    	opacity: 0.5;
    	width:100%;
    	height:100vh;
    	position: fixed;
    	top:0px;
    }
    .lading{
    	font-size:20px;
    	width:2rem;
    	height:2rem;
    	margin:auto auto;
    	position:absolute;
    	left:0px;
    	top:0px;
    	right:0px;
    	bottom:0px;
    }
</style>
