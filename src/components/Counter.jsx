import { useState } from "react";

function Counter({ productsCounter, setProductsCounter, product }) {
  const [counter, setCounter] = useState(0);

  function arttir() {
    if (product) {
      setProductsCounter(productsCounter + 1);
      return;
    }
    setCounter(counter + 1);
  }

  console.log(productsCounter);

  function azalt() {
    if (product) {
      setProductsCounter(productsCounter - 1);
      return;
    } else {
      if (counter === 0) {
        window.alert("Counter 0'ın altında olamaz!");
        return;
      }
      setCounter(counter - 1);
    }
  }
  return (
    <div className="counter d-flex gap-2">
      <button onClick={arttir}>Arttır</button>
      <span>{product ? productsCounter : counter}</span>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
