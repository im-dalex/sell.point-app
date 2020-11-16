import Vue from 'vue';
import Vuex from 'vuex';

import State from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default <any> new Vuex.Store({
  modules: {
    app: {
      state: new State(),
      getters,
      mutations,
      actions,
    }
  }
});