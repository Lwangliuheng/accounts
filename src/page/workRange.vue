<template>
  <div class="work-range">
      <div class="search">
          <span class="el-icon-search"></span><input type="text" v-model="address" placeholder="请输入查勘地点">
      </div>
      <div class="tip">温馨提示：最多可设置3个接单区域，每个区域覆盖3~6公里！<span class="el-icon-circle-close-outline"></span></div>
      <div class="map">
          
      </div>
      <div class="work-address">
          <ul class="address-list">
              <li>
                  <h4>北京市朝阳区百子湾11号</h4>
                  <div>
                      <div class="modify-ad">
                          <div class="modify-left">
                            <span class="el-icon-remove-outline"></span>
                            3km
                            <span class="el-icon-circle-plus-outline"></span>
                          </div>
                          <div class="modify-right">
                              <span class="el-icon-circle-check-outline"></span>
                              <span class="el-icon-edit-outline"></span>
                              <span class="el-icon-delete"></span>
                          </div>
                      </div>
                      <div class="show-ad"></div>
                  </div>
              </li>
              <li>
                  <h4>北京市朝阳区百子湾11号</h4>
                  <div>
                      <div class="modify-ad">
                          <div class="modify-left">覆盖范围3km</div>
                          <div class="modify-right">
                              <span class="el-icon-circle-check-outline"></span>
                              <span class="el-icon-edit-outline"></span>
                              <span class="el-icon-delete"></span>
                          </div>
                      </div>
                      <div class="show-ad"></div>
                  </div>
              </li>
              <div class="gap1"></div>
              <span class="el-icon-circle-plus"></span>
          </ul>
          <el-checkbox v-model="checked">申请全区域接单</el-checkbox>
          <div class="btn">下一步</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          address: '',
          checked: false,

      }
  }
}
</script>

<style scoped>
work-range {
    width: 100%;
    position: relative;
}
.search {
    padding: 0 .3rem;
    height: .88rem;
    line-height: .88rem;
    border-bottom: 0.5px solid #eee;
}
.search span {
    font-size: .3rem;
    color: #ccc; 
    margin-right: .2rem;
}
.search input {
    height: .48rem;
    width: 6rem;
    margin-top: .2rem;
    outline: none;
}
.search input::-webkit-input-placeholder {
    color: #ccc;
}
.tip {
    width: 100%;
    padding: 0 .2rem;
    height: .6rem;
    font-size: .24rem;
    line-height: .6rem;
    background: #ffefc1;
    position: absolute;
    top: .88rem;
}
.tip span {
    padding: 0 .2rem;
    position: absolute;
    top: 50%;
    font-size: .32rem;
    line-height: .6rem;    
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
.work-address .el-checkbox{
    margin: 4.44rem 0 .32rem .56rem;
    font-size: .28rem;
}
.work-address .btn {
    width: 6.38rem;
    height: .9rem;
    background: #2fab3b;
    border-radius: .15rem;
    color: #fff;
    font-size: .34rem;
    line-height: .9rem;
    text-align: center;
    margin: 0 auto;
}
.address-list {
    width: 6.9rem;
    border-radius: .15rem;
    box-shadow: 0 0 .1rem #eee;
    position: absolute;
    background: #fff;
    top: -.52rem;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: .4rem;
}
.address-list li {
    padding: 0 .3rem;
}
.address-list h4 {
    font-size: .3rem;
    line-height: .3rem;
    font-family: 'SimHei';
    margin-bottom: .2rem;
    margin-top: .4rem;
}
.modify-ad {
    display: flex;
    justify-content: space-between;
}
.modify-ad span[class^='el'] {
    font-size: .38rem;
    line-height: .38rem;
    color: #666;
}
.modify-ad .modify-left .el-icon-remove-outline,
.modify-ad .modify-left .el-icon-circle-plus-outline{
    color: #2fab3b;
}
.modify-ad .modify-left {
    font-size: .28rem;
    line-height: .38rem;
    color: #666;
}
.gap1 {
    height: .6rem;
}
.address-list .el-icon-circle-plus {
    font-size: .8rem;
    color: #2fab3b;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
}
</style>


