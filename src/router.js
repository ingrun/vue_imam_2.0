import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './views/index.vue'
import login from "./components/login.vue"
import mymain from "./components/mymain.vue"
import codeDetails from "./components/codeDetails.vue"
import add from "./components/add.vue"
import upd from "./components/upd.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index',component: index},
    {path: '/login', name: 'login',component: login},
    {path: '/home',name: 'home',component: Home,children:[
      {path:"/",component:mymain},
      {path:"codeDetails", component:codeDetails},
      {path:"add", component:add},
      {path:"upd", component:upd},

    ]},
  ]
})
