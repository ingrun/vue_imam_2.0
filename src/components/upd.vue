<template>
  <div class="upd">
    <van-nav-bar title="更新密码" left-arrow   @click-left="bacc()"/>
    <van-cell-group>
      <van-field v-model="title"  label="标题" placeholder="请输入标题" required />
      <van-field v-model="username"  label="账号" placeholder="请输入账号" required />
      <van-field v-model="password"  label="密码" placeholder="请输入密码" required />
      <van-field v-model="url"  label="网址" placeholder="请输入网址"  />
      <van-field v-model="hint"  label="提示" placeholder="请输入提示"  />
    </van-cell-group>
    <div class="but">
        <van-button type="primary" size="large" @click="updCode()">提交信息</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "upd",
  data() {
    return {
      title: "",
      url: "",
      username: "",
      password: "",
      hint: "",
      id: "",
    };
  },
  mounted(){
    this.id = this.$route.query.id;
    if (this.id != undefined) {
      this.getCodeinfo(this.id);
    } else {
      this.$toast("ID不正确！");
      this.$router.push("/home");
    }
  },
  methods:{

      getCodeinfo(codeid){
        
        this.$axios({
        method: 'get',
        url: 'api/getCodeInfoByid',
        params: {
          id:codeid,
        }
        }).then( response => {
          if(response.data.code == 1){
            var code = response.data.data;
            this.title = code.title;
            this.url = code.url;
            this.username = code.username;
            this.password = code.password;
            this.hint = code.hint;
          }else{
            this.$toast(response.data.msg);
          }
        }).catch( err =>{
            this.$toast("失败！" + err);
        });
      },

      updCode(){
          this.$axios({
          method: 'post',
          url: 'api/updCode',
          data: {
              id:this.id,
              title:this.title,
              url: this.url,
              username: this.username,
              password: this.password,
              hint: this.hint,
          }
          }).then( response => {
            this.$toast(response.data.msg);
          });
      }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.but {
    width: 90%;
    margin: auto;
  margin-top: 5%;
}
</style>