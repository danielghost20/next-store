import Product from "@/components/Product"; 
import { getProducts } from "@/services/productsHome.services";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { DocumentData } from "firebase/firestore";


export default async function Home() {


  const products = await getProducts();

  if (!products) return <div>CArgando productos...</div>


  return (
    <>
      <header className="w-full">
        <Navbar search={true} />
        <div className="w-full px-4">
        <div className="w-full m-auto gap-4 h-screen grid grid-cols-2 grid-rows-2">
          <div className="w-full h-full col-start-1 col-end-2 row-start-1 row-end-3 rounded-md border-2 flex justify-center items-center">
            <Image alt="image_product" width={300} height={300} src='/images/sudadera.webp' className="object-cover w-1/2" />
          </div>
          <div className="w-full h-full rounded-md col-start-2 col-end-3 border-2 flex justify-center items-center">
            <Image alt="image_product" width={300} height={300} src='/images/gorro.webp' className="object-contain w-1/2" />
          </div>
          <div className="w-full h-full rounded-md col-start-2 col-end-3 row-start-2 row-end-3 border-2 flex justify-center items-center">
            <Image alt="image_product" width={300} height={300} src='/images/vaso.webp' className="w-1/3" />
          </div>
        </div>
        </div>
      </header>

      <main className="m-auto mb-20 max-w-screen-2xl">
        <h2 className="py-5 text-3xl text-center">Mas Articulos</h2>
        <section className="flex flex-wrap gap-10 p-3 mt-5 justify-evenly">
          {products.map((product: DocumentData) => (
            <Product
              id={product.id}
              key={product.id}
              price={product.price}
              image={product.image}
              cardStyles="w-[340px] h-[400px] border-2  rounded-md"
              productName={product.title}
              description={product.description}
              category={product.category.name}
            />
          ))}
        </section>
      </main>
      <footer className="flex items-center w-full py-6 border-2 justify-evenly px-7 ">
        <div className="flex flex-col gap-3">
          <h2>COMPANY</h2>
          <p className="w-full max-w-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eaque suscipit quod nam iure sunt soluta? Eos veritatis odio eligendi dignissimos ipsam libero. Rem temporibus doloremque repudiandae maiores blanditiis saepe.</p>
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
