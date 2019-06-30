import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem } from 'vant'
import axios from 'axios'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
