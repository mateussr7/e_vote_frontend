export interface Position {
    id?: number
    name: string
}

export interface PositionState {
    positions: Position[]
}

export const FETCH_ALL_POSITIONS_STARTED = "@position/FETCH_ALL_POSITIONS_STARTED"
export const FETCH_ALL_POSITIONS_FINISHED = "@position/FETCH_ALL_POSITIONS_FINISHED"
export const FETCH_ALL_POSITIONS_ERROR = "@position/FETCH_ALL_POSITIONS_ERROR"

export const ADD_NEW_POSITION_STARTED = "@position/ADD_NEW_POSITION_STARTED"
export const ADD_NEW_POSITION_FINISHED = "@position/ADD_NEW_POSITION_FINISHED"
export const ADD_NEW_POSITION_ERROR = "@position/ADD_NEW_POSITION_ERROR"

export const DELETE_POSITION_STARTED = "@position/DELETE_POSITION_STARTED"
export const DELETE_POSITION_FINISHED = "@position/DELETE_POSITION_FINISHED"
export const DELETE_POSITION_ERROR = "@position/DELETE_POSITION_ERROR"
