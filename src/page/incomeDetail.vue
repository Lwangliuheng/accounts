<template>
  <section class="incomeDetail">
      <ul class="list">
          <li class="item">
              <p class="time">2017-02-12 13:11:12</p>
              <div class="content">
                  <p>车牌号：京PUG189</p>
                  <p>用户姓名：张珊</p>
                  <p>用户电话：198223211111</p>
                  <p>查勘地点：北京市朝阳区广渠路</p>
                  <p>保险公司：阳光保险集团</p>
                  <span>30元</span>
              </div>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.incomeDetail .list{
    padding: 0 .3rem;
}
.list .item .time{
    height: .36rem;
    width: 2.6rem;
    border-radius: .18rem;
    background: #ccc;
    text-align: center;
    font-size: .2rem;
    line-height: .36rem;
    color: #fff;
    margin: .4rem auto .22rem;
}
.list .item .content {
    position: relative;
    padding: .2rem;
    border-radius: .25rem;
    box-shadow: 0 0 .2rem #ccc;
}
.list .item .content p{
    font-size: .24rem;
    line-height: .48rem;
}
.list .item .content span {
    /* display: block; */
    height: .4rem;
    font-size: .24rem;
    line-height: .4rem;
    padding: 0 .2rem;
    background: #ffa22b;
    color: #fff;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
    position: absolute;
    top: .3rem;
    right: 0;
}
</style>

