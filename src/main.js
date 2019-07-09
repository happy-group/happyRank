import Vue from './common/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './common/axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
