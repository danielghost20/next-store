import axios from 'axios'

// Exporta una instancia de axios con una URL base creata en un archivo .env.local

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SHOP_API_URL
})