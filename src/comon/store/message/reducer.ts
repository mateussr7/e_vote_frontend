import { Reducer } from 'redux'
import { Message, MessageState, SHOW_MESSAGE_FINISHED, SHOW_MESSAGE_STARTED } from './types'

export const INITIAL_STATE: MessageState = {
    message: '',
    type: 'success',
    isVisible: false
}

const messageReducer: Reducer<MessageState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOW_MESSAGE_STARTED: {
            const message: Message = action.payload
            return {
                ...state, 
                isVisible: true,
                type: message.type,
                message: message.message
            }
        }
        case SHOW_MESSAGE_FINISHED: {
            return {
                ...state,
                isVisible: false,
            }
        }
        default: return state
    }
}

export default messageReducer