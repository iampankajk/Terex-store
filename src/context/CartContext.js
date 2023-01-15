import React, { createContext, useState } from 'react';
import fetchData from '../components/Api/fetchData';

const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCartState);
  const [error, setError] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [data, setData] = useState([]);

  const addToCart = ({ id, name, price, imageURL }) => {
    const totalAmount = cartItems.totalAmount + price;

    const existingItemIndex = cartItems.items.findIndex(
      (item) => item.id === id
    );
    const existingItem = cartItems.items[existingItemIndex];
    function Data() {
      fetchData().then((data) => setData(data));
    }
    Data();

    const itemData = data.filter((item) => item.id === id);
    const qty = itemData[0] && itemData[0].quantity;

    let updatedItems;

    if (existingItem) {
      if (existingItem.quantity === qty) {
        setError({ error: true, id: existingItem.id });
        throw new Error('Out of stock');
      }
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems = [...cartItems.items];
      updatedItems[existingItemIndex] = updateItem;

      setCartItems({
        items: updatedItems,
        totalAmount,
      });
    } else {
      const newItem = {
        id,
        name,
        price,
        quantity: 1,
        imageURL,
      };

      setCartItems({
        items: [...cartItems.items, newItem],
        totalAmount,
      });
    }
  };

  const removeFromCart = ({price,id,quantity}) => {
    const totalAmount = cartItems.totalAmount - price*quantity;

      const updatedItems = cartItems.items.filter((item)=>item.id!==id)
      setCartItems({
        items: updatedItems,
        totalAmount,
      });
    
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        error,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
