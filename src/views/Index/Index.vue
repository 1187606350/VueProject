<template>
  <div class="page-index">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/category">选购</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/discovery">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/store">门店</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/login">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      active: 0
    }
  },
  methods: {
  },
  created () {
    this.$axios.post('https://api.thebeastshop.com/app/index/getNewIndex', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
</script>

<style>

</style>
