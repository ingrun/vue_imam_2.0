<template>
  <div class="mymain">
    <van-nav-bar title="Home" right-text="+　" @click-right="toAdd()" />
    <van-loading v-if="isNull" class="isnull" />
    <van-pull-refresh v-model="isLoading" @refresh="getUserCode()" class="mmmmm">
      <div v-for="(item,index) in code" :key="index">
        <van-swipe-cell>
          <van-cell :title="item.title" is-link @click="toCodeDetails(item.id)" />
          <template slot="right">
            <van-button square type="danger" text="删除" @click="del(item.id)" />
          </template>
        </van-swipe-cell>
        <mylink></mylink>
      </div>
    </van-pull-refresh>
  </div>
</template>


<script>
    export default {
        name: 'mymain',
        data(){
            return{
                code:[],
                isLoading: false,
            }
        },
        computed:{
            isNull(){
                return this.code.length == 0
            }
        },
        props: {
            msg: String,
        },
        mounted(){
            this.getUserCode();
        },
        methods:{

            del(codeid){
                this.$axios({
                method: 'get',
                url: 'api/delCode',
                params: {
                    id: codeid,
                }
                }).then( response => {
                    if (response.data.code == 1){
                        this.$notify({
                            message: '删除成功！',
                            duration: 1000,
                            background: '#1989fa'
                        });
                        this.getUserCode();
                    }else{
                        this.$notify(response.data.msg)
                    }

                });
            },

            getUserCode(){
                this.isLoading = true;
                this.$axios({
                method: 'get',
                url: 'api/getUserCode',
                }).then( response => {
                    this.isLoading = false;
                //    this.$toast(response.data.msg)
                    if (response.data.code == 1){
                        this.code = response.data.data;
                    }else{
                        this.$router.push("/login");
                        this.$notify("你还没有登录！")
                    }
                }).catch( err =>{
                    this.isLoading = false;
                   this.$toast.fail( err + "")

                });
            },

            toAdd(){
                this.rollback.add("/home");
                this.$router.push("home/add")
            },

            toCodeDetails(codeid){
                this.rollback.add("/home");
                this.$router.push({ path: "home/codeDetails", query: { id: codeid} });
            },
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.van-cell__title {
  text-align: left;
}
.mymain {
  margin-bottom: 35%;
}

.isnull {
  margin-top: 15%;
}
</style>