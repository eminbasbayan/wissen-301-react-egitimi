import { useState } from "react";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [formProductData, setFormProductData] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
  });

  function handleProductChange(event) {
    const inputValue = event.target.value;
    const name = event.target.name;
    setFormProductData({
      ...formProductData,
      [name]: inputValue,
    });
  }

  console.log(formProductData);

  return (
    <form className="product-form">
      <div className="form-item">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          onChange={handleProductChange}
          name="productName"
        />
      </div>
      <div className="form-item">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          id="price"
          onChange={handleProductChange}
          name="productPrice"
        />
      </div>
      <div className="form-item">
        <label htmlFor="image">Product Image</label>
        <input
          type="text"
          id="image"
          onChange={handleProductChange}
          name="productImage"
        />
      </div>
      <button>Add New Product</button>
    </form>
  );
}

export default AddNewProduct;
