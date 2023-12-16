import React, { Fragment, useContext, useEffect, useState } from "react";
import Counter from "./components/Counter";
import Products from "./components/Products/Products";
import AddNewProduct from "./components/Form/AddNewProduct";
import Header from "./components/Layout/Header";
import { ToastContainer } from "react-toastify";
import { CartContext } from "./context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const data = useContext(CartContext);
  const { isThemeMode } = useContext(ThemeContext);
  const [productItems, setProductItems] = useState([]);
  // let firstname = "Ahmet";



  return (
    <React.Fragment>
      <ToastContainer />
      {/* <AddNewProduct
        setProductItems={setProductItems}
        productItems={productItems}
      /> */}
      <div className={`wrapper ${isThemeMode && "bg-dark"}`}>
        <div className="container">
          <Header />
          <br />
          <Products
            productItems={productItems}
            setProductItems={setProductItems}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
