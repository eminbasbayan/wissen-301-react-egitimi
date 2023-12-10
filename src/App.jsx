import React from "react";
import Counter from "./components/Counter";

function App() {
  const [firstname, setFirstname] = React.useState("Ahmet");
  // let firstname = "Ahmet";

  function handleClick() {
    // firstname = "Mehmet";
    setFirstname("Mehmet");
  }
  return (
    <div className="app-component">
      <h1>{firstname}</h1>
      <button onClick={handleClick}>İsmi Değiştir!</button>
      <br />
      <br />
      <Counter />
    </div>
  );
}

export default App;
