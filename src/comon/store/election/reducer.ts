import { Reducer } from 'redux'
import { Election, ElectionState, FETCH_ALL_ELECTIONS_SUCCESS, GET_ELECTION_RESULT_SUCCESS, START_ELECTION_SUCCESS } from './types'

export const INITIAL_STATE: ElectionState = {
    elections: [],
    result: {}
}

const electionReducer: Reducer<ElectionState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ALL_ELECTIONS_SUCCESS: {
            const { elections } = action.payload
            return { 
                ...state,
                elections
            }
        }
        case START_ELECTION_SUCCESS: {
            const { election } = action.payload
            const filterElections = election.filter((el: Election) => el.id !== election.id)
            return {
                ...state,
                elections: [...filterElections, election]
            }
        }
        case GET_ELECTION_RESULT_SUCCESS: {
            const { result } = action.payload
            return {
                ...state,
                result
            }
        }
        default: return state
    }
}

export default electionReducer