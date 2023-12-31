import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

function Counter({ productsCounter, setProductsCounter, product }) {
  // const [counter, setCounter] = useState(0);
  const { counter } = useSelector((state) => state.counter);
  const { showCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(counter);

  function arttir() {
    if (product) {
      setProductsCounter(productsCounter + 1);
      return;
    }
    // setCounter(counter + 1);
    // dispatch({ type: "increment" });
    dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increment());
    dispatch(counterActions.increase({ amount: 5 }));
  }

  function azalt() {
    if (product) {
      setProductsCounter(productsCounter - 1);
      return;
    } else {
      if (counter === 0) {
        window.alert("Counter 0'ın altında olamaz!");
        return;
      }
      // setCounter(counter - 1);
      dispatch({ type: "decrement" });
      dispatch(counterActions.decrement());
    }
  }
  return (
    <div className="counter d-flex gap-2">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(counterActions.toggleCounter())}
      >
        Toggle Counter
      </button>
      {showCounter && (
        <Fragment>
          <button onClick={arttir}>Arttır</button>
          <span>{product ? productsCounter : counter}</span>
          <button onClick={azalt}>Azalt</button>
        </Fragment>
      )}
    </div>
  );
}

export default Counter;
