<template>
  <div class="code">
    <van-nav-bar :title="code.title" left-arrow @click-left="bacc()" />
    <div>
      <van-cell title="标题" :value="code.title" />
      <van-cell title="网址" :value="code.url" />
      <van-cell title="用户名" :value="code.username" />
      <van-cell title="密码" :value="code.password" />
      <van-cell title="提示" :value="code.hint" />
    </div>
    <div class="but">
      <van-button type="primary" size="large" class="fz" @click="cllllll()">复制密码</van-button>
      <van-button size="large" class="xg" @click="toUpd(code.id)">修改密码信息</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "codeDetails",
  props: {
    msg: String
  },
  data() {
    return {
      id: 1,
      code: {}
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    if (this.id != undefined) {
      this.getCodeInfoByid(this.id);
    } else {
        this.$router.push("/home");
    }
  },
  methods: {
    toUpd(codeid){
        this.rollback.add("/home/codeDetails");
        this.$router.push({ path: "/home/upd", query: { id: codeid} });

    },

    cllllll() {
      this.$copyText(
        this.code.password,
      ).then(
        res => {
          this.$toast("已成功复制，可直接去粘贴");
        },
        err => {
          this.$toast("复制失败");
        }
      );
    },

    bacc() {
      var url = this.rollback.back();
      if (url) {
        this.$router.push(url);
      }
    },

    getCodeInfoByid(codeid) {
      this.axios({
        method: "get",
        url: "api/getCodeInfoByid",
        params: {
          id: codeid
        }
      })
        .then(response => {
          if (response.data.code == 1) {
            this.code = response.data.data;
          } else this.$toast(response.data.msg);
        })
        .catch(err => {
          this.$toast.fail("服务器错误！" + err);
        });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.van-cell__title {
  text-align: left;
}

.but {
  width: 90%;
  margin: auto;
  margin-top: 26%;
  .xg {
    margin-top: 15px;
  }
}
</style>