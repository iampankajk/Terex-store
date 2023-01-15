import React, { useContext } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/cart.png';
import CartContext from '../../context/CartContext';

const Header = () => {
  const {cartItems,setShowCart} = useContext(CartContext)

  return (
    <div className={styles.headerMain}>
      <div>
        <h3>Terex Store</h3>
      </div>
      <div className={styles.nav}>
        <div onClick={()=>setShowCart(false)}>
          <h3>Products</h3>
        </div>
        <div style={{display:'flex'}} onClick={()=>setShowCart(true)}>
          <img src={logo} alt='cart' className={styles.logo} />
          <span style={{marginTop:-10}}>{cartItems.items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
