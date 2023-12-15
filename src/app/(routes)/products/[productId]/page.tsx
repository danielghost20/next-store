"use client"


import { LiaShoppingCartSolid } from "react-icons/lia";
import {
    getProductById,
} from "@/services/firebase/products.service";
import { Product} from "@/interfaces/product.interface";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ListSimilarProducts from "@/components/products/LIstSimilarProducts";
import { Suspense, useEffect, useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

export default  function ProductPage({
    params,
}: {
    params: { productId: string };
}) {

    const [product, setProduct] = useState<Product>()
    const [isProductInCart, setIsproductInCart] = useState<boolean>(false)

    const router = useRouter()

    const {features: {addProductToCart, removeProduct}, items} = useCartContext()
    
    const handleAddProduct = () => {
        if(product) {
            addProductToCart({
                amount: 1,
                category: product.category,
                id: product.id,
                image: product.image,
                name: product.title,
                price: product.price
            })
        }
    }

    const handleBuyProduct = () => {
        if (product) {
            addProductToCart({
                amount: 1,
                category: product.category,
                id: product.id,
                image: product.image,
                name: product.title,
                price: product.price
            })
            router.push('/payment/checkout')
        }
    } 

    useEffect(() => {
        getProductById(params.productId)
        .then(res => setProduct(res))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (product) {
           const value: boolean =  items.some(item => item.id === product.id)
           setIsproductInCart(value)
        }
    }, [addProductToCart, removeProduct])

    if(!product) return <div>Cargando...</div>

    return (
        <>
            <header className="w-full">
                <Navbar search={true} />
            </header>
            <main className="m-auto mt-10 max-w-screen-2xl">
                <div className="flex justify-center w-full  gap-10 px-3">
                    <div className="max-w-xl">
                        <Image
                            src={product.image}
                            width={500}
                            height={500}
                            alt={product.image}
                        />
                    </div>
                    <div className="flex flex-col max-w-lg gap-5">
                        <h2 className="text-3xl font-semibold">{product.title}</h2>
                        <p className="text-lg">{product.description}</p>
                        <p className="text-lg">Price: ${product.price} MNX</p>
                        <p className="text-lg">Categoria: {product.category.name}</p>
                        <div className="flex gap-5">
                            <button disabled={isProductInCart} onClick={handleAddProduct} className={`${buttonVariants()} flex max-w-max gap-2 items-center `}>Agregar al carrito< LiaShoppingCartSolid className="text-xl"/></button>
                            <button disabled={isProductInCart} onClick={handleBuyProduct} className={`${buttonVariants()}`}>Comprar</button>
                        </div>
                    </div>
                </div>
                <h2 className="py-4 text-2xl text-center">Productos similares</h2>
                <section className="flex flex-wrap justify-center w-full gap-4 px-4">
                    <Suspense fallback={<div>Cargando...</div>}>
                    <ListSimilarProducts color={product.category.color} name={product.category.name} />
                    </Suspense>
                </section>
            </main>
            <footer className="flex items-center w-full py-6 mt-10 border-2 justify-evenly px-7 ">
                <div className="flex flex-col gap-3">
                    <h2>COMPANY</h2>
                    <p className="w-full max-w-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eaque
                        suscipit quod nam iure sunt soluta? Eos veritatis odio eligendi
                        dignissimos ipsam libero. Rem temporibus doloremque repudiandae
                        maiores blanditiis saepe.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Marca</a>
                    <a>Galeria</a>
                    <a>Dashboard</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Contacto</a>
                    <a>Servicios</a>
                    <a>Desarrollo</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Contacto</a>
                    <a>Servicios</a>
                    <a>Desarrollo</a>
                </div>
            </footer>
        </>
    );
}
