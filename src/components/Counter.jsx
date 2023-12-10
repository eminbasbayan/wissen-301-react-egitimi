import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  
  function arttir() {
    setCounter(counter + 1);
  }

  function azalt() {
    if (counter === 0) {
        window.alert("Counter 0'ın altında olamaz!")
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <div className="counter d-flex gap-2">
      <button onClick={arttir}>Arttır</button>
      <span>{counter}</span>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
