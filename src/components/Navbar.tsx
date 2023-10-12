"use client"

import Link from "next/link";
import { FiGithub, FiShoppingBag } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { ModeToggle } from "./ui/ModeToggle";
import InputSearch from "./InputSearch";
import { useCartContext } from "@/context/CartContext";
import { userSingOut } from "@/services/auth.services";


export default function Navbar({ search }: { search: boolean }) {

    const { features: { handleShowCart } } = useCartContext()


    return (
        <nav className="flex items-center justify-between w-full h-20 px-3 bordder-b-2">
            <div className="flex gap-2">
                <Link className="p-2 border-2 rounded-md" href="/">
                    <FiShoppingBag className="text-xl" />
                </Link>
            </div>
            {
                search ?
                    <InputSearch />
                    :
                    <h2 className="text-3xl font-semibold">SHOP DANIDV</h2>

            }
            <div className="flex gap-2">
                <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
                    <FiGithub className="text-xl" />
                </a>
                <span onClick={handleShowCart} className="flex items-center p-1 border-2 rounded-md cursor-pointer">
                    <LiaShoppingCartSolid className="text-3xl" />
                </span>
                <ModeToggle />
                <button onClick={userSingOut}>dasd</button>
            </div>
        </nav>
    );
}
