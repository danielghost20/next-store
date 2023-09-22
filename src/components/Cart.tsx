"use client";

import Image from "next/image";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiTrashAlt } from "react-icons/bi";
import { buttonVariants } from "./ui/button";

export default function Cart() {
    return (
        <div className="fixed top-0 right-0 z-10 flex flex-col justify-between w-full h-screen max-w-xs px-2 overflow-y-scroll border-l-2 bg-background">
            <div className="flex justify-between w-full mt-3">
                <span>Mi carro (4)</span>
                <Link href="/">Ver todo</Link>
            </div>
            <div className="w-full h-full py-3 overflow-y-scroll ">
                <div className="flex justify-between w-full p-4 mt-4 border-2 rounded-md">
                    <Image
                        src="/images/gorro.webp"
                        className=" w-14 h-14"
                        width={50}
                        height={50}
                        alt="gorro_images"
                    />
                    <div className="flex flex-col gap-4">
                        <h2>MOCHILA BACKPACK</h2>
                        <div className="flex w-full gap-3">
                            <span className="text-sm">Zise: 23</span>
                            <span className="text-sm">Color: white</span>
                        </div>
                        <span className="flex items-center gap-2 p-1 text-xs text-white border-2 rounded-lg max-w-max">
                            <LiaShippingFastSolid className="text-base" /> Envio gratis
                        </span>
                        <div className="flex justify-between w-full mt-1">
                            <span>- 1 +</span>
                            <span>$ 60.00</span>
                        </div>
                        <span className="flex items-center gap-2 ml-auto text-sm text-gray-500">
                            Remover producto | <BiTrashAlt />
                        </span>
                    </div>

                </div>
                <div className="flex justify-between w-full p-4 mt-4 border-2 rounded-md">
                    <Image
                        src="/images/gorro.webp"
                        className=" w-14 h-14"
                        width={50}
                        height={50}
                        alt="gorro_images"
                    />
                    <div className="flex flex-col gap-4">
                        <h2>MOCHILA BACKPACK</h2>
                        <div className="flex w-full gap-3">
                            <span className="text-sm">Zise: 23</span>
                            <span className="text-sm">Color: white</span>
                        </div>
                        <span className="flex items-center gap-2 p-1 text-xs text-white border-2 rounded-lg max-w-max">
                            <LiaShippingFastSolid className="text-base" /> Envio gratis
                        </span>
                        <div className="flex justify-between w-full mt-1">
                            <span>- 1 +</span>
                            <span>$ 60.00</span>
                        </div>
                        <span className="flex items-center gap-2 ml-auto text-sm text-gray-500">
                            Remover producto | <BiTrashAlt />
                        </span>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-full h-56 border-t-2 justify-evenly">
                <div className="flex justify-between w-full">
                    <span>Total de productos</span><span>$1200.00</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Con envio</span><span>$120.00</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Total</span><span>$1200.00</span>
                </div>
                <button className={`${buttonVariants()} w-full`}>Pagar</button>
            </div>
        </div>
    );
}
