import { MutationTree } from 'vuex';
import { SET_USER_TOKEN_DATA_MUTATION } from '@/store/constants';
import { ILogin } from '@/types/interfaces/login.interface';

const mutations: MutationTree<ILogin> = {
  [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
    state.email = payload.email;
    state.token = payload.token;
    state.countryCode = payload.countryCode;
    state.userId = payload.userId;
  },
};

export default mutations;
