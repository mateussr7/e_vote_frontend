import store from "../../store/store"

export const getHeader = () => {
    const TOKEN = `Bearer ${getTokenFromStorage}`

    return {
        headers: {
            Authorization: TOKEN
        }
    }
}

export const getTokenFromStorage = () => {
    const token = store.getState().userReducer.token;
    return token;
}