import "./ProductItem.css";

function ProductItem(props) {
  const { imgUrl, productTitle, productPrice, id } = props.item;
  const { productItems, setProductItems } = props;

  function handleDeleteItem() {
    const filteredProducts = productItems.filter((product) => {
      return product.id !== id;
    });
    setProductItems(filteredProducts)
  }

  return (
    <div className="product-item">
      <img src={imgUrl} alt="product image" />
      <div className="product-info">
        <h3>{productTitle}</h3>
        <strong>{productPrice}</strong>
      </div>
      <button className="btn btn-danger" onClick={handleDeleteItem}>
        Ürünü Sil
      </button>
    </div>
  );
}

export default ProductItem;
