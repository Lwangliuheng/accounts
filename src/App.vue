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
    #app{
   	  font-size:12px;
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
</style>
