import { CartProductType } from "@/app/product/[productId]/productDetails";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[];
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("zapMartItems");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartProducts(parsedCart);
      setCartTotalQty(
        parsedCart.reduce(
          (acc: number, item: CartProductType) => acc + item.quantity,
          0
        )
      );
    }
  }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    console.log("Adding product to cart:", product);
    setCartProducts((prev) => {
      const productExists = prev.find((item) => item.id === product.id);
      let updatedCart;

      if (productExists) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        updatedCart = [...prev, product];
      }

      toast.success("Product added to cart");
      localStorage.setItem("zapMartItems", JSON.stringify(updatedCart));
      setCartTotalQty(
        updatedCart.reduce((acc, item) => acc + item.quantity, 0)
      );
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      setCartProducts((prev) => {
        const updatedCart = prev.filter((item) => item.id !== product.id);
        toast.success("Product removed from cart");
        localStorage.setItem("zapMartItems", JSON.stringify(updatedCart));
        setCartTotalQty(
          updatedCart.reduce((acc, item) => acc + item.quantity, 0)
        );
        return updatedCart;
      });
    },
    []
  );

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
