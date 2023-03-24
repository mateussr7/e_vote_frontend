import { Reducer } from 'redux';
import { CandidateState, GET_CANDIDATES_FINISHED, INSERT_CANDIDATES_FINISHED } from './types';

export const INITIAL_STATE: CandidateState = {
    candidates: [],
}

const candidateReducer: Reducer<CandidateState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CANDIDATES_FINISHED: {
            const { candidates } = action.payload;
            return {...state, candidates}
        }
        case INSERT_CANDIDATES_FINISHED: {
            const candidate = action.payload;
            return {
                ...state, 
                candidates: [...state.candidates, candidate], 
            }
        }
        default: return state;
    }
}

export default candidateReducer;