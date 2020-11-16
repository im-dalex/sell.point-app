import { ActionContext, ActionTree } from 'vuex';

import {
  LOADING,
} from '@/store/mutation-types';

import State from '@/store/state';
const actions: ActionTree<State, State> = { 
  setLoading({ commit }: ActionContext<State, State>, isLoading: boolean): void {
    commit(LOADING, isLoading);
  },
};

export default actions;
