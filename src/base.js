exports.install = function (Vue) {

    Vue.prototype.toHome = function (){
        this.$router.push("/home");
    };


    Vue.prototype.bacc = function (){
        var url = this.rollback.back();
        if (url){
            this.$router.push(url);
        }
    };

};