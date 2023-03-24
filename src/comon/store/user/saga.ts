// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import { AnyAction } from 'redux';
import { takeLatest, call, put } from 'redux-saga/effects';
import { addNewUser, login } from '../../services/userService';
import { showMessage } from '../message/actions';
import { loginSuccess, registerSuccess } from './actions';
import { LoginResponse, LOGIN_STARTED, REGISTER_STARTED, User } from './types';

export function* userSagas(){
    yield takeLatest(LOGIN_STARTED, loginSaga)
    yield takeLatest(REGISTER_STARTED, registerSaga)
}


function* loginSaga(action: AnyAction) {
    const { credentials } = action.payload

    try {
        const response: LoginResponse = yield call(login, credentials);

        yield put(loginSuccess(response))
        yield put(showMessage({
            message: "Login feito com sucesso",
            type: "success"
        }))
    }catch (err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        }))
    }
}

function* registerSaga(action: AnyAction) {
    const { credentials } = action.payload

    try{

        const user: User = yield call(addNewUser, credentials)

        yield put(registerSuccess(user))
        yield put(showMessage({
            message: "Usuário criado com sucesso",
            type: "success"
        }))
    }catch (err: AxiosError | any){
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        }))
    }
}