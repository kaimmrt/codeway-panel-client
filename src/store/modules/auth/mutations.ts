import { MutationTree } from 'vuex';
import { SET_USER_TOKEN_DATA_MUTATION } from '@/store/constants';
import { AuthState } from '../../../types/AuthState';

const mutations: MutationTree<AuthState> = {
  [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
    state.email = payload.email;
    state.token = payload.token;
    state.expiresIn = payload.expiresIn;
    state.userId = payload.userId;
  },
};

export default mutations;
