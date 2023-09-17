import SelectItems from "@/components/SelectItems";
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from 'react-icons/bs'

export default async function productDetailsPage() {
    return (
        <div className="w-full max-w-xl px-2 m-auto mt-10">

            <h2 className="py-2 text-xl font-bold">Contacto</h2>
            <form className="flex flex-col w-full gap-3">
                <Input type="email" className="w-full" placeholder="Correo electronico" />
                <h2 className="text-xl font-bold">Direccion Completa</h2>
                <div className="py-1">
                    <SelectItems />
                </div>
                <div className="flex w-full gap-3">
                    <Input type="text" className="w-full" placeholder="Nombre" />
                    <Input type="text" className="w-full" placeholder="Apellido" />
                </div>
                <Input type="text" className="w-full py-3" placeholder="Direccion o referencia" />
                <div className="flex gap-3 py-2">
                    <Input type="text" placeholder="Ciudad" />
                    <Input type="text" placeholder="Pais" />
                    <Input type="number" placeholder="Codigo Postal" />
                </div>
            </form>
            <div className="flex items-center justify-between w-full gap-4 mt-4">
                <Link href='/' className='flex items-center gap-2 max-w-max'>
                    <BsArrowLeft />
                    Regresar
                </Link>
                <Link href='/' className={buttonVariants()}>
                    Continuar compra
                </Link>
            </div>
        </div>
    )
}