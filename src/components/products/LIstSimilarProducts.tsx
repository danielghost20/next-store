import { Category, Product as ProductType } from "@/interfaces/product.interface"
import { getSimilarProducts } from "@/services/productsPage.services"
import Product from "../Product"


export default async function ListSimilarProducts (category: Category) {
  
    const products = await getSimilarProducts(category) as ProductType[]
  
    return (
    <div className="flex gap-3 w-full">
        {
            products.map(prod => (
                <Product key={prod.id} category={prod.category} description={prod.description} id={prod.id} image={prod.image} price={prod.price} productName={prod.title}  />
            ))
        }
    </div>
  )   
}