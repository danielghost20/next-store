import Image from "next/image";
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { RiVisaLine } from 'react-icons/ri'


export default function PaymentConfirmPage() {
    return (
        <>
            <main className="w-full p-5 m-auto mt-10">
                <div className="flex justify-between w-full max-w-4xl gap-4 p-2 m-auto bg-green-200 dark:bg-[#C6DE41] rounded-md text-background">
                    <div>
                        <BsFillCheckSquareFill className="mt-2 text-4xl text-background" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-black">Tarjeta comprobada</h1>
                        <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor ab earum, repellat quae, commodi vero repudiandae neque et sapiente nemo. Libero voluptatem inventore quis quibusdam expedita sed necessitatibus laudantium?</p>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-4xl gap-8 p-2 m-auto mt-2 border-2 rounded-md">
                    <h2 className="text-2xl font-semibold">Datos de pago</h2>
                    <div className="flex w-full mt-3 justify-evenly">
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-3 justify-evenly">
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                        <div className="w-full max-w-max">
                            <h3 className="font-bold">Informacion</h3>
                            <span className="text-gray-500">ipsam, voluptates</span>
                        </div>
                    </div>
                    <div className="w-full max-w-xs p-2 duration-200 bg-gray-200 border-2 rounded-md dark:bg-gray-900 text-foreground">
                        <RiVisaLine className="text-6xl" />
                        <span className="my-3 text-xl font-semibold text-center ">1234 1234 1231 3232</span>
                        <div className="flex justify-between w-full my-2">
                            <span className="text-lg">12/23</span>
                            <span className="text-lg">- - -</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}