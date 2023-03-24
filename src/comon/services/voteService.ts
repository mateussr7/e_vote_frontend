import axios from "axios"
import { environment } from "../env/env"
import { Vote } from "../store/vote/types"

export async function registerVoteService(vote: Vote): Promise<Vote> {
    const URL = `${environment.apiUrl}/vote/`

    const { data } = await axios.post(URL, {
        electionId: vote.electionId,
        candidateId: vote.candidateId,
        voterId: vote.userId
    })

    return data
}