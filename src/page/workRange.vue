<template>
  <div class="work-range" v-loading="loading">
      <div class="search">
          <span class="el-icon-search"></span><input type="text" v-model="address" placeholder="请输入查勘地点">
      </div>
      <div class="tip" v-show="haveTip">温馨提示：最多可设置3个接单区域，每个区域覆盖3~6公里！<span @click='haveTip = false;' class="el-icon-circle-close-outline"></span></div>
      <div class="map" id="allmap"></div>
      <div class="work-address">
          <ul class="address-list">
              <li v-for="(ls,index) in list" :key="index">
                  <h4 v-show="!ls.isModify" class="h4">{{ls.address}}</h4>
                  <div v-show="ls.isModify" class="modify-input">
                    <input class="h4" type="text" v-model="ls.address">
                    <span class="el-icon-search" @click='lookAddressLocation(index)'></span>
                  </div>
                <div class="modify-ad">
                    <div class="modify-left">
                    <span v-show='ls.isModify' class="el-icon-remove-outline" @click='reduce(index)'></span>
                    <span v-show="!ls.isModify">覆盖范围</span>{{ls.range}}km
                    <span v-show='ls.isModify' class="el-icon-circle-plus-outline" @click='add(index)'></span>
                    </div>
                    <div class="modify-right">
                        <span @click='confirmRange(index)' v-show='ls.isModify' class="el-icon-circle-check-outline"></span>
                        <span @click='modifyRange(index)' v-show='!ls.isModify' class="el-icon-edit-outline"></span>
                        <span @click='deleteItem(index)' class="el-icon-delete" v-show="list.length !== 1"></span>
                    </div>
                </div>
              </li>
              <div class="gap1" v-show="canAdd"></div>
              <span @click='addList' v-show="canAdd" class="el-icon-circle-plus"></span>
          </ul>
          <el-checkbox v-model="checked" :disabled="list.length < 3">申请全区域接单</el-checkbox>
          <div class="btn" @click="nextStep">下一步</div>
      </div>
  </div>
</template>
<script>
// import * as Map from '../js/map'
var map;
var marker1,circle,marker2,circle2,marker0,circle0;
export default {
  components: {},
  name:"workRange",
  data() {
    return {
      address: "",
      checked: false,
      loading: true,
      haveTip: true,
      unknownAdIndex: 0, // 地址解析失败位置
      list: [
          {
              address: '',
              lng: '',
              lat: '',
              range: 3,
              cityName: '',
              cityCode: '',
              isModify: true,
          }
      ],
      canAdd: true,
      currentAddress: '',
      currentPoint: '',
      currentCity: '',
      currentCode: '',
      tempSearchContent: ''
    };
  },

  mounted() {
    //在此调用api  
    map = new BMap.Map("allmap");
    var point = new BMap.Point(116.40387397, 39.91488908);
    map.centerAndZoom(point, 13);

     var that = this;

       setTimeout(function(){
           that.drawMap();
           that.loading = false;
       },1000)
  },

  methods: {
    //画地图
    drawMap(){

        // 页面初始化 定位当前位置
        const that = this;

        // 先去后台调取一遍接口，看用户是否已经填过了
        var openid = localStorage.getItem('openid');
        this.$ajax({
            url: this.ajaxUrl+"/weixin/public/v1/register",
            method:'POST',
            data: {
                openid:openid
            }})
        .then( res => {
            console.log("后台获取到的数据",res.data.result)
                // 如果接收到的值 存有位置
            if(res.data.rescode == 200) {
                var currentAddress = this.$store.state.currentAddress;
                console.log("地址已经保存过1",currentAddress);
                if(res.data.result.areas.length) {
                    if(res.data.result.areas.length == 3) that.canAdd = false;
                    this.list = res.data.result.areas.map( item => {
                        return {
                            address: item.address,
                            lng: item.lng,
                            lat: item.lat,
                            cityName: item.cityName,
                            cityCode: item.cityCode,
                            range: item.length,
                            isModify: false, 
                        }
                    })
                    
                    this.lookAddressLocation(this.list.length-1);

                    // 获取当前位置  
                    if(currentAddress){
                        console.log(currentAddress,"地址已经保存过,并且有数据");
                        this.currentAddress = this.$store.state.currentAddress;
                        this.currentPoint = this.$store.state.currentPoint;
                        this.currentCity = this.$store.state.currentCity;
                        this.currentCode = this.$store.state.currentCode;
                        // return
                    }else {

                        var geolocation = new BMap.Geolocation();
                        geolocation.getCurrentPosition(function(r){
                            // console.log('获取当前位置信息',r);
                            // 获取当前位置信息
                            that.currentAddress = r.address.city+r.address.district+r.address.street+r.address.street_number;
                            that.currentPoint = r.point;
                            that.currentCity = r.address.city;
                            that.currentCode = r.address.city_code;

                        },{enableHighAccuracy: true})
                    }
                // 第一次创建执行以下
                }else {
                    // 如果前面获取了位置
                    if(currentAddress){
                       console.log(currentAddress,"地址已经保存过,但没有数据");
                       this.currentAddress = this.$store.state.currentAddress;
                       this.currentPoint = this.$store.state.currentPoint;
                        this.currentCity = this.$store.state.currentCity;
                        this.currentCode = this.$store.state.currentCode;

                       this.list[0].address = this.currentAddress;
                       this.list[0].lng = this.currentPoint.lng;
                       this.list[0].lat = this.currentPoint.lat;
                       this.list[0].cityName = this.currentCity;
                       this.list[0].cityCode = this.currentCode;
                       
                    //    this.theSpot(this.currentPoint,3, 0);
                        that.theSpot(this.currentPoint,3, 0);
                        var point = new BMap.Point(this.currentPoint.lng,this.currentPoint.lat);
                        map.centerAndZoom(point, 13);
                    
                    }else {

                        var geolocation = new BMap.Geolocation();
                        geolocation.getCurrentPosition(function(r){
                            console.log('获取当前位置信息',r.point);
                            // 获取当前位置信息
                            that.currentAddress = r.address.city+r.address.district+r.address.street+r.address.street_number;
                            that.currentPoint = r.point;
                            that.currentCity = r.address.city;
                            that.currentCode = r.address.city_code;
                    
                            that.list[0].address = that.currentAddress;
                            that.list[0].lng = r.point.lng;
                            that.list[0].lat = r.point.lat;
                            that.list[0].cityName = r.address.city;
                            that.list[0].cityCode = r.address.city_code;
                            if(this.getStatus() == 0){
                    
                                // 先清空所有
                                // map.clearOverlays();

                                that.theSpot(r.point,3, 0);
                                var point = new BMap.Point(r.point.lng,r.point.lat);
                                map.centerAndZoom(point, 13);
                                
                                // setTimeout(function(){
                                //     that.lookAddressLocation(0)
                                // },2000)
                            }else if(this.getStatus() == 2) {
                                that.$message.error("请输入详细的位置信息");
                            }else {
                                 that.$message.error('failed'+this.getStatus());
                            }        
                        },{enableHighAccuracy: true})
                    }
                }
            }
        })
      
    },
    // 下一步
    nextStep(e) {
        // 如果有没有确定的
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].isModify) return this.$message.error('请确认所有的接单范围！');
        }
        // 所有的都确定范围额
        let data = {};
        if(this.checked) data.all = '1';
        else data.all = '0';

        data.areas = this.list.map( item => {
            return {
                lng: item.lng,
                lat: item.lat,
                address: item.address,
                cityName: item.cityName,
                cityCode: item.cityCode,
                length: item.range
            }
        })
        data.openid = localStorage.getItem('openid');;
        data.step = 3;
        // console.log(data);
        // 调用接口
        this.$ajax.post(this.ajaxUrl+"/weixin/public/v1/register",data)
        .then(res => {
            if(res.data.rescode == 200){
                localStorage.setItem('step',3);
                this.$router.push({ path: "/operateActions"})
            }else{
                console.log(response)
            }
        }, err => {
            console.log(err);
        })
    },

    // 接单点
    theSpot (point,width,index) {
        var mk = new BMap.Marker(point);
        mk.setTop(true);
        // map.panTo(point);
        map.addOverlay(mk);

        var circle = new BMap.Circle(point,500*width,{fillColor:"#b2edd1", strokeWeight:.1, strokeOpacity:0.5}); //创建圆
        map.addOverlay(circle); 
    },

    // 增加范围
    add (index) {
        // 如果有地址
        console.log(index)
        if(this.unknownAdIndex == (index+1)){
            return;
        }
        this.list[index].range == 6 ? this.list[index].range : this.list[index].range++;
        console.log(this.list);
        // 重新渲染
        this.lookAddressLocation(index);
    },

    // 减小范围
    reduce (index) {
        if(this.unknownAdIndex == (index+1)){
            return;
        }
        this.list[index].range == 3 ? this.list[index].range : this.list[index].range--;
        // 重新渲染
        this.lookAddressLocation(index);
    },


    // 确认修改
    confirmRange(index) {

        this.renderAds().then( res => {
            this.list[index].isModify = false;

            // 重新渲染
            this.lookAddressLocation(index);
        }, err => {
            if(this.unknownAdIndex == (index+1)){
                return this.$message.error("您输入的地址没有解析到结果!");
            }
        })

    },

    // 修改
    modifyRange(index) {
        
        // 如果上面的没有确定，点击增加全部确定
        // this.list.forEach( item => {
        //     item.isModify = false
        // });
        this.list[index].isModify = true;
        this.lookAddressLocation(index);   
    },

    // 删除一条
    deleteItem(index) {
        if(this.unknownAdIndex == (index+1)){
            this.unknownAdIndex = 0;
        }
        this.canAdd = true;
        this.list.splice(index,1);
        this.checked = false;
        // 重新渲染
        this.lookAddressLocation(this.list.length-1);
    },

    // 添加一条地址
    addList () {

        // 如果上面的没有确定，点击增加全部确定
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].isModify) return this.$message.error("请先保存以上接单范围再添加")
            
        }
        this.renderAds().then( res => {

            // 增加新的位置
            this.list.push({
                address: this.currentAddress,
                lng: this.currentPoint.lng,
                lat: this.currentPoint.lat,
                cityName: this.currentCity,
                cityCode: this.currentCode,
                range: 3,
                isModify: true
            })
            
            // 重新渲染
            this.lookAddressLocation(this.list.length-1);
    
            if(this.list.length == 3) {
                this.canAdd = false;
            }
            
        }, err => {
            return this.$message.error("请确定输入地址正确并保存");
        })
    },

    // 点击搜索按钮
    lookAddressLocation (currentIndex) {
        const that = this;
        // 先清空所有
        map.clearOverlays();
        // 把当前修改项放在最后一位

        this.renderAds().then( res => {
            // console.log(this.list[0])
            let arr = Array.from(this.list);
            arr.push(arr.splice(currentIndex,1)[0]);

            arr.forEach( (item,index,array) => {
                // 渲染所有点
                let point = {
                    lng: item.lng,
                    lat: item.lat
                };
                this.theSpot(point,item.range);
                // 如果是最后一个，定为中心
                if(index == array.length-1){
                    // let center = this.list[currentIndex];
                    let centerPoint = new BMap.Point(item.lng,item.lat);
                    map.centerAndZoom(centerPoint,13);
                }
            })
        }, err => {
            if(this.unknownAdIndex == (currentIndex+1)){
                return this.$message.error("您输入的地址没有解析到结果!");
            }
        })
    },

    // promise
    renderAds () {
        const that = this;
        return new Promise( (resolve,reject) => {
            // 先渲染点
            this.list.forEach( (item,index,array) => {
                // 创建地址解析器实例    
                var myGeo = new BMap.Geocoder();
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(item.address, function(point){
                    if (point) {
                        that.unknownAdIndex = 0;
                        // 保存当前查询位置
                        item.lng = point.lng;
                        item.lat = point.lat;

                        // 保存当前城市
                        myGeo.getLocation(point, function(rs){
                            item.cityName = rs.addressComponents.city;
                            item.cityCode = '0'; // 获取不到，暂时随便传值
                            resolve();
                        })
                        
                    }else{
                        // that.$message.error("您输入的地址没有解析到结果!");
                        that.unknownAdIndex = index+1;
                        console.log('haveUnknownAd',that.unknownAdIndex);
                        reject('您输入的地址没有解析到结果');
                    }
                });
            });
        })
        
    }
  }
};
</script>

<style scoped>
work-range {
  width: 100%;
  height: 100%;
  position: relative;
}
.search {
display: none;
  padding: 0 0.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
  border-bottom: 0.5px solid #eee;
}
.search span {
  font-size: 0.3rem;
  color: #ccc;
  margin-right: 0.2rem;
}
.search input {
  height: 0.48rem;
  width: 6rem;
  margin-top: 0.2rem;
  outline: none;
}
.search input::-webkit-input-placeholder {
  color: #ccc;
}
.tip {
  width: 100%;
  padding: 0 0.2rem;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  background: #ffefc1;
  position: absolute;
  top: 0;
  z-index: 99;
}
.tip span {
  padding: 0 0.2rem;
  position: absolute;
  top: 50%;
  font-size: 0.32rem;
  line-height: 0.6rem;
  transform: translateY(-50%);
  right: 0;
}
.map {
  width: 100%;
  height: 5.12rem;
  background: #ccc;
}
.work-address {
  position: relative;
}
.work-address .el-checkbox {
  margin: 5rem 0 0.35rem 0.56rem;
  font-size: 0.28rem;
}
.work-address .btn {
  width: 6.38rem;
  height: 0.9rem;
  background: #2fab3b;
  border-radius: 0.15rem;
  color: #fff;
  font-size: 0.34rem;
  line-height: 0.9rem;
  text-align: center;
  margin: 0 auto;
}
.address-list {
  width: 6.9rem;
  border-radius: 0.15rem;
  box-shadow: 0 0 0.2rem #ccc;
  position: absolute;
  background: #fff;
  top: -0.52rem;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 0.3rem;
}
.address-list li {
  padding: 0 0.3rem;
}
.address-list h4,
.address-list input {
    width: 100%;
    min-height: .56rem;
    font-size: 0.34rem;
    line-height: 0.34rem;
    font-family: "SimHei";
    margin-bottom: 0.24rem;
    margin-top: 0.3rem;
}
.address-list input {
    width: 100%;
    padding-right: .45rem; 
    border: 1px solid #ccc;
}

.modify-input {
    position: relative;
}
.modify-input span{
    display: block;
    padding: .1rem;
    color: #666;
    font-size: .42rem;
    line-height: .42rem;
    position: absolute;
    top: 53%;
    left: calc(95% - .3rem);
    transform: translateY(-50%);
}

.modify-ad {
  display: flex;
  justify-content: space-between;
}
.modify-ad span[class^="el"] {
  font-size: 0.45rem;
  line-height: 0.45rem;
  height: 0.45rem;
  color: #666;
}
.modify-ad .modify-left .el-icon-remove-outline,
.modify-ad .modify-left .el-icon-circle-plus-outline {
  color: #2fab3b;
}
.modify-ad .modify-left {
  font-size: 0.34rem;
  line-height: 0.38rem;
  color: #666;
}
.gap1 {
  height: 0.6rem;
}
.address-list .el-icon-circle-plus {
  font-size: 0.8rem;
  color: #2fab3b;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.address-list .el-icon-delete {
    margin-left: .2rem;
}
</style>


