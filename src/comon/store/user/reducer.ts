import { Reducer } from 'redux';
import { LOGIN_STARTED, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, UserState } from './types';

export const INITIAL_STATE: UserState = {
    loggedUser: null,
    loading: false,
    token: "",
    registerSuccess: null
}

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_STARTED: {
            return {...state, loading: true}
        }
        case LOGIN_SUCCESS: {
            const { login } = action.payload
            return {
                ...state, 
                loading: false, 
                loggedUser: login.user,
                token: login.token 
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerSuccess: true,
            }
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                registerSuccess: false
            }
        }
        default: return state
    }
}

export default userReducer;
