import { Fragment, useContext } from "react";
import CartItems from "../components/CartItems";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.productPrice;
  }, 0);

  return (
    <Fragment>
      <h1>CartPage</h1>
      <CartItems />
      <strong>Toplam:</strong>
      <span>{totalPrice}</span>
    </Fragment>
  );
};

export default CartPage;
