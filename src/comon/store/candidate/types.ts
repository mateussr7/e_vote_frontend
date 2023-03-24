import { User } from "../user/types"

export interface Candidate {
    id: number
    name: string
    registration: string
    cpf: string
}

export interface CandidateDTO {
    id?: number
    name: string
    registration: string
    cpf: string
}

export interface CandidateState {
    candidates: User[],
}

export const GET_CANDIDATES_STARTED = '@candidate/GET_CANDIDATES_STARTED';
export const GET_CANDIDATES_FINISHED = '@candidate/GET_CANDIDATES_FINISHED';
export const GET_CANDIDATES_ERROR = '@candidate/GET_CANDIDATES_ERROR';

export const INSERT_CANDIDATES_STARTED = '@candidate/INSERT_CANDIDATES_STARTED';
export const INSERT_CANDIDATES_FINISHED = '@candidate/INSERT_CANDIDATES_FINISHED';
export const INSERT_CANDIDATES_ERROR = '@candidate/INSERT_CANDIDATES_ERROR';

export const DELETE_CANDIDATES_STARTED = '@candidate/DELETE_CANDIDATES_STARTED';
export const DELETE_CANDIDATES_FINISHED = '@candidate/DELETE_CANDIDATES_FINISHED';
export const DELETE_CANDIDATES_ERROR = '@candidate/DELETE_CANDIDATES_ERROR';