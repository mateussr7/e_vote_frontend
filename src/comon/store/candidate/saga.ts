import { AnyAction } from "redux";
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCandidates, insertCandidate } from "../../services/candidateService";
import { User } from "../user/types";
import { getCandidatesFinished, insertCandidateFinished } from "./actions";
import {  GET_CANDIDATES_STARTED, INSERT_CANDIDATES_STARTED } from "./types";

export function* candidateSagas(){
    yield takeLatest(GET_CANDIDATES_STARTED, getCandidatesSagas);
    yield takeLatest(INSERT_CANDIDATES_STARTED, insertCandidateSagas);
}

function* getCandidatesSagas(action: AnyAction) {
    try{
        const candidates: User[] = yield call(getCandidates);
        yield put(getCandidatesFinished(candidates));
    } catch (err) {
        console.log(err);
    }
}

function *insertCandidateSagas(action: AnyAction) {
    const candidate: User = action.payload;

    try{
        const returnedCandidate: User = yield call(insertCandidate, candidate);
        yield put(insertCandidateFinished(returnedCandidate));
    } catch (err) {
        console.log(err);
    }
}