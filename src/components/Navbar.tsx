"use client";

import Link from "next/link";
import { FiGithub, FiShoppingBag } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { ModeToggle } from "./ui/ModeToggle";
import { userGetProfile } from "@/services/user.services";
import { useContext, useEffect, useState } from "react";
import { UserData } from "@/interfaces/user.interface";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "./ui/button";
import cartContext from "@/context/CartContext";
import { userSingOut } from "@/services/auth.services";
import { auth } from "@/app/firebase";


export default function Navbar() {
    const [user, setUser] = useState<undefined | UserData>(undefined);

    const { features: { handleShowCart } } = useContext(cartContext)

    useEffect(() => {
        userGetProfile()
            .then(credentials => setUser(user))
    }, []);



    return (
        <nav className="flex items-center justify-between w-full h-20 px-3 bordder-b-2">
            <div className="flex gap-2">
                <Link className="p-2 border-2 rounded-md" href="/">
                    <FiShoppingBag className="text-xl" />
                </Link>
                {user !== undefined ? (
                    <>
                        <Avatar>
                            <AvatarImage
                                src={
                                    user.photoURL ? user.photoURL : "https://github.com/shadcn.png"
                                }
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <button onClick={userSingOut}>
                            salir
                        </button>
                    </>
                ) : (
                    <Link
                        href="/auth/register"
                        className={`${buttonVariants()} max-w-max`}
                    >
                        Registrate
                    </Link>
                )}
            </div>

            <h2 className="text-3xl font-semibold">SHOP DANIDV</h2>
            <div className="flex gap-2">
                <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
                    <FiGithub className="text-xl" />
                </a>
                <span onClick={handleShowCart} className="flex items-center p-1 border-2 rounded-md cursor-pointer">
                    <LiaShoppingCartSolid className="text-3xl" />
                </span>
                <ModeToggle />
            </div>
        </nav>
    );
}
