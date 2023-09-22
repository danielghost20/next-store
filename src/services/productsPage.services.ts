import { Products, Categories } from "@/interfaces/product.interface";
import { axiosInstance } from "@/utils/axiosInstance";


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

export async function getProductsByCategoryOrAll (categoryId?: number | null) : Promise<Products[]>  {
    try {
        if(categoryId) {
            const response = await axiosInstance.get(`/categories/${categoryId}/products/?offset=1&limit=10`)
            return response.data
        } else {
            const response = await axiosInstance.get('/products/?offset=1&limit=10')
            return response.data
        }
    } catch (error: any) {
        return error
    }
}

export async function getSimilarProducts(categoryId: number | null) : Promise <Products[]> {
    try {
        const response = await axiosInstance.get(`/categories/${categoryId}/products/?offset=3&limit=3`)
        return response.data
    } catch (error: any) {
        return error
    }
}