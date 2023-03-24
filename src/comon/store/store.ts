import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { CandidateState } from './candidate/types';
import { ElectionState } from './election/types';
import { MessageState } from './message/types';
import { PositionState } from './position/types';
import rootReducer from './rootReducer';
import rootSaga from './sagas';
import { UserState } from './user/types';

export interface ApplicationState {
    userReducer: UserState
    messageReducer: MessageState
    electionReducer: ElectionState
    positionReducer: PositionState
    candidateReducer: CandidateState
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => { 
        return getDefaultMiddleware( { thunk: false } ).prepend(sagaMiddleware);
    },
});

sagaMiddleware.run(rootSaga);

export default store;