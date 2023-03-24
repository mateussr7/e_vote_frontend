import { Position } from "../position/types"
import { User } from "../user/types"

export interface Election {
    id?: number
    name: string
    startDate: Date | null
    endDate: Date | null
    position: Position
    candidates: User[]
}

export interface Candidate {
    user: User
    votes: number
}

export interface ElectionResult {
    candidates: Candidate[]
}

export interface Result {
    [key: string]: string
}

export interface ElectionState {
    elections: Election[]
    result: Result
}

export const FETCH_ALL_ELECTIONS_STARTED = "@election/FETCH_ALL_ELECTIONS_STARTED"
export const FETCH_ALL_ELECTIONS_SUCCESS = "@election/FETCH_ALL_ELECTIONS_SUCCESS"
export const FETCH_ALL_ELECTIONS_ERROR = "@election/FETCH_ALL_ELECTIONS_ERROR"

export const START_ELECTION_STARTED = "@election/START_ELECTION_STARTED"
export const START_ELECTION_SUCCESS = "@election/START_ELECTION_SUCCESS"
export const START_ELECTION_ERROR = "@election/START_ELECTION_ERROR"

export const FINISH_ELECTION_STARTED = "@election/FINISH_ELECTION_STARTED"
export const FINISH_ELECTION_SUCCESS = "@election/FINISH_ELECTION_SUCCESS"
export const FINISH_ELECTION_ERROR = "@election/FINISH_ELECTION_ERROR"

export const GET_ELECTION_RESULT_STARTED = "@election/GET_ELECTION_RESULT_STARTED"
export const GET_ELECTION_RESULT_SUCCESS = "@election/GET_ELECTION_RESULT_SUCCESS"
export const GET_ELECTION_RESULT_ERROR = "@election/GET_ELECTION_RESULT_ERROR"

export const NEW_ELECTION_STARTED = "@election/NEW_ELECTION_STARTED"
export const NEW_ELECTION_SUCCESS = "@election/NEW_ELECTION_SUCCESS"
export const NEW_ELECTION_ERROR = "@election/NEW_ELECTION_ERROR"