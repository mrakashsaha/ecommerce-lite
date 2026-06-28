import Link from "next/link";
import getProducts from "../../database/product";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/db/prisma";

// export const revalidate = 5;

export default async function Home() {
  const products = await prisma.product.findMany();



  const users = await (await fetch("https://jsonplaceholder.typicode.com/users", {next: {tags: ['revalTag']}})).json();

  return (
    <>

      <div className="grid grid-cols-4 gap-y-12 gap-x-10 mx-24 my-12 items-stretch">
        {
          products.map((product) => {
            return (

              <ProductCard key={product.id} product={product}></ProductCard>

            )

          })
        }
      </div>
    </>

  );
}
