<template>
  <div class="login">
    <van-image class="img"
      round
      fit="cover"
      width="5rem"
      height="5rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-cell-group>
      <van-field label="用户名:" v-model="username" autosize placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field label="密　码:" v-model="password" type="password" autosize placeholder="请输入密码" />
    </van-cell-group>
    <div class="jz">
        <van-checkbox v-model="rememberme" checked-color="#07c160">记住登录</van-checkbox>
    </div>
    <div class="but">
      <van-button size="large" color="rgb(26, 96, 226)" @click="login()">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      rememberme: false,
    };
  },
  props: {
    msg: String
  },
  methods: {
    login() {
      this.$axios({
        method: "post",
        url: "api/login",
        data: {
          username: this.username,
          password: this.password,
          rememberme: this.rememberme
        }
      }).then(response => {
        // this.$toast(response.data.msg);
        if (response.data.code == 1) {
          this.toHome();
        }else{
          this.$toast(response.data.msg);
        }
      });
    }
  }
};
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

.jz{
  width: 80%;
  margin: auto;
  margin-top: 10px;
  font-size: 12px;

}
</style>