import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);

  return (
    <div className="product-item">
      <img src={props.imgUrl} alt="product image" />
      <div className="product-info">
        <h3>{props.productTitle}</h3>
        <strong>{props.productPrice}</strong> <br />
        <span>{props.formattedDate}</span>
        {props.name}
      </div>
    </div>
  );
}

export default ProductItem;
