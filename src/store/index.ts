import { createStore } from 'vuex';
import auth from './modules/auth'; 
import { LOADING_SPINNER_SHOW_MUTATION } from './constants';

const store = createStore({
  modules: {
    auth, 
  },
  state: () => ({
    showLoading: false,
  }),
  mutations: {
    [LOADING_SPINNER_SHOW_MUTATION](state, payload: boolean) {
      state.showLoading = payload;
    },
  },
});

export default store;
