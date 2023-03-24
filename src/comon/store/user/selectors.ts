import { ApplicationState } from "../store"

export const getUserSelector = ({ userReducer }: ApplicationState) => userReducer;