"use client";

import { FiGithub } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import InputSearch from "./InputSearch";
import { useCartContext } from "@/context/CartContext";
import { BiGhost } from "react-icons/bi"; // Icono de la libreria react-icons
import Dropdown from "./DropDown";
import Link from "next/link";

export default function Navbar({ search }: { search: boolean }) {
  const {
    features: { handleShowCart },
  } = useCartContext();

  return (
    <nav className="bg-background">
      <div className="flex items-center  justify-between w-full h-20 px-3 bordder-b-2">
        <Link href='/' className="flex gap-2 items-center">
          <BiGhost className="text-2xl" />
          <h1 className="text-xl my-3 font-semibold">Shop</h1>
        </Link>
       {/* {search ? (
          <InputSearch />
      ) : (
     <h2 className="text-3xl font-semibold">SHOP DANIDV</h2>
       )}  */}
        <div className="flex gap-2">
          <Dropdown />
          <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
            <FiGithub className="text-xl" />
          </a>
          <span
            onClick={handleShowCart}
            className="flex items-center p-1 border-2 rounded-md cursor-pointer"
          >
            <LiaShoppingCartSolid className="text-3xl" />
          </span>
        </div>
      </div>
    </nav>
  );
}
