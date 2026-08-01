import { createContext, useContext, useMemo, useState } from "react";
import { initialProducts } from "../data/product";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Remove from cart
 const removeFromCart = (product) => {
  setCart((prevCart) => {

    const updatedCart = prevCart.map((item) => {

      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    return updatedCart.filter((item) => item.quantity > 0);
  });
};

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Total number of items in cart
  const cartCount = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cart]
  );

  // Total price of cart
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cart]
  );


  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);