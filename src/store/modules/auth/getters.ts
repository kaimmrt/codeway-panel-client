import { GetterTree } from 'vuex';
import { GET_USER_TOKEN_GETTER, IS_AUTHENTICATE_GETTER } from '@/store/constants';
import { AuthState } from '../../../types/AuthState';
import { RootState } from '../../../types/RootState';

const getters: GetterTree<AuthState, RootState> = {
  [GET_USER_TOKEN_GETTER]: (state) => state.token,
  [IS_AUTHENTICATE_GETTER]: (state) => !!state.token,
};

export default getters;
