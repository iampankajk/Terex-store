import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { name, price, imageURL, quantity, id } = item;
  const { addToCart, error, removeFromCart } = useContext(CartContext);

  const cartHandler = () => {
    try {
      addToCart(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.cartItem}>
        <div className={styles.data}>
          <div>
            <img src={imageURL} style={{ width: '100%' }} alt={name}></img>
          </div>
          <div className={styles.title}>
            <h4>{name}</h4>
            <p>{price}</p>
          </div>
        </div>
        <div className={styles.action}>
          <p>{quantity}</p>
          <button onClick={cartHandler}>qty+</button>
          <button onClick={()=>removeFromCart(item)}>delete</button>
        </div>
      </div>
      {error.id === id && error.error && (
        <p style={{ color: 'red', textAlign: 'center' }}>Out of Stock</p>
      )}
    </>
  );
};

export default CartItem;
