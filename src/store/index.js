import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import backend from './backend';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    backend,
  },
});
