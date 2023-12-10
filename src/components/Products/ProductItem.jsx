import Counter from "../Counter";
import "./ProductItem.css";

function ProductItem(props) {
  const { imgUrl, productTitle, productPrice } = props.item;

  const { productsCounter, setProductsCounter } = props;

  return (
    <div className="product-item">
      <img src={imgUrl} alt="product image" />
      <div className="product-info">
        <h3>{productTitle}</h3>
        <strong>{productPrice}</strong>
        <Counter
          productsCounter={productsCounter}
          setProductsCounter={setProductsCounter}
          product
        />
      </div>
    </div>
  );
}

export default ProductItem;
