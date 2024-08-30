"use client";

import { CartProductType } from "../product/[productId]/productDetails";
import { formatPrice } from "@/utils/formatePrice";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";
import Image from "next/image";
import SetQuantity from "../components/products/setQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  console.log("Item data:", item);
  const { handleRemoveProductFromCart } = useCart();
  return (
    <>
      <div>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-50 p-4 items-center">
        <div className="col-span-2 justify-slef-start flex gap-2 md:gap-4">
          <Link href={`/product/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
              <Image
                src={item.selectedImg.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-between ">
            <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
            <div>{item.selectedImg.color} </div>
            <div className="w-[70px]">
              <button
                onClick={() => handleRemoveProductFromCart(item)}
                className="text-slate-500 underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-slef-center">
          <SetQuantity
            cartCounter
            cartProduct={item}
            handleQtyIncrease={() => {}}
            handleQtyDecrease={() => {}}
          />
        </div>
        <div className="justify-self-end font-semibold">
          {formatPrice(item.price * item.quantity)}
        </div>
        console.log("Cart products:", cartProducts);
      </div>
    </>
  );
};

export default ItemContent;
