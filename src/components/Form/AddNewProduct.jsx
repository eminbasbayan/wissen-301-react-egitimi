import "./AddNewProduct.css";

function AddNewProduct() {
  return (
    <form className="product-form">
      <div className="form-item">
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-item">
        <label htmlFor="price">Product Price</label>
        <input type="number" id="price" />
      </div>
      <div className="form-item">
        <label htmlFor="image">Product Image</label>
        <input type="text" id="image" />
      </div>
      <button>Add New Product</button>
    </form>
  );
}

export default AddNewProduct;
