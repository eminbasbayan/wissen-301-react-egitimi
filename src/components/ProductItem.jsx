import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <img
        src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
        alt="product image"
      />
      <h3>Product Title</h3>
      <strong>Product Price</strong>
    </div>
  );
}

export default ProductItem;
