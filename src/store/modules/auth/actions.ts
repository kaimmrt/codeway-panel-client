import Axios from 'axios';
import { AUTO_LOGIN_ACTION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "@/store/constants";
import { ActionContext } from 'vuex';
import { AuthState } from '../../../types/AuthState';
import { RootState } from '../../../types/RootState';

export default {
    async [LOGIN_ACTION](context: ActionContext<AuthState, RootState>, payload: { email: string; password: string }) {
        const postData = {
            email: payload.email,
            password: payload.password,
        };
        
        try {
            const response = await Axios.post('http://localhost:3000/auth/signin', postData);
            const expirationTime = +response.data.expiresIn * 1000;
            
            const tokenData = {
                email: response.data.email,
                userId: response.data.userId,
                token: response.data.token,
                expiresIn: expirationTime
            };
            
            localStorage.setItem('userData', JSON.stringify(tokenData));
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
        } catch (err) {
            console.error('Login error:', err);
        }
    },

    [AUTO_LOGIN_ACTION](context: ActionContext<AuthState, RootState>) {
        const userData = localStorage.getItem('userData');
        if (userData) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(userData));
        }
    },

    async [LOGOUT_ACTION](context: ActionContext<AuthState, RootState>) {
        try {
            await Axios.post('http://localhost:3000/auth/logout');
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: null,
                userId: null,
                token: null,
                expiresIn: null,
            });
            localStorage.removeItem('userData');
        } catch (err) {
            console.error('Logout error:', err);
        }
    },
};
