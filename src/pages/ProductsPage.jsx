import React from "react";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const [productItems, setProductItems] = useState([]);
  return (
    <React.Fragment>
      <h1>Products Page</h1>
      <Products productItems={productItems} setProductItems={setProductItems} />
    </React.Fragment>
  );
};

export default ProductsPage;
