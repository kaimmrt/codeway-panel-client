import Axios, { AxiosResponse } from 'axios';
import { AUTO_LOGIN_ACTION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "@/store/constants";
import { ActionContext } from 'vuex';
import { IRootState } from '../../../types/interfaces/root-state.interface';
import app from '../../../firebase.config';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ILogin } from '@/types/interfaces/login.interface';

export default {
    async [LOGIN_ACTION](context: ActionContext<ILogin, IRootState>, payload: { email: string; password: string }) {
        const auth = getAuth(app);
            
        try {
            const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
            const idToken = await userCredential.user.getIdToken();

            const postData = {
                idToken
            };
            const response:AxiosResponse<ILogin> = await Axios.post(`${import.meta.env.VITE_BASE_API_URL}/auth/signin`, postData);
           
            const tokenData: ILogin = {
                userId: response.data.userId,
                email: response.data.email,
                token: response.data.token,
                countryCode: response.data.countryCode
            };
            
            localStorage.setItem('userData', JSON.stringify(tokenData));
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
        } catch (err) {
            console.error('Login error:', err);
        }
    },

    [AUTO_LOGIN_ACTION](context: ActionContext<ILogin, IRootState>) {
        const userData = localStorage.getItem('userData');
        if (userData) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(userData));
        }
    },

    async [LOGOUT_ACTION](context: ActionContext<ILogin, IRootState>) {
        try {
            const auth = getAuth();
            await signOut(auth);
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: '',
                userId: '',
                countryCode: null,
                token: '',
            });
            localStorage.removeItem('userData');
        } catch (err) {
            console.error('Logout error:', err);
        }
    },
};
