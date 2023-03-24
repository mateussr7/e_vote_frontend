import { action } from "typesafe-actions"
import { ADD_NEW_POSITION_ERROR, ADD_NEW_POSITION_FINISHED, ADD_NEW_POSITION_STARTED, DELETE_POSITION_ERROR, DELETE_POSITION_FINISHED, DELETE_POSITION_STARTED, FETCH_ALL_POSITIONS_ERROR, FETCH_ALL_POSITIONS_FINISHED, FETCH_ALL_POSITIONS_STARTED, Position } from './types'

export const fetchPositions = () => action(FETCH_ALL_POSITIONS_STARTED, { })
export const fetchPositionsSuccess = (positions: Position[]) => action(FETCH_ALL_POSITIONS_FINISHED, { positions })
export const fetchPositionsError = () => action(FETCH_ALL_POSITIONS_ERROR, { })

export const addPosition = (name: string) => action(ADD_NEW_POSITION_STARTED, { name })
export const addPositionSuccess = (position: Position) => action(ADD_NEW_POSITION_FINISHED, { position })
export const addPositionError = () => action(ADD_NEW_POSITION_ERROR, { })

export const deletePosition = (id: number) => action(DELETE_POSITION_STARTED, { id })
export const deletePositionSuccess = (position: Position) => action(DELETE_POSITION_FINISHED, { position })
export const deletePositionError = () => action(DELETE_POSITION_ERROR, { })