import axios from "axios"
import { environment } from "../env/env"
import { Election, Result } from "../store/election/types"


export async function fetchElectionsService(): Promise<Election[]> {
    const URL = `${environment.apiUrl}/election/`

    const { data: { elections } } = await axios.get(URL)
    return elections
}

export async function startElectionService(electionId: number): Promise<Election> {
    const URL = `${environment.apiUrl}/election/start-election`

    const { data } = await axios.post(URL, { id: electionId })
    return data
}

export async function finishElectionService(electionId: number): Promise<Election> {
    const URL = `${environment.apiUrl}/election/finish-election`

    const { data } = await axios.post(URL, { id: electionId })
    return data
}

export async function createElectionService(election: Election): Promise<Election> {
    const URL = `${environment.apiUrl}/election/`

    console.log(election)

    const { data } = await axios.post(URL, { 
        name: election.name,
        positionId: election.position,
        candidatesIds: election.candidates.map(candidate => candidate.id)
    })
    return data
}

export async function getElectionResultService(electionId: number): Promise<Result> {
    const URL = `${environment.apiUrl}/election/results`

    const { data: { results } } = await axios.post(URL, { id: electionId })

    return results
}