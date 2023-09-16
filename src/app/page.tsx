import ProductOfert from "@/components/ProductOfert";
import { getProducts } from "@/services/products.services";

export default async function Home() {

  const products = await getProducts()
  console.log(products)

  return (
    <>
      <header className="grid w-full h-[900px] grid-cols-2 grid-rows-2 gap-4 px-3 m-auto max-w-screen-2xl">
        {/* <ProductOfert cardStyles="w-full h-full  border-2 rounded-md row-start-1 row-end-3 col-start-1 col-end-2 " image='../../images/sudadera.webp' />
        <ProductOfert cardStyles="w-full h-full  border-2 rounded-md row-start-1 row-end-2 col-start-2 col-end-3 " image='../../images/vaso.webp' />
        <ProductOfert cardStyles="w-full h-full  border-2 rounded-md  col-start-2 col-end-3" image='../../images/gorro.webp' /> */}
      </header>
      <main>
        <h2>Mas Articulos</h2>
        <section className="flex flex-wrap gap-10 p-3 mt-5 justify-evenly">
          {/* {
            products?.data.map((product) => (
              <ProductOfert key={product.id} price={product.price} image={product.images[1]} cardStyles="w-340px"  />
            ))
          } */}
        </section>
      </main>
    </>
  );
}
