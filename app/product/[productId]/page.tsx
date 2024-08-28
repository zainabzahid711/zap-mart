import Container from "@/app/components/container";
import { product } from "@/utils/product";
import ProductDetails from "./productDetails";
import ListRating from "./listRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

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
