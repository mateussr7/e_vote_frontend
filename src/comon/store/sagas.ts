import { all } from 'redux-saga/effects';
import { candidateSagas } from './candidate/saga';
import { electionSagas } from './election/saga';
import { positionSagas } from './position/saga';
import { userSagas } from './user/saga';
import { voteSagas } from './vote/saga';

export default function* rootSaga() {
    yield all([
        userSagas(),
        electionSagas(),
        positionSagas(),
        candidateSagas(),
        voteSagas(),
    ]);
}