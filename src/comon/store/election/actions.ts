import { action } from "typesafe-actions"
import { Election, FETCH_ALL_ELECTIONS_ERROR, FETCH_ALL_ELECTIONS_STARTED, FETCH_ALL_ELECTIONS_SUCCESS, FINISH_ELECTION_ERROR, FINISH_ELECTION_STARTED, FINISH_ELECTION_SUCCESS, GET_ELECTION_RESULT_ERROR, GET_ELECTION_RESULT_STARTED, GET_ELECTION_RESULT_SUCCESS, NEW_ELECTION_STARTED, NEW_ELECTION_SUCCESS, Result, START_ELECTION_ERROR, START_ELECTION_STARTED, START_ELECTION_SUCCESS } from "./types"

export const startElection = (electionId: number) => action(START_ELECTION_STARTED, { electionId })
export const startElectionSuccess = (election: Election) => action(START_ELECTION_SUCCESS, { election })
export const startElectionError = () => action(START_ELECTION_ERROR, { }) 

export const fetchElections = () => action(FETCH_ALL_ELECTIONS_STARTED, { })
export const fetchElectionsSuccess = (elections: Election[]) => action(FETCH_ALL_ELECTIONS_SUCCESS, { elections })
export const fetchElectionError = () => action(FETCH_ALL_ELECTIONS_ERROR, { })

export const finishElection = (electionId: number) => action(FINISH_ELECTION_STARTED, { electionId })
export const finishElectionSuccess = (election: Election) => action(FINISH_ELECTION_SUCCESS, { election })
export const finishElectionError = () => action(FINISH_ELECTION_ERROR, { })

export const getElectionResult = (electionId: number) => action(GET_ELECTION_RESULT_STARTED, { electionId })
export const getElectionResultSuccess = (result: Result) => action(GET_ELECTION_RESULT_SUCCESS, { result })
export const getElectionResultError = () => action(GET_ELECTION_RESULT_ERROR, { })

export const createElection = (election: Election) => action(NEW_ELECTION_STARTED, { election })
export const createElectionSuccess = (election: Election) => action(NEW_ELECTION_SUCCESS, { election })