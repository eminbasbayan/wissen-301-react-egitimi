import { useState } from "react";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  function handleNameChange(event) {
    setProductName(event.target.value);
  }

  function handlePriceChange(event) {
    setProductPrice(event.target.value);
  }

  function handleImageChange(event) {
    setProductImage(event.target.value);
  }

  console.log({
    name: productName,
    image: productImage,
    price: productPrice,
  });

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
