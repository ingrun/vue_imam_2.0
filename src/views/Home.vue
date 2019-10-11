<template>
  <div id="home">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.login {
  width: 96%;
  margin: auto;
  margin-top: 22%;
}

.but {
  width: 84%;
  margin: auto;
  color: rgb(26, 96, 226);
  margin-top: 28px;
}

.img{
    margin-bottom: 15px;
}

.home{

  .van-nav-bar__left{
    display:none;
  }
}

.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
  /* transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0); */
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}

</style>