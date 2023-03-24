// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from "axios";
import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { getPositionsService, addPositionService, deletePositionService } from "../../services/positionService";
import { showMessage } from "../message/actions";
import { addPositionSuccess, deletePositionSuccess, fetchPositionsSuccess } from "./actions";
import { ADD_NEW_POSITION_STARTED, DELETE_POSITION_STARTED, FETCH_ALL_POSITIONS_STARTED, Position } from "./types";

export function* positionSagas(){
    yield takeLatest(FETCH_ALL_POSITIONS_STARTED, fetchPositionsSaga)
    yield takeLatest(ADD_NEW_POSITION_STARTED, addNewPositionSaga)
    yield takeLatest(DELETE_POSITION_STARTED, deletePositionSaga)
}

function* fetchPositionsSaga(action: AnyAction) {
    try{
        const positions: Position[] = yield call(getPositionsService)
        yield put(fetchPositionsSuccess(positions))
        yield put(showMessage({
            message: "Cargos buscados com sucesso",
            type: "success"
        }))
    } catch (err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        }))
    }
}

function *addNewPositionSaga(action: AnyAction) {
    const { name } = action.payload
    try{
        const position: Position = yield call(addPositionService, name)
        yield put(addPositionSuccess(position))
        yield put(showMessage({
            message: "Cargo adicionado com sucesso",
            type: "success"
        }))
    }catch(err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        })) 
    }
}

function *deletePositionSaga(action: AnyAction) {
    const { id } = action.payload
    try{
        const position: Position = yield call(deletePositionService, id)
        yield put(deletePositionSuccess(position))
        yield put(showMessage({
            message: "Cargo adicionado com sucesso",
            type: "success"
        }))
    }catch(err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        })) 
    }
}
