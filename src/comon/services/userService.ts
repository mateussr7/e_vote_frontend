import axios from "axios";
import { environment } from "../env/env";
import { LoginCredentials, LoginResponse, User, UserDTO } from "../store/user/types";

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
    const URL = `${environment.apiUrl}/auth/`;

    const { data } = await axios.post(URL, { 
        email: credentials.email,
        password: credentials.password,
    });
    return data;
}

export async function addNewUser(user: UserDTO): Promise<User> {
    const URL = `${environment.apiUrl}/user/create`;
    
    const { data } = await axios.post(URL, user);
    return data
}