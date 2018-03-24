// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as $ from 'jquery';
import '../lib/semantic-ui/semantic.css';
import '../lib/semantic-ui/components/dimmer';
import '../lib/semantic-ui/components/transition';
import '../lib/semantic-ui/components/dropdown';
import '../lib/semantic-ui/components/modal';
import '../lib/semantic-ui/components/rating';
import '../lib/semantic-ui/components/tab';
import '../lib/semantic-ui/components/popup';
import '../lib/semantic-ui/components/sticky';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
