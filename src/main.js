// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify';
import VModal from 'vue-js-modal'

import axios from 'axios';

Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  template: '<App/>'
})
