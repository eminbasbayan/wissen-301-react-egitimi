import { useContext, useState } from "react";
import "./ProductItem.css";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
  const {
    imgUrl,
    productTitle,
    productPrice,
    id,
    description,
    category,
    quantity,
  } = props.item;
  const {
    productItems,
    setProductItems,
    setIsShowModal,
    addToCart,
    cart: cartProp,
  } = props;
  const { cart, setCart } = useContext(CartContext);
  const findItem = cart.find((item) => item.id === id);
  const { isThemeMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  function addCartItem(e) {
    // if (findItem) {
    //   return;
    // }
    const newItem = {
      ...props.item,
      quantity: 1,
    };

    addToCart(e, newItem);
    toast("Ürün Başarıyla Sepete Eklendi!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
    });
  }

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

  function deleteFromCart() {
    if (window.confirm("Emin Misiniz!!!")) {
      //previous state
      setCart((prevCart) => {
        return prevCart.filter((pItem) => pItem.id !== id);
      });
    }
  }

  return (
    <div className={`card product-item ${isThemeMode && "text-white bg-dark"}`}>
      <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <span className="badge bg-primary mb-1">{category}</span>
        <h5
          className="card-title"
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate(`/product/${id}`)}
        >
          {productTitle.substr(0, 16)}...
        </h5>
        <p className="card-text">{description?.substr(0, 40)}...</p>
        <p className="card-text">{productPrice}₺</p>
        <div className="d-flex justify-content-between">
          {!cartProp && (
            <button href="#" className="btn btn-success" onClick={addCartItem}>
              Sepete Ekle
            </button>
          )}

          {cartProp ? (
            <div className="d-flex justify-content-between w-100 align-items-center">
              <a href="#" className="btn btn-danger" onClick={deleteFromCart}>
                Sepetten Sil
              </a>
              <div className="d-flex">
                <button className="btn btn-info">+</button>
                <span>{quantity}</span>
                <button className="btn btn-info">-</button>
              </div>
            </div>
          ) : (
            <a href="#" className="btn btn-danger" onClick={handleDeleteItem}>
              Ürünü Sil
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
