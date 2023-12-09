import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
  );
}

export default Products;
