import React, { useContext } from 'react';
import styles from './ProductCard.module.css';
import CartContext from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, error } = useContext(CartContext);

  const cartHandler = () => {
    try {
      addToCart(product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.productCard}>
      <img src={product.imageURL} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Type: {product.type}</p>
      <p>Gender: {product.gender}</p>
      <p>Color: {product.color}</p>
      <p>Price: INR {product.price}</p>
      {error.id === product.id && error.error && (
        <p style={{ color: 'red' }}>Out of Stock</p>
      )}
      <button
        disabled={error.id === product.id && error.error}
        className={styles.addToCart}
        onClick={cartHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
