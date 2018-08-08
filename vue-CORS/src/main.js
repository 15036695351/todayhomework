// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

//使用axios 之前需要先下载axios==》npm install axios --save

// Vue.prototype.$axios = axios既是：给Vue原类添加了一个$axios属性,该属性可以通过axios调用。即：Vue.use(axios)==Vue.prototype.$axios = axios
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
