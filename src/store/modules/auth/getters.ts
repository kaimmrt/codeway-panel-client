import { GetterTree } from 'vuex';
import { GET_USER_TOKEN_GETTER, IS_AUTHENTICATE_GETTER } from '@/store/constants';
import { IRootState } from '../../../types/interfaces/root-state.interface';
import { ILogin } from '@/types/interfaces/login.interface';

const getters: GetterTree<ILogin, IRootState> = {
  [GET_USER_TOKEN_GETTER]: (state) => state.token,
  [IS_AUTHENTICATE_GETTER]: (state) => !!state.token,
};

export default getters;
