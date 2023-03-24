import { action } from "typesafe-actions"
import { Message, SHOW_MESSAGE_FINISHED, SHOW_MESSAGE_STARTED } from "./types"

export const showMessage = (type: Message) => action(SHOW_MESSAGE_STARTED, type)
export const hideMessage = () => action(SHOW_MESSAGE_FINISHED, { })