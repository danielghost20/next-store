import Product from "@/components/Product";
import { Products } from "@/interfaces/product.interface";
import { getProducts } from "@/services/productsHome.services";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {BiGhost} from 'react-icons/bi'
import Link from "next/link";

export default async function Home() {

  const products = await getProducts();



  return (
    <>
      <header>
        <Navbar search={true} />
        <div className="w-full flex flex-col items-center gap-3">
          <h1 className="flex text-6xl gap-3 my-3 items-center font-extrabold">Ghost <BiGhost/> Shop</h1>
          <ul className="flex justify-center gap-5 my-3">
            <li>
              <Link className="text-xl font-bold" href='/profile'>
              Perfil
              </Link>
            </li>
            <li>
              <Link className="text-xl font-bold" href='/products'>
              Productos
              </Link>
            </li>
          </ul>
        </div>
        <Image className="max-w-screen-2xl w-full object-cover m-auto" src='/images/e-commerce.webp' alt="image_promotion" width={1200} height={900} />
      </header>

      <main className="m-auto mb-20 max-w-screen-2xl">
        <h2 className="py-5 text-3xl text-center">Mas Articulos</h2>
        <section className="flex flex-wrap gap-10 p-3 mt-5 justify-evenly">
          {products.map((product: Products) => (
            <Product
              id={product.id}
              key={product.id}
              price={product.price}
              image={product.images[1]}
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
