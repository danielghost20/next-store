'use client'
import { getProducts } from "@/services/productsHome.services";
import { useEffect, useState } from "react";

export function useGetProducts() {
    const [products, setProducts] = useState<null | any>(null)
    const [error, setError] = useState<null | any>(null)

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(err => setError(err))
    }, [])

    return { products, error }
}