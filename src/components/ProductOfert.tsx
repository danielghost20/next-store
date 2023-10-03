'use client'

import Image from "next/image";
import React from "react";
import PriceTag from "./PriceTag";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type ProductProps = {
    cardStyles?: string,
    image: string,
    price: number,
    productName: string,
    description: string,
    id: number,
    category: string
}

export default function ProductOfert({ cardStyles, image, price, productName, description, id, category }: ProductProps) {
    return (
        <div className={`${cardStyles} overflow-hidden flex flex-col gap-2 relative`}>
            <div className="relative w-full overflow-hidden h-72">
                <Image className="object-cover w-full duration-150 h-72 hover:scale-110" src={image} alt={image} width={300} height={400} />
                <PriceTag price={price} />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h2>{productName}</h2>
                <p>Categoria: {category}</p>
            </div>
            <Link href={`/products/${id}`} className={`${buttonVariants()} max-w-max m-3`}>
                Detalles
            </Link>
        </div>
    )
}