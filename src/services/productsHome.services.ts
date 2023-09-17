import { Products } from "@/interfaces/product.interface";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getProducts (): Promise<Products[]> {
    try {
        const response = await axiosInstance.get('/products/?offset=4&limit=4')
        return response.data
    } catch (error: any) {
        return error
    }    
}