import React from 'react';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

const Products = ({products}) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
