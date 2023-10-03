import { Products } from "@/interfaces/product.interface";
import { axiosInstance } from "@/utils/axiosInstance";


export async function getCategories (): Promise<string[]> {
    try {
        const response = await axiosInstance.get('/products/categories')
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

export async function getProducts (): Promise<Products[]> {
    try {
        const response = await axiosInstance.get('/products?limit=10')
        return response.data
    } catch (error: any) {
        return error
    }    
}

export async function getSimilarProductsByCategory(category:string): Promise<Products[]> {
    try {
        const response = await axiosInstance.get(`/products/category/${category}`)
        return response.data
    } catch (error: any) {
        return error
    }   
}