import { createContext, useState } from "react";

//yeni context oluşturma
export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider
      value={{
        name: "Emin",
        cart,
        setCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
