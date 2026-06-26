import Link from "next/link";
import getProducts from "../../database/product";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = getProducts();

  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-y-12 gap-x-10 mx-24 my-12 items-stretch">
      {
        products.map((product) => {
          return (

              <ProductCard key={product.id} product = {product}></ProductCard>

          )

        })
      }
    </div>
  );
}
