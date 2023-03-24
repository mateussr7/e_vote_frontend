import axios from "axios";
import { environment } from "../env/env";
import { Position } from "../store/position/types";

export async function getPositionsService(): Promise<Position[]> {
    const URL = `${environment.apiUrl}/position`

    const { data: { positions } } = await axios.get(URL)
    return positions
}

export async function addPositionService(name: string): Promise<Position> {
    const URL = `${environment.apiUrl}/position`

    const { data } = await axios.post(URL, { name })
    return data
}

export async function deletePositionService(id: number): Promise<Position> {
    const URL = `${environment.apiUrl}/position/delete`

    const { data } = await axios.post(URL, { id })
    return data
}