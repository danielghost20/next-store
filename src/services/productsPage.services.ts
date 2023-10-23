import { Products } from "@/interfaces/product.interface";
import { axiosInstance } from "@/utils/axiosInstance";


/**
 * @name getCategories
 * @returns {resonse: Promise<string[]>, error: any}
 * @description Esta funcion retorna un arreglo que contiene las categorias de productos, las retorna en un arreglo el cual se puede usar en diferentes partes 
 */

/**
 * @name getProductById
 * @param {id: number} 
 * @returns {response: Promise<Products>, error: any}
 * @description Esta funcion retorna un producto dependiendo dependiendo del id del producto que se le pase por parametro
 */

/**
 * @name getProducts
 * @returns {response: Promise<Proucts[]>, error: any}
 * @description Esta funcion retorna una promesa con un arreglo de productos, si hay algun problema retorna un error
 */

/**
 * @name getSimilarProductsByCategory
 * @param {category: number}
 * @returns {response: Promise<Products[]>, error: any} 
 * @description Esta funcion retorna una promesa con un arreglo de productos, los cuales son similares al producto que el ususario selecciono para ver los detalles
 */

/**
 * @name
 * @returns 
 * @description
 */


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