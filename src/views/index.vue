<template>
  <div class='index'>
    <img src="../assets/imam.png" alt="">
    <van-loading />

  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      msg: String,
    },
    mounted(){
        this.isLogin()
    },
    methods:{
        isLogin(){
          this.$axios({
          method: 'get',
          url: 'api/isLogin',
          }).then( response => {
            if (response.data.code == 1){
              this.$router.push("/home")
            }else{
              this.$router.push("/login")
            }
          });
        }
    }


  };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.index{
  margin-top: 25%;
}



</style>
