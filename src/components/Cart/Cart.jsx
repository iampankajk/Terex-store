import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.items.map((item)=><CartItem item={item} key={item.id}/>)}
      <h3 style={{ textAlign: 'center' }}>
        Total Amount: {cartItems.totalAmount}
      </h3>
    </div>
  );
};

export default Cart;
