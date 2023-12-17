import React, { useState } from "react";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const ProductsPage = () => {
  const [productItems, setProductItems] = useState([]);
  return (
    <React.Fragment>
      <Header />
      <h1>Products Page</h1>
      <Products productItems={productItems} setProductItems={setProductItems} />
      <Footer />
    </React.Fragment>
  );
};

export default ProductsPage;
