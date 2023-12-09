import "./ProductItem.css";

function ProductItem(props) {
  const { imgUrl, productTitle, productPrice } = props.item;

  return (
    <div className="product-item">
      <img src={imgUrl} alt="product image" />
      <div className="product-info">
        <h3>{productTitle}</h3>
        <strong>{productPrice}</strong>
      </div>
    </div>
  );
}

export default ProductItem;
