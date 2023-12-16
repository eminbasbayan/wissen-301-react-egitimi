import { createContext } from "react";

//yeni context oluşturma
export const CartContext = createContext();

const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        name: "Emin",
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
