import Product from "@/components/Product";
import { getProducts } from "@/services/productsPage.services";
import Navbar from "@/components/Navbar";

export default async function ProductsPage() {

    const products = await getProducts()
    return (
        <>
            <header className="fixed top-0 w-full h-20 border-b-2 bg-background">
                <Navbar search={true} />
            </header>

            <main className="flex w-full pt-20">
                <div className="flex flex-wrap justify-center w-full gap-5 mt-2">
                    {
                        products.map((product) => (
                            <Product
                                id={product.id}
                                description={product.description}
                                cardStyles="w-96 rounded-md border-2 h-96 p-3"
                                image={product.images[1]}
                                price={product.price}
                                productName={product.title}
                                key={product.id}
                                category={product.category.name}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    );
}
