import "./ProductItem.css";

function ProductItem() {
  const imgUrl =
    "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D";

  const productTitle = "Elma";
  const productPrice = 20;
  const date = new Date(2023, 11, 9);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="product-item">
      <img src={imgUrl} alt="product image" />
      <div className="product-info">
        <h3>{productTitle}</h3>
        <strong>{productPrice}</strong> <br />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

export default ProductItem;
