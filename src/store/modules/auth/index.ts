import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { AuthState } from '../../../types/AuthState';
import { RootState } from '../../../types/RootState';

const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    email: null,
    token: null,
    expiresIn: null,
    userId: null,
  },
  mutations,
  getters,
  actions,
};

export default authModule;
