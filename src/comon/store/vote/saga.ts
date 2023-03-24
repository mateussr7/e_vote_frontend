// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from "axios"
import { AnyAction } from "redux"
import { call, put, takeLatest } from "redux-saga/effects"
import { registerVoteService } from "../../services/voteService"
import { showMessage } from "../message/actions"
import { addVoteSuccess } from "./actions"
import { REGISTER_VOTE_STARTED, Vote } from "./types"

export function*voteSagas() {
    yield takeLatest(REGISTER_VOTE_STARTED, addVoteSaga)
}

function *addVoteSaga(action: AnyAction) {
    try {
        const { vote } = action.payload

        console.log(vote)

        const addedVote: Vote = yield call(registerVoteService, vote)

        yield put(addVoteSuccess(addedVote))
        yield put(showMessage({
            message: "Voto registrado com sucesso",
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