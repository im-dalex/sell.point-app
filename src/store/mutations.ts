import { MutationTree } from 'vuex';

import {
  LOADING,
} from '@/store/mutation-types';

import State from '@/store/state';

const mutations: MutationTree<State> = {
  [LOADING](state: State, loading: boolean): void {
    state.loading = loading;
  }
};

export default mutations;
