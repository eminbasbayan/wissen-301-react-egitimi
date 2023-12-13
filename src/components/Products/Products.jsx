import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import Modal from "../UI/Modal";

function Products({ productItems, setProductItems }) {
  const [productsCounter, setProductsCounter] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div className="products">
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title="Ürün Silindi!"
          desc="Ürün Başarıyla Silindi!"
        />
      )}
      {productItems.map((item) => {
        return (
          <ProductItem
            item={item}
            key={item.id}
            productsCounter={productsCounter}
            setProductsCounter={setProductsCounter}
            setProductItems={setProductItems}
            productItems={productItems}
            setIsShowModal={setIsShowModal}
          />
        );
      })}
    </div>
  );
}

export default Products;
