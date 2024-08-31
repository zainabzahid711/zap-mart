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
  handleQtyIncrease: (product: CartProductType) => void;
  handleQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  console.log("qty", cartTotalQty);
  console.log("amount", cartTotalAmount);

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("zapMartItems");
    if (storedCart) {
      try {
        const parsedCart: CartProductType[] = JSON.parse(storedCart);

        // Validate that parsedCart is an array of CartProductType
        if (
          Array.isArray(parsedCart) &&
          parsedCart.every((item) => item.id && item.quantity >= 0)
        ) {
          setCartProducts(parsedCart);
          setCartTotalQty(
            parsedCart.reduce(
              (acc: number, item: CartProductType) => acc + item.quantity,
              0
            )
          );
        } else {
          console.error("Invalid cart data found in local storage.");
        }
      } catch (error) {
        console.error("Failed to parse cart data from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;

            acc.qty += item.quantity;

            return acc;
          },
          { total: 0, qty: 0 }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
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

  const handleQtyIncrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity === 99) {
        return toast.error("Oops! Maximum reached");
      }

      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartProducts(updatedCart);
      localStorage.setItem("zapMartItems", JSON.stringify(updatedCart));
      setCartTotalQty(
        updatedCart.reduce((acc, item) => acc + item.quantity, 0)
      );
    },
    [cartProducts]
  );
  const handleQtyDecrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity <= 1) {
        return toast.error("Quantity cannot be less than 1");
      }

      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );

      setCartProducts(updatedCart);
      localStorage.setItem("zapMartItems", JSON.stringify(updatedCart));
      setCartTotalQty(
        updatedCart.reduce((acc, item) => acc + item.quantity, 0)
      );
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts([]);
    setCartTotalQty(0);
    localStorage.setItem("zapMartItems", JSON.stringify(null));
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleQtyIncrease,
    handleQtyDecrease,
    handleClearCart,
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
