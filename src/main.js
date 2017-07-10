// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/sass/_variables.sass'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted(){
    window.onscroll = (evt) => {
      store.commit('set_scrollTop', window.scrollY);
      if (window.update_scroll) { window.update_scroll(window.scrollY); }
        // window.update_scroll()
        // alert("update scroll")
    };
  }
})
