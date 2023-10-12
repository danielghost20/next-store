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
        const response = await axiosInstance.get('/products?offset=10&limit=20')
        return response.data
    } catch (error: any) {
        return error
    }    
}

export async function getSimilarProductsByCategory(category:number): Promise<Products[]> {
    try {
        const response = await axiosInstance.get(`/categories/${category}/products?offset=4&limit=4`)
        return response.data
    } catch (error: any) {
        return error
    }   
}

export async function getProductsBySearch (): Promise<Products[]> {
    try {
        const response = await axiosInstance.get('/products?offset=14&limit=14')
        return response.data
    } catch (error: any) {
        return error
    }
}