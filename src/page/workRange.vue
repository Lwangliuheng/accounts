<template>
  <div class="work-range">
      <div class="search">
          <span class="el-icon-search"></span><input type="text" v-model="address" placeholder="请输入查勘地点">
      </div>
      <div class="tip" v-show="haveTip">温馨提示：最多可设置3个接单区域，每个区域覆盖3~6公里！<span @click='haveTip = false;' class="el-icon-circle-close-outline"></span></div>
      <div class="map" id="allmap"></div>
      <div class="work-address">
          <ul class="address-list">
              <li v-for="(ls,index) in list" :key="index">
                  <h4>{{ls.address}}</h4>
                <div class="modify-ad">
                    <div class="modify-left">
                    <span v-show='ls.isModify' class="el-icon-remove-outline" @click='reduce(index)'></span>
                    <span v-show="!ls.isModify">覆盖范围</span>{{ls.range}}km
                    <span v-show='ls.isModify' class="el-icon-circle-plus-outline" @click='add(index)'></span>
                    </div>
                    <div class="modify-right">
                        <span @click='confirmRange(index)' v-show='ls.isModify' class="el-icon-circle-check-outline"></span>
                        <span @click='modifyRange(index)' v-show='!ls.isModify' class="el-icon-edit-outline"></span>
                        <span @click='deleteItem(index)' class="el-icon-delete"></span>
                    </div>
                </div>
              </li>
              <div class="gap1" v-show="canAdd"></div>
              <span @click='addList' v-show="canAdd" class="el-icon-circle-plus"></span>
          </ul>
          <el-checkbox v-model="checked">申请全区域接单</el-checkbox>
          <div class="btn" @click="nextStep">下一步</div>
      </div>
  </div>
</template>
<script>
import * as Map from '../js/map'
export default {
  components: {},
  data() {
    return {
      address: "",
      checked: false,
      haveTip: true,
      list: [
          {
              address: '北京市朝阳区百子湾1号',
              range: 5,
              isModify: false,
          },
          {
              address: '北京市朝阳区百子湾11号',
              range: 4,
              isModify: false,
          }
      ],
      canAdd: true,
    };
  },

  mounted() {
      console.log("11");
        this.$nextTick(function(){  
            console.log(2222);
            var _this = this;  
            Map.init().then( function (BMap){  
                        //在此调用api  
                var map = new BMap.Map('allmap');
                // 创建地图实例
                var point = new BMap.Point(116.404, 39.915);
                // 创建点坐标
                map.centerAndZoom(point, 12);
                

                var mySquare1 = new Map.SquareOverlay(map.getCenter(), 100, "rgba(178,236,208,.7)");    
                mySquare1.initialize(map);
                mySquare1.draw();
                map.addOverlay(mySquare1);

                // 初始化地图， 设置中心点坐标和地图级别
                var marker = new BMap.Marker(point);
                marker.setTop(true);
                map.addOverlay(marker);
            })

        })

  },
  computed: {},
  watch: {},
  methods: {

    nextStep(e) {
      this.$router.push({ path: "/operateActions" });
    },

    // 增加范围
    add (index) {
        this.list[index].range == 6 ? this.list[index].range : this.list[index].range++;
    },

    // 减小范围
    reduce (index) {
        this.list[index].range == 3 ? this.list[index].range : this.list[index].range--;
    },

    // 确认修改
    confirmRange(index) {
        this.list[index].isModify = false;
    },

    // 修改
    modifyRange(index) {
        this.list[index].isModify = true;
    },

    // 删除一条
    deleteItem(index) {
        this.canAdd = true;
        this.list.splice(index,1);
    },

    // 添加一条地址
    addList (index) {
        this.list.push({
            address: '新加地址',
            range: 3,
            isModify: false
        })
        if(this.list.length == 3) {
            this.canAdd = false;
        }
    }
  }
};
</script>

<style scoped>
work-range {
  width: 100%;
  position: relative;
}
.search {
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
  top: 0.88rem;
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
  margin: 4.44rem 0 0.32rem 0.56rem;
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
  box-shadow: 0 0 0.1rem #eee;
  position: absolute;
  background: #fff;
  top: -0.52rem;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 0.4rem;
}
.address-list li {
  padding: 0 0.3rem;
}
.address-list h4 {
  font-size: 0.3rem;
  line-height: 0.3rem;
  font-family: "SimHei";
  margin-bottom: 0.2rem;
  margin-top: 0.4rem;
}
.modify-ad {
  display: flex;
  justify-content: space-between;
}
.modify-ad span[class^="el"] {
  font-size: 0.38rem;
  line-height: 0.38rem;
  height: 0.38rem;
  color: #666;
}
.modify-ad .modify-left .el-icon-remove-outline,
.modify-ad .modify-left .el-icon-circle-plus-outline {
  color: #2fab3b;
}
.modify-ad .modify-left {
  font-size: 0.3rem;
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
</style>


