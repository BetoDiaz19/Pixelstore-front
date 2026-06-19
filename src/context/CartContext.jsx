import {
  createContext,
  useState,
  useEffect
} from "react";

import useAuth from "../hooks/useAuth";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  const { user } = useAuth();

  const [cartItems, setCartItems] =
    useState([]);

  const getCartKey = () => {

    return user
      ? `cart_${user.nombre}`
      : "cart_guest";

  };

  useEffect(() => {

    const savedCart =
      localStorage.getItem(
        getCartKey()
      );

    if (savedCart) {

      setCartItems(
        JSON.parse(savedCart)
      );

    } else {

      setCartItems([]);

    }

  }, [user]);

  const addToCart = (game) => {

    const updatedCart = [
      ...cartItems,
      game
    ];

    setCartItems(updatedCart);

    localStorage.setItem(
      getCartKey(),
      JSON.stringify(updatedCart)
    );

  };

  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(
        item => item.id !== id
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      getCartKey(),
      JSON.stringify(updatedCart)
    );

  };

  const clearCart = () => {

    setCartItems([]);

    localStorage.removeItem(
      getCartKey()
    );

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;