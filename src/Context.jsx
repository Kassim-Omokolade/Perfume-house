import { createContext, useEffect, useState } from "react";
import Cartitem from "./components/Cartitem";
import { toast } from "react-toastify";

export const CartContext = createContext();

const getItem = JSON.parse(localStorage.getItem("cart")) || [];
//store cart in local storage
const startNewOrder =()=>{
  setCart([])
  setShowModal(false);
};


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItem);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    toast.success("Product Added")
  };
  const removeItemFromCart = (item) => {
    const remainingItems = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(remainingItems);
    toast.success("Product Removed")
  };
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const handleIncrease = (item) => {
    const updateCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updateCart);
  };

  const handleDecrease = (item) => {
    const updateCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updateCart);
  };

  const [showModal, setShowModal] = useState(false);
  const confirmOrder = () => {
    setShowModal(true);
  };
  const startNewOrder =()=>{
    setCart([]);
    setShowModal(false);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        removeItemFromCart,
        handleIncrease,
        handleDecrease,
        showModal,
        setShowModal,
        confirmOrder,
        startNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
