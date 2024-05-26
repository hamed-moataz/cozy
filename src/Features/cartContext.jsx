import { createContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to update the quantity of a product in the cart
  const addToCart = (productId) => {
    setCart(prevCart => [...prevCart, productId]);
  };
  const removeFromCart = (productId) => {
    const indexToRemove = cart.findIndex(item => item === productId);
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };

  const clearCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item !== productId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
