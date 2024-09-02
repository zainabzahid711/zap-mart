"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/heading";
import Button from "../components/button";
import ItemContent from "./itemContent";
import { formatPrice } from "@/utils/formatePrice";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">:/Your Cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>start shoping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <Heading title="Shopping Cart" center />
        <div className="grid grid-cols-5 textxs gap-4 pb-2 items-center mt-8">
          <div className="col-span-2 justify-self-start">product</div>
          <div className="justify-self-center">price</div>
          <div className="justify-self-center">quantity</div>
          <div className="justify-self-end">total</div>
        </div>
        <div>
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((item) => (
              <ItemContent key={item.id} item={item} />
            ))
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
        <div className="border-t[1.5px] border-slate-200 py-4 flex justify-between gap-4">
          <div className="w-[90px]">
            <Button
              label="clear cart"
              onClick={() => {
                handleClearCart();
              }}
              small
              outline
            />
          </div>
          <div className="mt-32 text-sm flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold">
              <span>SubTotal</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>
            <p className="text-slate-500">
              Taxes and shipping calculate at checkout
            </p>
            <Button outline label="checkout" onClick={() => {}} />
            <Link
              href={"/"}
              className="text-slate-500 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>countinue shoping</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartClient;
