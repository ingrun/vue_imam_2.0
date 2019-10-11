<template>
  <div class="myhead">
    <mylink></mylink>
  </div>
</template>

<script>
export default {
  name: "myhead",
  props: {
    title: String
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.myhead{
    height: 50px;

    .van-nav-bar__title{
        font-size: 20px;
    }
    .van-icon-arrow-left{
        font-size: 20px;
        color: rgb(144, 142, 142);
    }

}

</style>