import React from "react";
import Counter from "./components/Counter";
import Products from "./components/Products/Products";

function App() {
  const [firstname, setFirstname] = React.useState("Ahmet");
  // let firstname = "Ahmet";

  function handleClick() {
    // firstname = "Mehmet";
    setFirstname("Mehmet");
  }
  return (
    <div className="app-component">
      <Products />
      <Counter />
    </div>
  );
}

export default App;
