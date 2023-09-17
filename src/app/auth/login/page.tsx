import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc'
import { BsArrowLeft } from 'react-icons/bs'

export default async function LoginPage() {
    return (
        <main className="flex w-full h-screen">
            <div className="w-1/2">
                <Image className="object-cover w-full h-full" src='/images/shop-login.webp' width={1200} height={1300} alt="shop_image" />
            </div>
            <div className="flex items-center justify-center w-1/2 px-2 ">
                <form className="flex flex-col w-full max-w-sm gap-5 p-4 border-2 rounded-md ">

                    <h2 className="text-xl text-center">Iniciar Secion</h2>
                    <div className="flex flex-col gap-3">
                        <label>Correo</label>
                        <Input type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label>Password</label>
                        <Input type="password" placeholder="213j432-fdjSS12" />
                    </div>
                    <button className="w-full px-3 py-2 border-2 rounded-md bg-background text-foreground">Iniciar Sesion</button>
                    <button className={`${buttonVariants()} w-full flex gap-3 items-center`}><FcGoogle /> Continuar con Google</button>
                    <div className="flex items-center justify-between w-full">
                        <Link className="flex items-center gap-2 py-1 text-sm max-w-max" href='/'>
                            <BsArrowLeft />
                            Regresar
                        </Link>
                        <Link href='/' className="text-sm text-blue-500">
                            Crea una cuenta aqui
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}