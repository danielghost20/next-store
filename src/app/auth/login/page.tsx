"use client";
import Cookie from 'js-cookie'
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeft } from "react-icons/bs";
import { userSingIn } from "@/services/auth.services";
import { useForm, SubmitHandler } from "react-hook-form";
import { Credentials } from "@/interfaces/auth.interface";


export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Credentials>()

    const onSubmit: SubmitHandler<Credentials> = (data: Credentials) => {
        userSingIn({ email: data.email, password: data.password })
            .then((res: any) => { Cookie.set('token', res.accessToken) })
            .catch(err => console.log('hubo un error'))
    }

    return (
        <main className="flex w-full h-screen">
            <div className="w-1/2">
                <Image
                    className="object-cover w-full h-full"
                    src="/images/shop-login.webp"
                    width={1200}
                    height={1300}
                    alt="shop_image"
                />
            </div>
            <div className="flex items-center justify-center w-1/2 px-2 ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-sm gap-5 p-4 border-2 rounded-md ">
                    <h2 className="text-xl text-center">Iniciar Secion</h2>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">Correo</label>
                        <Input {...register('email', { required: true, maxLength: { value: 40, message: 'Maximo 20 caracteres' }, minLength: { value: 5, message: 'Minimo 5 caracteres' } })} name="email" id="email" type="email" placeholder="example@gmail.com" />
                        {errors.email?.message ? <p className="text-base text-red-500">{errors.email.message}</p> : <p className="py-2"></p>}
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="password">Password</label>
                        <Input {...register('password', { required: true, maxLength: { value: 30, message: 'Maximo 15 caracteres' }, minLength: { value: 5, message: 'Minimo 5 caracteres' } })} name="password" id="password" type="text" placeholder="213j432-fdjSS12" />
                        {errors.password?.message ? <p className="text-base text-red-500">{errors.password.message}</p> : <p className="py-2"></p>}
                    </div>
                    <button type="submit" className="w-full px-3 py-2 border-2 rounded-md bg-background text-foreground">
                        Iniciar Sesion
                    </button>
                    <button
                        className={`${buttonVariants()} w-full flex gap-3 items-center`}
                    >
                        <FcGoogle /> Continuar con Google
                    </button>
                    <div className="flex items-center justify-between w-full">
                        <Link
                            className="flex items-center gap-2 py-1 text-sm max-w-max"
                            href="/"
                        >
                            <BsArrowLeft />
                            Regresar
                        </Link>
                        <Link href="/" className="text-sm text-blue-500">
                            Crea una cuenta aqui
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
