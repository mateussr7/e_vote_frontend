import { Reducer } from "redux"
import { FETCH_ALL_POSITIONS_FINISHED, PositionState } from "./types"

export const INITIAL_STATE: PositionState = {
    positions: []
}

const positionReducer: Reducer<PositionState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ALL_POSITIONS_FINISHED: {
            const { positions } = action.payload
            return {
                ...state,
                positions
            }
        }
        default: return state
    }
}

export default positionReducer