import PriceTag from "@/components/PriceTag";
import ProductOfert from "@/components/ProductOfert";
import { Products } from "@/interfaces/product.interface";
import { getProducts } from "@/services/productsHome.services";
import Image from "next/image";
import Link from 'next/link';
import { FiGithub, FiShoppingBag } from 'react-icons/fi'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { ModeToggle } from '../components/ui/ModeToggle'

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <header>
        <nav className="flex items-center justify-between w-full h-20 px-3 bordder-b-2">
          <Link className='p-2 border-2 rounded-md' href='/'>
            <FiShoppingBag className="text-xl" />
          </Link>
          <h2 className='text-3xl font-semibold'>SHOP DANIDV</h2>
          <div className='flex gap-2'>
            <a className='flex items-center p-2 border-2 rounded-md'>
              <FiGithub className="text-xl" />
            </a>
            <span className='flex items-center p-1 border-2 rounded-md'>
              <LiaShoppingCartSolid className="text-3xl" />
            </span>
            <ModeToggle />
          </div>
        </nav>
        <div className="flex items-center justify-center w-full gap-4 py-3 my-10 border-y-2">
          <Link className="text-lg" href='/products'>Productos</Link>
          <Link className="text-lg" href='/'>Ofertas</Link>
          <Link className="text-lg" href='/'>Articulos</Link>
          <Link className="text-lg" href='/'>Lo nuevo</Link>
        </div>
        <div className="grid w-full h-[900px] grid-cols-2 grid-rows-2 gap-4 px-3 m-auto max-w-screen-2xl">
          <div className="relative flex items-center justify-center w-full h-full row-start-1 row-end-3 border-2 rounded-md ">
            <Image
              className=" w-[50%]"
              src="/../../images/sudadera.webp"
              width={400}
              height={400}
              alt="product_image"
            />
            <PriceTag price={300} />
          </div>
          <div className="relative flex items-center justify-center w-full h-full col-start-2 col-end-3 row-start-1 row-end-2 border-2 rounded-md">
            <Image
              className=" w-[50%]"
              src="/../../images/vaso.webp"
              width={400}
              height={400}
              alt="product_image"
            />
            <PriceTag price={450} />
          </div>
          <div className="relative flex items-center justify-center w-full h-full col-start-2 col-end-3 row-start-2 row-end-3 border-2 rounded-md">
            <Image
              className=" w-[50%]"
              src="/../../images/gorro.webp"
              width={300}
              height={400}
              alt="product_image"
            />
            <PriceTag price={800} />
          </div>
        </div>
      </header>

      <main className="m-auto mb-20 max-w-screen-2xl">
        <h2 className="py-5 text-3xl text-center">Mas Articulos</h2>
        <section className="flex flex-wrap gap-10 p-3 mt-5 justify-evenly">
          {products.map((product: Products) => (
            <ProductOfert
              id={product.id}
              key={product.id}
              price={product.price}
              image={product.images[0]}
              cardStyles="w-[340px] h-[400px] border-2  rounded-md"
              productName={product.title}
              description={product.description}
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
