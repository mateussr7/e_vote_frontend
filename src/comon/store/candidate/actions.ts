import { action } from "typesafe-actions";
import { User } from "../user/types";
import { 
    GET_CANDIDATES_ERROR, 
    GET_CANDIDATES_FINISHED, 
    GET_CANDIDATES_STARTED, 
    INSERT_CANDIDATES_ERROR, 
    INSERT_CANDIDATES_FINISHED, 
    INSERT_CANDIDATES_STARTED 
} from "./types";

export const getCandidatesStarted = () => action(GET_CANDIDATES_STARTED, {});
export const getCandidatesFinished = (candidates: User[]) => action(GET_CANDIDATES_FINISHED, { candidates });
export const getCandidatesError = () => action(GET_CANDIDATES_ERROR, {});

export const insertCandidateStarted = (candidate: User) => action(INSERT_CANDIDATES_STARTED, { candidate });
export const insertCandidateFinished = (candidate: User) => action(INSERT_CANDIDATES_FINISHED, { candidate });
export const insertCandidateError = () => action(INSERT_CANDIDATES_ERROR, {});