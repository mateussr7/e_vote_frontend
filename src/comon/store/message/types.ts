export interface MessageState {
    message: string
    type: string
    isVisible: boolean
}

export interface Message {
    message: string
    type: string
}

export const SHOW_MESSAGE_STARTED = "@message/SHOW_MESSAGE_STARTED"
export const SHOW_MESSAGE_FINISHED = "@message/SHOW_MESSAGE_FINISHED"