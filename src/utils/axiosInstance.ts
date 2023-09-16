import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.SHOP_API_URL
})