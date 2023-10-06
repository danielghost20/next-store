"use client";
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContact } from "@/interfaces/payment.interface";
import { useRouter } from "next/navigation";
import { usePaymentContext } from "@/context/PaymentContext";

export default function ProductDetailsPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserContact>();
    const {
        features: { addUserAddress },
    } = usePaymentContext();

    const onSubmit: SubmitHandler<UserContact> = (data: UserContact) => {
        addUserAddress(data)
        router.push('/payment/product-details/payment-card')
    };
    return (
        <div className="w-full max-w-xl px-2 m-auto mt-10">
            <h2 className="py-2 text-xl font-bold">Contacto</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-3"
            >
                <Input
                    {...register("email", {
                        required: true,
                        maxLength: { value: 60, message: "maximo 60 caracteres" },
                        minLength: { value: 5, message: "minimo 5 caracteres" },
                    })}
                    type="email"
                    className="w-full"
                    placeholder="Correo electronico"
                />
                {errors.email?.message ? (
                    <span className="py-2 text-red-600">{errors.email.message}</span>
                ) : (
                    <span className="py-2 text-red-600"></span>
                )}
                <h2 className="text-xl font-bold">Direccion Completa</h2>

                <div className="flex w-full gap-3">
                    <div className="flex flex-col">
                        <Input
                            {...register("name", {
                                required: true,
                                maxLength: { value: 14, message: "maximo 14 caracteres" },
                                minLength: { value: 2, message: "minimo 2 caracteres" },
                            })}
                            type="text"
                            className="w-full"
                            placeholder="Nombre"
                        />
                        {errors.name?.message ? (
                            <span className="py-2 text-red-600">{errors.name.message}</span>
                        ) : (
                            <span className="py-2 text-red-600"></span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Input
                            {...register("last_name", {
                                required: true,
                                maxLength: { value: 15, message: "maximo 15 caracteres" },
                                minLength: { value: 2, message: "minimo 2 caracteres" },
                            })}
                            type="text"
                            className="w-full"
                            placeholder="Apellido"
                        />
                        {errors.last_name?.message ? (
                            <span className="py-2 text-red-600">
                                {errors.last_name.message}
                            </span>
                        ) : (
                            <span className="py-2"></span>
                        )}
                    </div>
                </div>
                <Input
                    {...register("reference_address", {
                        required: true,
                        maxLength: { value: 200, message: "maximo 200 caracteres" },
                        minLength: { value: 10, message: "introduce una direccion valida" },
                    })}
                    type="text"
                    className="w-full py-3"
                    placeholder="Direccion o referencia"
                />
                {errors.reference_address?.message ? (
                    <span className="py-2 text-red-600">
                        {errors.reference_address.message}
                    </span>
                ) : (
                    <span className="py-2"></span>
                )}
                <div className="flex gap-3 py-2">
                    <div className="flex flex-col">
                        <Input
                            {...register("city", {
                                required: true,
                                maxLength: { value: 25, message: "maximo 25 caracteres" },
                            })}
                            type="text"
                            placeholder="Ciudad"
                        />
                        {errors.city?.message ? (
                            <span className="py-2 text-red-600">{errors.city.message}</span>
                        ) : (
                            <span className="py-2"></span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Input
                            {...register("country", {
                                required: true,
                                maxLength: { value: 15, message: "maximo 15 caracteres" },
                            })}
                            type="text"
                            placeholder="Pais"
                        />
                        {errors.country?.message ? (
                            <span className="py-2 text-red-600">
                                {errors.country.message}
                            </span>
                        ) : (
                            <span className="py-2"></span>
                        )}
                    </div>
                    <div>
                        <Input
                            {...register("postal_code", {
                                required: true,
                                maxLength: { value: 7, message: "maximo 7 caracteres" },
                            })}
                            type="text"
                            placeholder="Codigo Postal"
                        />
                        {errors.postal_code?.message ? (
                            <span className="py-2 text-red-600">
                                {errors.postal_code.message}
                            </span>
                        ) : (
                            <span className="py-2"></span>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-4 mt-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 max-w-max"
                    >
                        <BsArrowLeft />
                        Regresar
                    </button>
                    <button
                        type="submit"
                        className={`${buttonVariants()}  `}
                    >
                        Continuar compra
                    </button>
                </div>
            </form>

        </div>
    );
}
