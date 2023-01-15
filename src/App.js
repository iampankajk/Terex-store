import { useContext, useEffect,useState } from "react";
import fetchData from "./components/Api/fetchData";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import SearchBar from "./components/SearchBar/SearchBar";
import CartContext from "./context/CartContext";

function App() {
  const [products, setProduct] = useState([]);
  const {showCart} = useContext(CartContext)
  const filterHandler = (filterData)=>{
    setProduct(filterData)
  }

  useEffect(()=>{
    fetchData().then((data) => setProduct(data));
  },[])
  return (
    <div>
      <Header/>
      {!showCart && <SearchBar onFilter={filterHandler}/>}
      {!showCart && <ProductSection products={products}/>}
      {showCart  && <Cart/>}
    </div>
  );
}

export default App;
