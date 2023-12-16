import { useContext, useState } from "react";
import "./ProductItem.css";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";

function ProductItem(props) {
  const { imgUrl, productTitle, productPrice, id, description, category } =
    props.item;
  const { productItems, setProductItems, setIsShowModal, addToCart } = props;
  const { cart } = useContext(CartContext);
  const findItem = cart.find((item) => item.id === id);

  function handleDeleteItem(e) {
    e.preventDefault();
    if (window.confirm("Emin misiniz?")) {
      const filteredProducts = productItems.filter((product) => {
        return product.id !== id;
      });
      setProductItems(filteredProducts);
      setIsShowModal(true);
    }
  }

  return (
    <div className="card product-item">
      <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <span className="badge bg-primary mb-1">{category}</span>
        <h5 className="card-title">{productTitle.substr(0, 16)}...</h5>
        <p className="card-text">{description?.substr(0, 40)}...</p>
        <p className="card-text">{productPrice}₺</p>
        <div className="d-flex justify-content-between">
          <button
            href="#"
            className="btn btn-success"
            onClick={(e) => {
              if (findItem) {
                return;
              }
              addToCart(e, props.item);
              toast("Ürün Başarıyla Sepete Eklendi!!!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                type: "success"
              });
            }}
            disabled={findItem}
          >
            Sepete Ekle
          </button>
          <a href="#" className="btn btn-danger" onClick={handleDeleteItem}>
            Ürünü Sil
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
