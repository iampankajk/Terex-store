import React from 'react'
import Products from '../Products/Products'
import SideBar from '../SideBar/SideBar'
import styles from './ProductSection.module.css'

const ProductSection = ({products}) => {
  return (
    <div className={styles.section}>
      <SideBar/>
      <Products products={products}/>
    </div>
  )
}

export default ProductSection
