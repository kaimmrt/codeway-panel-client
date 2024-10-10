import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { IRootState } from '../../../types/interfaces/root-state.interface';
import { ILogin } from '@/types/interfaces/login.interface';

const authModule: Module<ILogin, IRootState> = {
  namespaced: true,
  state: {
    email: '',
    token: '',
    countryCode: null,
    userId: '',
  },
  mutations,
  getters,
  actions,
};

export default authModule;
