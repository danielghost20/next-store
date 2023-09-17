import Image from "next/image";

export default function PaymentSuccessPage() {
    return (
        <>
            <main className="w-full m-auto mt-10">
                <div className="flex flex-col w-full max-w-3xl gap-4 p-2 m-auto border-2 rounded-md">
                    <h2 className="text-xl">Pago hecho correctamente</h2>
                    <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis consectetur distinctio animi minima voluptatibus magnam dolore, quo, fuga fugit ea vitae alias cupiditate at harum facere, recusandae similique temporibus.</p>
                    <Image src='/images/vaso.webp' className="w-full max-w-md m-auto" width={500} height={500} alt="product_image" />
                </div>
            </main>
        </>
    )
}