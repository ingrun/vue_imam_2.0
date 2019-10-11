import mylinkcomponent from "./mylink.vue"

const mylink = {
    install:function(Vue) {
        Vue.component('mylink', mylinkcomponent)
    }
}

export default mylink;