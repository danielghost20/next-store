import { axiosInstance } from "@/utils/axiosInstance";
import { AccessToken, Credentials } from "@/interfaces/auth.interface";

export async function authUserLogin (credentials: Credentials) : Promise <AccessToken> {
    try {
        const response = await axiosInstance.post('/auth/login', credentials)
        return response.data
    } catch (error: any) {
        return error
    }
}