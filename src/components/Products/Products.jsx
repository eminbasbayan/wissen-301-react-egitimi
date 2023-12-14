import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import Modal from "../UI/Modal";

function Products({ productItems, setProductItems }) {
  const [productsCounter, setProductsCounter] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const fetchProducts = () => {
    setIsShowLoading(true);
    setProductItems([])
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newProducts = data.map((item) => {
          return {
            id: item.id,
            productTitle: item.title,
            imgUrl: item.image,
            description: item.description,
          };
        });
        setProductItems(newProducts);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsShowLoading(false));
  };

  return (
    <div className="products-wrapper">
      <button className="btn btn-lg btn-primary mb-2" onClick={fetchProducts}>
        Ürünleri Getir
      </button>
      <div className="products">
        {isShowModal && (
          <Modal
            setIsShowModal={setIsShowModal}
            title="Ürün Silindi!"
            desc="Ürün Başarıyla Silindi!"
          />
        )}
        {isShowLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
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
    </div>
  );
}

export default Products;
