"use client";

import Button from "@/app/components/button";
import ProductImage from "@/app/components/products/productsImage";
import SetColor from "@/app/components/products/setColor";
import SetQuantity from "@/app/components/products/setQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30% my-2]" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const ProductRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback((value: selectedImgType) => {
    setCartProduct((prev) => {
      return { ...prev, selectedImg: value };
    });
  }, []);

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
        <div className="flex flex-col gap-1 text-slate-400 text-sm">
          <h2 className="text-3xl font-medium text-white"> {product.name} </h2>
          <div className="flex items-center gap-2">
            <Rating value={ProductRating} readOnly />
            <div>{product.reviews.length} reviews</div>
          </div>
          <Horizontal />
          <div className="text-justify"> {product.description} </div>
          <Horizontal />
          <div>
            <span className="font-semibold"> CATEGORY : </span>
            {product.category}
          </div>
          <div>
            <span className="font-semibold"> BRAND : </span>
            {product.brand}
          </div>
          <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
            {product.inStock ? "In-stock" : "out of stock"}
          </div>
          <Horizontal />

          <div>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handColorSelect={handleColorSelect}
            />
          </div>

          <Horizontal />

          <SetQuantity
            cartProduct={cartProduct}
            handleQtyDecrease={handleQtyDecrease}
            handleQtyIncrease={handleQtyIncrease}
          />
          <Horizontal />
          <div className="max-w-[300px]">
            <Button outline label="Add to cart" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
