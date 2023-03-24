import { action } from "typesafe-actions";
import { LoginCredentials, LoginResponse, LOGIN_STARTED, LOGIN_SUCCESS, RegisterCredentials, REGISTER_STARTED, REGISTER_SUCCESS, User } from "./types";

export const loginStarted = (credentials: LoginCredentials) => action(LOGIN_STARTED, { credentials });
export const loginSuccess = (login: LoginResponse) => action(LOGIN_SUCCESS, { login });

export const registerUser = (credentials: RegisterCredentials) => action(REGISTER_STARTED, { credentials })
export const registerSuccess = (user: User) => action(REGISTER_SUCCESS, { user })