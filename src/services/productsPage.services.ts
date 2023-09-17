import { Products, Categories } from "@/interfaces/product.interface";
import { axiosInstance } from "@/utils/axiosInstance";

export async function getProducts (): Promise<Products[]> {
    try {
        const response = await axiosInstance.get('/products/?offset=10&limit=10')
        return response.data
    } catch (error: any) {
        return error
    }    
}

export async function getCategories (): Promise<Categories[]> {
    try {
        const response = await axiosInstance.get('/categories/?offset=5&limit=5')
        return response.data
    } catch (error: any) {
        return error
    }
}

export async function getProductById (id: number) : Promise<Products> {
    try {
        const response = await axiosInstance.get(`/products/${id}`)
        return response.data
    } catch (error: any) {
        return error
    }
}

export async function getProductsByCategory (categoryId: number) : Promise<Products[]>  {
    try {
        const response = await axiosInstance.get(`/categories/${categoryId}/products/?offset=4&limit=4`)
        return response.data
    } catch (error: any) {
        return error
    }
}