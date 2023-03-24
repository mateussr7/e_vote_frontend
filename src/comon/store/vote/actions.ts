import { action } from "typesafe-actions"
import { REGISTER_VOTE_ERROR, REGISTER_VOTE_STARTED, REGISTER_VOTE_SUCCESS, Vote } from "./types"

export const addVote = (vote: Vote) => action(REGISTER_VOTE_STARTED, { vote })
export const addVoteSuccess = (vote: Vote) => action(REGISTER_VOTE_SUCCESS, { vote })
export const addVoteError = () => action(REGISTER_VOTE_ERROR, { })