import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import base from './base'
import mylink from '@/components/mylink';
import './plugins/vant.js'
import rollback from './plugins/rollback.js'
import VueClipboard from 'vue-clipboard2'

//  拷贝复制插件
Vue.use(VueClipboard)

Vue.prototype.rollback = new rollback()

Vue.config.productionTip = false
Vue.use(base)
Vue.use(mylink)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
