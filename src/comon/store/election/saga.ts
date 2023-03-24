// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from "axios"
import { AnyAction } from "redux"
import { call, put, takeLatest } from "redux-saga/effects"
import { createElectionService, fetchElectionsService, finishElectionService, getElectionResultService, startElectionService } from "../../services/electionService"
import { showMessage } from "../message/actions"
import { createElectionSuccess, fetchElections, fetchElectionsSuccess, finishElectionSuccess, getElectionResultSuccess, startElectionSuccess } from "./actions"
import { 
    Election, 
    FETCH_ALL_ELECTIONS_STARTED, 
    FINISH_ELECTION_STARTED, 
    NEW_ELECTION_STARTED, 
    START_ELECTION_STARTED, 
    GET_ELECTION_RESULT_STARTED, 
    Result
} from "./types"

export function* electionSagas(){
    yield takeLatest(FETCH_ALL_ELECTIONS_STARTED, fetchElectionsSaga)
    yield takeLatest(START_ELECTION_STARTED, startElectionSagas)
    yield takeLatest(FINISH_ELECTION_STARTED, finishElectionSagas)
    yield takeLatest(NEW_ELECTION_STARTED, createElectionSagas)
    yield takeLatest(GET_ELECTION_RESULT_STARTED, getElectionResultSagas)
}

function* fetchElectionsSaga(action: AnyAction) {
    try {
        const elections: Election[] = yield call(fetchElectionsService)

        yield put(fetchElectionsSuccess(elections))
        yield put(showMessage({
            message: "Eleições carregadas com sucesso",
            type: 'success'
        }))
    } catch (err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message: message,
            type: "error"
        }))
    }
}

function* startElectionSagas(action: AnyAction) {
    try{
        const { electionId } = action.payload
        const election: Election = yield call(startElectionService, electionId)

        yield put(startElectionSuccess(election))
        yield put(showMessage({
            message: "Eleição iniciada com sucesso",
            type: 'success'
        }))
    }catch (err: AxiosError | any){
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message,
            type: "error"
        }))
    }
}

function* finishElectionSagas(action: AnyAction) {
    try{
        const { electionId } = action.payload
        const election: Election = yield call(finishElectionService, electionId)

        yield put(finishElectionSuccess(election))
        yield put(showMessage({
            message: "Eleição finalizada com sucesso",
            type: 'success'
        }))
    } catch (err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message,
            type: "error"
        }))
    }
}

function *createElectionSagas(action: AnyAction) {
    try{
        const { election } = action.payload
        const createdElection: Election = yield call(createElectionService, election)
        
        yield put(createElectionSuccess(createdElection))
        yield put(showMessage({
            message: "Eleição criada com sucesso",
            type: 'success'
        }))
        yield put(fetchElections())
    } catch(err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message,
            type: "error"
        }))
    }
}

function* getElectionResultSagas(action: AnyAction) {
    try{
        const { electionId } = action.payload

        const results: Result = yield call(getElectionResultService, electionId)

        yield put(getElectionResultSuccess(results))
        yield put(showMessage({
            message: "Resultado calculado com sucesso",
            type: 'success'
        }))
    }catch (err: AxiosError | any) {
        const { response: { data: { message } } } = err
        yield put(showMessage({
            message,
            type: "error"
        }))
    }
}