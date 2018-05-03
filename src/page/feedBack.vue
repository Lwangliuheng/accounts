<style scoped>
  .feed_back_wrap{
    width:100%;
    height:100vh;
    background-color:#fff; 
    padding:0.54rem 0.33rem 1.02rem 0.33rem;
  }
  .feed_textarea{
    width:100%;
    resize: none;
    height: 4rem;
    max-height: 4rem;
    border:1px solid #dddddd;
    border-radius: 10px;
    padding:0.3rem 0.3rem;
    text-indent:0.2rem;
    font-size: 15px;
  }
  .green_but_box{
     margin-top:0.7rem;
     text-align: center;
     line-height: 0.91rem;
     border: 1px solid #2fab3b;
     border-radius: 10px;
     background-color: #2fab3b;
     height:0.91rem;
     color:#fff;
     font-size: 20px;
  }
  .feed_box{
    width:100%;
    height: 4rem;
    max-height: 4rem;
    border:1px solid #dddddd;
    border-radius: 10px;
  }
</style>
<template>
   <div>
      <div  class="feed_back_wrap">
        <div class="textarea_wrap">
          <textarea class="feed_textarea" v-model="textareaValue"  placeholder="意见一经采纳，奖励20元~" >
          </textarea>
          <!-- <div class="feed_box" v-if="!textareaState">{{textareaValue}}</div> -->
        </div>
        <p class="green_but_box" v-on:click="registerButton">
           提交
        </p>
      </div>
       
   </div>
   
</template>
<script>

  export default {
    components: {
      
    },
    name:"feedBack",
    data() {
      return {
         textareaValue:""
      }
    },
    created(){
      
    },
    mounted() {

       // setTimeout(() => {
       //    this.$store.commit('setSurveyNoActive',"改变后")
       //  }, 1000)
       //  
      
    },
    computed:{
     aDouble: function () {
         return this.$store.state.surveyNo
      }
    },
    watch: {

    },
    methods: {
      registerButton(e){
         alert(this.textareaValue)
      }
    }

    
  };
</script>

