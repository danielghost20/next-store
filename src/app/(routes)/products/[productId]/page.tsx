import { LiaShoppingCartSolid } from "react-icons/lia";
import {
    getProductById,
} from "@/services/productsPage.services";
import { Product as ProductType } from "@/interfaces/product.interface";
import Image from "next/image";
import ButtonBuy, { ButtonAdd } from "@/components/ButtonClient";
import Navbar from "@/components/Navbar";
import ListSimilarProducts from "@/components/products/LIstSimilarProducts";
import { Suspense } from "react";

export default async function ProductPage({
    params,
}: {
    params: { productId: string };
}) {
    const product = await getProductById(params.productId) as ProductType;
    

    return (
        <>
            <header className="w-full">
                <Navbar search={true} />
            </header>
            <main className="m-auto mt-10 max-w-screen-2xl">
                <div className="flex justify-center w-full  gap-10 px-3">
                    <div className="max-w-xl">
                        <Image
                            src={product.image}
                            width={500}
                            height={500}
                            alt={product.image}
                        />
                    </div>
                    <div className="flex flex-col max-w-lg gap-5">
                        <h2 className="text-3xl font-semibold">{product.title}</h2>
                        <p className="text-lg">{product.description}</p>
                        <p className="text-lg">Price: ${product.price} MNX</p>
                        <p className="text-lg">Categoria: {product.category.name}</p>
                        <div className="flex gap-5">
                            <ButtonAdd item={{
                                amount: 1,
                                category: product.category.name,
                                id: product.id,
                                image: product.image,
                                name: product.title,
                                price: product.price
                            }}>
                                Agregar al <LiaShoppingCartSolid className="text-lg" />
                            </ButtonAdd>
                            <ButtonBuy
                                amount={1}
                                category={product.category.name}
                                id={product.id}
                                image={product.image}
                                price={product.price}
                                name={product.title}
                            />
                        </div>
                    </div>
                </div>
                <h2 className="py-4 text-2xl text-center">Productos similares</h2>
                <section className="flex flex-wrap justify-center w-full gap-4 px-4">
                    <Suspense fallback={<div>Cargando...</div>}>
                    <ListSimilarProducts color={product.category.color} name={product.category.name} />
                    </Suspense>
                </section>
            </main>
            <footer className="flex items-center w-full py-6 mt-10 border-2 justify-evenly px-7 ">
                <div className="flex flex-col gap-3">
                    <h2>COMPANY</h2>
                    <p className="w-full max-w-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eaque
                        suscipit quod nam iure sunt soluta? Eos veritatis odio eligendi
                        dignissimos ipsam libero. Rem temporibus doloremque repudiandae
                        maiores blanditiis saepe.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Marca</a>
                    <a>Galeria</a>
                    <a>Dashboard</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Contacto</a>
                    <a>Servicios</a>
                    <a>Desarrollo</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a>Contacto</a>
                    <a>Servicios</a>
                    <a>Desarrollo</a>
                </div>
            </footer>
        </>
    );
}
