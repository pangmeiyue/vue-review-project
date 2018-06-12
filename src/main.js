// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import axios from 'axios'

import Cookies from 'js-cookie';
import {
  getToken
} from './utils/token';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  debugger
  if (!getToken()) {
    next('/');
  }else{
    next()
  }
});
