export interface Vote {
    electionId: number
    candidateId: number
    userId: number
}



export const REGISTER_VOTE_STARTED = "@vote/REGISTER_VOTE_STARTED"
export const REGISTER_VOTE_SUCCESS = "@vote/REGISTER_VOTE_SUCCESS"
export const REGISTER_VOTE_ERROR = "@vote/REGISTER_VOTE_ERROR"