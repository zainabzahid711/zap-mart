import Image from "next/image";
import Container from "./components/container";
// "use-client"
export const revalidate = 0;

import HomeBanner from "./components/homeBanner";
import { products } from "@/utils/products";
import ProductCart from "./components/products/productsCart";

export default function Home() {
  return (
    // <div className="p-4">
    <>
      <div>
        <HomeBanner />
      </div>
      <div>
        {/* <Container> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCart key={product.id} data={product} />;
          })}
        </div>
        {/* </Container> */}
      </div>
    </>
    // </div>
  );
}
