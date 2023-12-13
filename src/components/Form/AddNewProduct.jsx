import { useState } from "react";
import "./AddNewProduct.css";
import Modal from "../UI/Modal";

const initialValues = {
  productName: "",
  productPrice: "",
  productImage: "",
};

function AddNewProduct({ setProductItems, productItems }) {
  const [formProductData, setFormProductData] = useState(initialValues);
  const [isShowModal, setIsShowModal] = useState(false);
  const { productName, productPrice, productImage } = formProductData;

  function handleProductChange(event) {
    const inputValue = event.target.value;
    const name = event.target.name;
    setFormProductData({
      ...formProductData,
      [name]: inputValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      id: productItems.length + 1,
      imgUrl: productImage,
      productTitle: productName,
      productPrice: productPrice,
    };

    if (
      productName.trim().length === 0 ||
      productPrice.trim().length === 0 ||
      productImage.trim().length === 0
    ) {
      setIsShowModal(true);
      return;
    }
    setProductItems([...productItems, productData]);
    setFormProductData(initialValues);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          onChange={handleProductChange}
          name="productName"
          value={productName}
        />
      </div>
      <div className="form-item">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          id="price"
          onChange={handleProductChange}
          name="productPrice"
          value={productPrice}
        />
      </div>
      <div className="form-item">
        <label htmlFor="image">Product Image</label>
        <input
          type="text"
          id="image"
          onChange={handleProductChange}
          name="productImage"
          value={productImage}
        />
      </div>
      <button>Add New Product</button>
      {isShowModal && (
        <Modal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          title="Boş Geçilemez!"
          desc="Inputlar Boş Geçilemez!"
        />
      )}
    </form>
  );
}

export default AddNewProduct;
