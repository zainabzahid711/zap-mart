import Container from "@/app/components/container";
import ProductDetails from "./productDetails";
import ListRating from "./listRating";
import { products } from "@/utils/products";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    return (
      <Container>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-gray-500">
            Sorry the product your looking for does not exist.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
