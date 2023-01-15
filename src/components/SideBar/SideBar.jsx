import React from 'react';
import styles from './SideBar.module.css'

const productFilter = {
  Color: ['Red', 'Blue', 'Green'],
  Gender: ['Men', 'Women'],
  Price: ['0-250', '251-450', '451'],
  Type: ['Polo', 'Hoodie', 'Basic'],
};

const filter = (Category, name) => {
  const optionHandle = (event)=>{
    console.log(event.target.value)
  }
  const item = Category.map((item,idx) => {
    return (
      <li key={idx}>
        <input onInput={optionHandle} type='checkbox' id={item} name={item} value={item} key={name} />
        <label htmlFor={item}>{item}</label>
        <br />
      </li>
    );
  });

  return (
    <div>
      <h4>{name}</h4>
      {item}
    </div>
  );
};

const SideBar = () => {
  return (
    <div className={styles.sideBarCard}>
      {filter(productFilter.Color, 'Color')}

      {filter(productFilter.Gender, 'Gender')}

      {filter(productFilter.Price, 'Price')}

      {filter(productFilter.Type, 'Type')}
    </div>
  );
};

export default SideBar;
