import axios from "axios";
import { environment  } from "../env/env";
import { User } from "../store/user/types";

export async function getCandidates(): Promise<User[]> {
    const URL = `${environment.apiUrl}/user/candidates`;
    
    const { data: { candidates } } = await axios.get(URL);
    return candidates;
}

export async function insertCandidate(candidate: User): Promise<User> {
    const URL = `${environment.apiUrl}/candidate/insert`;

    const { data } = await axios.post(URL, candidate);
    return data;
}