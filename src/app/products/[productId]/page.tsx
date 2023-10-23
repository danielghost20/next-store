import Link from "next/link";
import { LiaShoppingCartSolid } from "react-icons/lia";
import {
    getProductById,
    getSimilarProductsByCategory,
} from "@/services/productsPage.services";
import Product from "@/components/Product";
import { Products } from "@/interfaces/product.interface";
import Image from "next/image";
import ButtonBuy, { ButtonAdd } from "@/components/ButtonClient";
import Navbar from "@/components/Navbar";

export default async function ProductPage({
    params,
}: {
    params: { productId: number };
}) {
    const product = await getProductById(params.productId);
    const productsByCategory = await getSimilarProductsByCategory(product.category.id);
    const prod = {
        amount: 1,
        category: product.category.name,
        id: product.id,
        image: product.images[1],
        name: product.title,
        price: product.price,
    };

    return (
        <>
            <header className="w-full">
                <Navbar search={true} />
            </header>
            <main className="m-auto mt-10 max-w-screen-2xl">
                <div className="flex justify-center w-full min-h-screen gap-10 px-3">
                    <div className="max-w-xl">
                        <Image
                            src={product.images[1]}
                            width={500}
                            height={500}
                            alt={product.images[1]}
                        />
                    </div>
                    <div className="flex flex-col max-w-lg gap-5">
                        <h2 className="text-3xl font-semibold">{product.title}</h2>
                        <p className="text-lg">{product.description}</p>
                        <p className="text-lg">Price: ${product.price} MNX</p>
                        <p className="text-lg">Categoria: {product.category.name}</p>
                        <div className="flex gap-5">
                            <ButtonAdd item={prod}>
                                Agregar al <LiaShoppingCartSolid className="text-lg" />
                            </ButtonAdd>
                            <ButtonBuy
                                amount={prod.amount}
                                category={prod.category}
                                id={prod.id}
                                image={prod.image}
                                price={prod.price}
                                name={prod.name}
                            />
                        </div>
                    </div>
                </div>
                <h2 className="py-4 text-2xl text-center">Productos similares</h2>
                <section className="flex flex-wrap justify-between w-full gap-4 px-4">
                    {
                        productsByCategory.map((product: Products) => (
                            <Product
                                category={product.category.name}
                                cardStyles="w-[340px] h-[400px] border-2 p-4  rounded-md"
                                description={product.description}
                                id={product.id}
                                image={product.images[1]}
                                price={product.price}
                                productName={product.title}
                                key={product.id}
                            />
                        ))
                    }
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
