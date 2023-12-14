import "./ProductItem.css";

function ProductItem(props) {
  const { imgUrl, productTitle, productPrice, id, description, category } =
    props.item;
  const { productItems, setProductItems, setIsShowModal } = props;

  function handleDeleteItem(e) {
    e.preventDefault();
    const filteredProducts = productItems.filter((product) => {
      return product.id !== id;
    });
    setProductItems(filteredProducts);
    setIsShowModal(true);
  }

  return (
    <div className="card product-item">
      <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <span className="badge bg-primary mb-1">{category}</span>
        <h5 className="card-title">{productTitle.substr(0, 20)}...</h5>
        <p className="card-text">{description?.substr(0, 40)}...</p>
        <p className="card-text">{productPrice}₺</p>
        <a href="#" className="btn btn-danger" onClick={handleDeleteItem}>
          Ürünü Sil
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
