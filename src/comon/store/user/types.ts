export interface User {
    id: number
    name: string
    email: string
    password: string
    isAdmin: boolean
}

export interface UserDTO {
    id?: number 
    name: string
    email: string
    password: string
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface RegisterCredentials {
    name: string
    email: string
    password: string
}

export interface UserState {
    loggedUser: User | null
    loading: boolean
    token: string
    registerSuccess: boolean | null
}

export interface LoginResponse {
    user: User
    token: string
}

export const LOGIN_STARTED = '@user/LOGIN_STARTED';
export const LOGIN_SUCCESS = '@user/LOGIN_SUCCESS';
export const REGISTER_STARTED = '@user/REGISTER_STARTED'
export const REGISTER_SUCCESS = '@user/REGISTER_SUCCESS'
export const REGISTER_ERROR = '@user/REGISTER_ERROR'