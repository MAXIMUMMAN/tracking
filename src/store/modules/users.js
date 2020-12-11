import {axios} from "../../plugins/axios";
import { errorForAuth } from "../../components/errors/error";
import router from "../../router";

var path = 'http://tracking.local';

export default {
    actions: {
        AUTHORIZATION(ctx, data) {
            axios.post(path + '/api/user/auth.php',
                {data: data},
                //{headers: {'Content-Type': 'application/x-www-form-urlencoded'}},)
                )
                .then(result => {
                    ctx.commit('AUTHORIZATION_MUTATION', result.data)
                })
                .catch(error => {

                })
        },
        LOGOUT(ctx) {
            ctx.commit('LOGOUT_MUTATION')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        }
    },
    mutations: {
        handler() {},
        AUTHORIZATION_MUTATION(state, user) {
            if (user != false) {
                state.user = user;
                state.status = 'success';
                const token = user.records[0].id;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                router.push('/dashboard')
            }else {
                errorForAuth('Ошибка входа ')
            }
        },
        LOGOUT_MUTATION(state) {
            state.status = '',
            state.token = ''
        }
    }
    ,
    state: {
        user: [],
        token: localStorage.getItem('token') || '',
        state: 'success'
    },
    getters: {
        USER(state) {
            return state.user
        },
        isLoggedIn(state) {
            return !!state.token
        },
        authStatus(state) {
            return state.status
        },
    }
}