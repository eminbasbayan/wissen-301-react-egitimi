import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products({ productItems, setProductItems}) {
  const [productsCounter, setProductsCounter] = useState(0);
  return (
    <div className="products">
      {productItems.map((item) => {
        return (
          <ProductItem
            item={item}
            key={item.id}
            productsCounter={productsCounter}
            setProductsCounter={setProductsCounter}
            setProductItems={setProductItems}
            productItems={productItems}
          ></ProductItem>
        );
      })}
    </div>
  );
}

export default Products;
