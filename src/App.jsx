import Customers from "./components/Customers";
import Products from "./components/Products";

const customersData = [
  {
    id: 1,
    name: "Emin",
    age: 15,
    city: "İstanbul",
  },
  {
    id: 2,
    name: "Ahmet",
    age: 35,
    city: "Antep",
  },
  {
    id: 3,
    name: "Mehmet",
    age: 15,
    city: "Yalova",
  },
];

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Products />
      <Customers customers={customersData}></Customers>
    </div>
  );
}

export default App;
