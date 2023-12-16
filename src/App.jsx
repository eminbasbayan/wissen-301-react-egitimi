import React, { Fragment, useContext, useState } from "react";
import Counter from "./components/Counter";
import Products from "./components/Products/Products";
import AddNewProduct from "./components/Form/AddNewProduct";
import Header from "./components/Layout/Header";
import { CartContext } from "./context/CartContext";

function App() {
   const data = useContext(CartContext)
  const [productItems, setProductItems] = useState([]);
  // let firstname = "Ahmet";

  console.log(data.cart.length);
  return (
    <React.Fragment>
      {/* <AddNewProduct
        setProductItems={setProductItems}
        productItems={productItems}
      /> */}
      <div className="container">
        <Header />
        <br />
        <Products
          productItems={productItems}
          setProductItems={setProductItems}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
