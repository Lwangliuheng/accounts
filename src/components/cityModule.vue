<style scoped>

  .city_wrap{
    width:100%;
    height:100vh;
   }
   .city_to_wrap{
     background-color:#f0eff5;
     padding-top:0.3rem;
   }
   .city_top{
     height:1.6rem;
     padding:0.3rem 0px 0.3rem 0.33rem;
     background-color:#fff; 
   }
   .city_top_a{
    overflow: hidden;
   }
   .city_top_b{
    font-size: 13px;
    color:#383838;
   }
   .city_top span{
    display:inline-block;
    line-height: 32px;
   }
   .location_map{
    width:30px;
    height:32px;
   /* border:1px solid red;*/
    margin-right:0.4rem;
   }
   .left{
    float:left;
  }
  .right{
    float:right;
  }
  .city_top_wrod{
    font-size: 16px;
    color:#2bab34;
  }
  .city_name{
    font-size: 16px;
  }
  /*.city_list_warp{
   height:4rem;
   overflow: scroll;
  }*/
  .city_list_warp{
    height:80vh;
    overflow: scroll;
  }
  .city_content_top{
     padding-left:0.3rem;
     height:0.8rem;
     line-height: 0.8rem;
     font-size: 15px;
     background-color:#f0eff5; 
     color:#999997;
  }
  .province{
    font-weight:bold;
    height:0.92rem;
    background-color:#fff; 
    font-size: 16px;
    color:#333333;
    line-height: 0.92rem;
    padding-left:0.3rem;
    border-bottom:1px solid #dddddd;
  }
  .city li{
    height:0.92rem;
    background-color:#fff; 
    font-size: 16px;
    color:#666666;
    line-height: 0.92rem;
    padding-left:0.7rem;
    border-bottom:1px solid #dddddd;
  }
  
</style>
<template>
    <div class="city_wrap">
     <div class="city_to_wrap">
        <div class="city_top">
            <div class="city_top_a">
                 <p class="left">
                  <img src="../images/dwan.png" class="location_map">
                </p>
                <p class="left">
                    <span class="city_top_wrod">定位城市：</span>
                    <span class="city_name" v-if="cityNameState">{{cityName}}</span>
                </p>
            </div>
              
            <div class="city_top_b" v-if="!cityNameState">获取信息失败，请手动选择您的当前城市</div>
        </div>
     </div>
      
      <div class="city_content">
         <p class="city_content_top">
            选您的当前城市
         </p>
         <div class="city_list_warp">
            <!-- <div class="city_list" v-for="(item, index) in cityData">
              <p class="province">{{item.name}}</p>
              <ul class="city" >
                  <li v-for="(sitem, sindex) in item.city" @click="addCity($event,index,sindex)">
                     {{sitem.name}}
                  </li>
              </ul>
            </div> -->
            <div class="city_list" v-for="(item, index) in cityDataOne">
              <p class="province" @click="addTown($event,item.code)">{{item.name}}</p>
              <ul class="city">
                  <li v-for="(sitem, sindex) in item.city" @click="addCity($event,index,sindex,sitem.code)">
                     {{sitem.name}}
                  </li>
              </ul>
            </div>
         </div>
      </div>
     <!--  <div id="allmap"></div> -->
    </div>
</template>
<script>
  import Bus from '../../accident/static/js/bus.js'
  // import cityData from '../../accident/static/js/cityData.js'
  import cityDataOne from '../js/cityDate.js'
  export default {

    data() {
      return {
         cityDataOne:[],
         // cityData:[],//城市列表
         lat:"",//纬度
         lng:"",//经度
         cityCode:"",
         cityName:"",
         cityNameState:false //是否有值
      }
    },
    created(){
      
    },
    mounted() {
       // this.cityData = cityData;
       //城市数据转变格式
       this.cityDataOne = this.remouldCityData(false,0,[]);
       var that = this;
       setTimeout(function(){
           that.placeKick();
       },1000)
       // this.$nextTick(function(){
       //    this.placeKick();
       // })
     
    },
    computed:{
     
    },
    watch: {

    },
    methods: {
      //城市列表数据改造
      remouldCityData(state,cityCode,arr2){
         var arr = cityDataOne;
         var arrLength = arr.length;
         for(var i = 0;i < arrLength;i++){
             arr[i].city = [];
             if(arr[i].code == cityCode && state){
                arr[i].city = arr2;
             }
         };
         return arr;
      },
      //定位
      placeKick(){
        //地图定位方法
        // console.log(cityData)
        const that = this;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
                console.log(r);
                var data = {
                  currentAddress:r.address.city+r.address.district+r.address.street+r.address.street_number,
                  currentPoint:r.point
                };
                that.$store.commit('setThreeActive',data)
                that.cityName = r.address.city;
                that.cityNameState = true;
          }
          else {
            alert('failed'+this.getStatus());
          }        
        },{enableHighAccuracy: true})

      },
      //获取经纬度
      getLogLat(value){
        const that = this;
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint(value, function(point){
          if (point) {
            console.log(point,"获取经纬度")
            that.lng = point.lng;
            that.lat = point.lat;
            Bus.$emit('addSelectCity',{
                                 code:that.cityCode,
                                 value:that.cityName,
                                 lat:that.lat,
                                 lng:that.lng
                                }
              );
          }else{
            alert("您选择地址没有解析到结果!");
          }
        });
      },
      //城市的选择
      addTown(e,code){
         console.log(code,"城市code")
         var paramData = {cityCode:code}
         this.$ajax.post(this.ajaxUrl+"/public/city/v1/getCitys",paramData)
            .then(response => {

              if(response.status == 200){

                console.log(response.data,"城市返回数据");
                this.remouldCityData(true,code,response.data.citys);

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              // this.$message({
              //     message: '短信验证码发送失败',
              //     type: 'error'
              //   });
            })
      },
      //城市的选择
      addCity(e,index,sindex,code){
        var value = cityDataOne[index].city[sindex].name
        this.cityName = value;
        this.cityCode = code;
        this.cityNameState = true;
        var cvalue = cityDataOne[index].name + cityDataOne[index].city[sindex].name
        console.log("详细地址名",cvalue)
        this.getLogLat(cvalue)
      } 
      
    }

    
  };
</script>

