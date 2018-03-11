import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font/alifont.css'
import mixins from './mixins'
import filters from './filters'
import appbar from '@/components/app-bar'

// 全局注册混合
Vue.mixin(mixins)
// 全局注册UI
Vue.use(ElementUI)
Vue.component('app-bar', appbar)

// 全局过滤器
Vue.filter('filterNum', filters.filterNum)
Vue.filter('filterStr', filters.filterStr)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
