import Link from "next/link";
import { FiShoppingBag, FiSearch, FiGithub } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Input } from "@/components/ui/Input";
import {
    getProductById,
    getSimilarProducts,
} from "@/services/productsPage.services";
import ViewImagesProduct from "@/components/ViewImagesProduct";
import ProductOfert from "@/components/ProductOfert";
import { Products } from "@/interfaces/product.interface";
import { buttonVariants } from "@/components/ui/button";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default async function ProductPage({
    params,
}: {
    params: { productId: number };
}) {
    const product = await getProductById(params.productId);
    const productsByCategory = getSimilarProducts(product.category.id);

    return (
        <>
            <header className="w-full h-20">
                <nav className="flex items-center justify-between w-full h-full px-3 bordder-b-2">
                    <Link className="p-2 border-2 rounded-md" href="/">
                        <FiShoppingBag className="text-xl" />
                    </Link>
                    <div className="flex items-center gap-3 border-2 rounded-md px-2 pý-5">
                        <Input
                            type="search"
                            placeholder="Buscar"
                            className="border-none outline-none w-96"
                        />
                        <FiSearch className="text-xl" />
                    </div>
                    <div className="flex gap-2">
                        <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
                            <FiGithub className="text-xl" />
                        </a>
                        <span className="flex items-center p-1 border-2 rounded-md cursor-pointer">
                            <LiaShoppingCartSolid className="text-3xl" />
                        </span>
                        <ModeToggle />
                    </div>
                </nav>
            </header>
            <main className="m-auto mt-10 max-w-screen-2xl">
                <div className="flex justify-center w-full min-h-screen gap-10 px-3">
                    <div className="max-w-xl">
                        <ViewImagesProduct images={product.images} />
                    </div>
                    <div className="flex flex-col max-w-lg gap-5">
                        <h2 className="text-3xl font-semibold">{product.title}</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos quos corrupti, est ratione, delectus quod ab quis,
                            voluptas ipsum praesentium animi quisquam tempore? Eaque beatae in
                            aperiam, fugiat veritatis sint.
                        </p>
                        <p className="text-lg">Price: ${product.price} MNX</p>
                        <p className="text-lg">Categoria: {product.category.name}</p>
                        <div className="flex gap-5">
                            <button className={`${buttonVariants()} flex gap-2 max-w-max`}>
                                Agregar al <LiaShoppingCartSolid className="text-lg" />
                            </button>
                            <Link
                                href="/"
                                className={`${buttonVariants()} bg-background flex gap-2 text-foreground`}
                            >
                                Comprar <FaMoneyCheckAlt className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className="py-4 text-2xl text-center">Productos similares</h2>
                <section className="flex justify-between w-full px-4">
                    {(await productsByCategory).map((product: Products) => (
                        <ProductOfert
                            category={product.category.name}
                            cardStyles="w-[340px] h-[400px] border-2 p-4  rounded-md"
                            description={product.description}
                            id={product.id}
                            image={product.images[0]}
                            price={product.price}
                            productName={product.title}
                            key={product.id}
                        />
                    ))}
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
