<template>
  <div class="add">
    <van-nav-bar title="添加一条新密码" left-arrow   @click-left="bacc()"/>
    <van-cell-group>
      <van-field v-model="title"  label="标题" placeholder="请输入标题" required />
      <van-field v-model="username"  label="账号" placeholder="请输入账号" required />
      <van-field v-model="password"  label="密码" placeholder="请输入密码" required />
      <van-field v-model="url"  label="网址" placeholder="请输入网址"  />
      <van-field v-model="hint"  label="提示" placeholder="请输入提示"  />
    </van-cell-group>
    <div class="but">
        <van-button type="primary" size="large" @click="addCode()">提交信息</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      title: "",
      url: "",
      username: "",
      password: "",
      hint: ""
    };
  },
  props: {
    msg: String
  },
  methods:{
      addCode(){
          
          this.$axios({
          method: 'post',
          url: 'api/addCode',
          data: {
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