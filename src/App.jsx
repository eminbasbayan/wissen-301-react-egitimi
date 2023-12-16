import React, { Fragment, useState } from "react";
import Counter from "./components/Counter";
import Products from "./components/Products/Products";
import AddNewProduct from "./components/Form/AddNewProduct";
import Header from "./components/Layout/Header";

function App() {
  const [cart, setCart] = useState([]);

  const [productItems, setProductItems] = useState([]);
  // let firstname = "Ahmet";

  console.log(cart.length);
  return (
    <React.Fragment>
      {/* <AddNewProduct
        setProductItems={setProductItems}
        productItems={productItems}
      /> */}
      <div className="container">
        <Header cart={cart} />
        <br />
        <Products
          productItems={productItems}
          setProductItems={setProductItems}
          setCart={setCart}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
