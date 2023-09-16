import Image from "next/image";
import React from "react";
import PriceTag from "./PriceTag";

type ProductProps = {
    cardStyles?: string,
    image: string,
    price: number,
    productName?: string
}

export default function ProductOfert({ cardStyles, image, price }: ProductProps) {
    return (
        <div className={`${cardStyles}  overflow-hidden flex relative items-center justify-center w-full`}>
            <Image className="object-cover w-1/2 duration-150 hover:scale-110" src={`/${image}`} alt={image} width={300} height={400} />
            <PriceTag price={price} />
        </div>
    )
}