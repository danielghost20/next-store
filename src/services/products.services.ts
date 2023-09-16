import { axiosInstance } from "@/utils/axiosInstance";

export async function getProducts () {
    try {
        const response = await axiosInstance.get('/products/?offset=0&limit=10')
        return response
    } catch (error) {
        return error
    }    
}