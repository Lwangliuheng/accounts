<template>
  <section class="incomeDetail">
      <ul class="list">
          <li class="item" v-for="(ls,index) in list" :key='index'>
              <p class="time">{{ls.date}} {{ls.time}}</p>
              <div class="content">
                  <p>车牌号：{{ls.carNumber}}</p>
                  <p>用户姓名：{{ls.username}}</p>
                  <p>用户电话：{{ls.phone}}</p>
                  <p>查勘地点：{{ls.address}}</p>
                  <p>保险公司：{{ls.company}}</p>
                  <span>{{ls.getMoney}}元</span>
              </div>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
  data () {
      return {
          list: [
              {
                  date: "2017-02-12",
                  time: '13:22:22',
                  carNumber: '京PUG189',
                  username: '张珊',
                  phone: '18811224455',
                  address: "田安娜",
                  company: '阳光保险',
                  getMoney: '30'
              },
              {
                  date: "2017-02-12",
                  time: '13:22:22',
                  carNumber: '京PUG189',
                  username: '张珊',
                  phone: '18811224455',
                  address: "田安娜",
                  company: '阳光保险',
                  getMoney: '30'
              },
              ]
      }
  }
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

