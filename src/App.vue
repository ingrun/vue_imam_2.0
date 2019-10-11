<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  methods:{
      rollback(){

      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  // .van-nav-bar{
  //   background: rgba(rgb(131, 127, 127),0.2)
  // }

  .van-nav-bar__title{
      font-size: 16px;
  }
  .van-icon-arrow-left{
      font-size: 20px;
      // color: rgb(144, 142, 142);
  }
  .van-nav-bar__right{
    font-size: 20px;
    .van-nav-bar__text{
    color: rgb(144, 142, 142);

    }

  }

}



</style>
