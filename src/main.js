// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import router from './router';
import store from './store';
import App from './App';
import layoutMixin from './mixins/layout';
import Widget from './components/Widget/Widget';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Datepicker from 'vuejs-datepicker';

Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.component('Widget', Widget);
Vue.component('Datepicker', Datepicker);
Vue.mixin(layoutMixin);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
