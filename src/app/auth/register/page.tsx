"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { userSingUp } from "@/services/auth.services";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
type FormProps = {
    name: string;
    last_name: string;
    phoneNumber: number;
    email: string;
    password: string;
};

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormProps>();
    const router = useRouter();

    const onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {
        userSingUp(
            { email: data.email, password: data.password },
            {
                name: data.name,
                last_name: data.last_name,
                photoURL: "https://github.com/shadcn.png",
                phoneNumber: data.phoneNumber,
            }
        ).then((res: any) => {
            Cookie.set("token", res.accessToken);
            router.push("/");
        });
    };
    return (
        <main className="flex w-full min-h-screen">
            <Image
                className="object-cover w-1/2 h-screen"
                src="/images/shop-login.webp"
                width={1200}
                height={1300}
                alt="shop_image"
            />
            <div className="flex flex-col items-center justify-center w-1/2 h-screen">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md p-3 border-2 rounded-md"
                >
                    <h2 className="py-3 text-3xl font-medium">Registrate</h2>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="name">Nombre</label>
                        <Input
                            {...register("name", {
                                required: true,
                                maxLength: { value: 10, message: "Maximo 10 caracteres" },
                                minLength: { value: 3, message: "minimo 10 caracteres" },
                            })}
                            id="name"
                            name="name"
                            type="text"
                        />
                        {errors.name?.message ? (
                            <p className="text-base text-red-600">{errors.name.message}</p>
                        ) : (
                            <p className="py-3"></p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="last_name">Apellido</label>
                        <Input
                            {...register("last_name", {
                                required: true,
                                maxLength: { value: 13, message: "Maximo 13 caracteres" },
                                minLength: { value: 3, message: "Minimo 3 caracteres" },
                            })}
                            id="last_name"
                            name="last_name"
                            type="text"
                        />
                        {errors.last_name?.message ? (
                            <p className="text-base text-red-600">
                                {errors.last_name.message}
                            </p>
                        ) : (
                            <p className="py-2"></p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="phone">Numero de telefono</label>
                        <Input
                            {...register("phoneNumber", {
                                required: false,
                                maxLength: {
                                    value: 20,
                                    message: "Maximo 20 caracteres sin espacios",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Minimo 6 caracteres sin espacio ",
                                },
                            })}
                            id="phone"
                            name="phone"
                            type="number"
                        />
                        {errors.phoneNumber?.message ? (
                            <p className="text-base text-red-600">
                                {errors.phoneNumber.message}
                            </p>
                        ) : (
                            <p className="py-3"></p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="email">Correo</label>
                        <Input
                            {...register("email", {
                                required: true,
                                maxLength: { value: 50, message: "Maximo 50 caracteres" },
                                minLength: { value: 5, message: "Minimo 5 caracteres" },
                            })}
                            type="email"
                            name="email"
                            id="email"
                        />
                        {errors.email?.message ? (
                            <p className="text-base text-red-600">{errors.email.message}</p>
                        ) : (
                            <p className="py-3"></p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                        <label htmlFor="password">Contraseña</label>
                        <Input
                            {...register("password", {
                                required: true,
                                maxLength: { value: 15, message: "Maximo 15 caracteres" },
                                minLength: { value: 10, message: "Minimo 10 caracteres" },
                            })}
                            name="password"
                            id="password"
                            type="password"
                        />
                        {errors.password?.message ? (
                            <p className="text-base text-red-600">
                                {errors.password.message}
                            </p>
                        ) : (
                            <p className="py-3"></p>
                        )}
                    </div>
                    <button className={`${buttonVariants()} w-full`}>Registrate</button>
                    <div className="flex justify-center w-full gap-3 mt-2">
                        <span>¿Ya tienes una cuenta?</span>
                        <Link className="text-blue-500 border-b-2" href="/">
                            Registrate aqui
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
