import { useState } from "react";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [formProductData, setFormProductData] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
  });

  function handleNameChange(event) {
    const inputValue = event.target.value;
    setFormProductData({
      ...formProductData,
      productName: inputValue,
    });
  }

  function handlePriceChange(event) {
    const inputValue = event.target.value;
    setFormProductData({
      ...formProductData,
      productPrice: inputValue,
    });
  }

  function handleImageChange(event) {
    const inputValue = event.target.value;
    setFormProductData({
      ...formProductData,
      productImage: inputValue,
    });
  }

  console.log(formProductData);

  return (
    <form className="product-form">
      <div className="form-item">
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" onChange={handleNameChange} />
      </div>
      <div className="form-item">
        <label htmlFor="price">Product Price</label>
        <input type="number" id="price" onChange={handlePriceChange} />
      </div>
      <div className="form-item">
        <label htmlFor="image">Product Image</label>
        <input type="text" id="image" onChange={handleImageChange} />
      </div>
      <button>Add New Product</button>
    </form>
  );
}

export default AddNewProduct;
