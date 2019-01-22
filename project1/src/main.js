// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/base'
import './assets/js/slideshow'
import './assets/css/slideshow.css'
import './assets/css/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './vuex/store'





Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(Vuex);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
