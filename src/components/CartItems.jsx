import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "./Products/ProductItem";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="products">
      {cart.length > 0 ? (
        cart.map((cartItem) => {
          return <ProductItem item={cartItem} key={cartItem.id} cart />;
        })
      ) : (
        <h3>Sepette hiç ürün yok!!!</h3>
      )}
    </div>
  );
};

export default CartItems;
