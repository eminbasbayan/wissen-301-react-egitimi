import Customers from "./components/Customers/Customers";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

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

function handleClick() {
  console.log("Tıklandı!");
}

function App() {
  return (
    <div>
      <h1 onClick={handleClick}>App Component</h1>
      <Products />
      <Customers customers={customersData}></Customers>
      <Button type="success">
        <b>Kaydet</b>
      </Button>
      <Button type="danger">
        <b>Kaydet</b>
      </Button>
    </div>
  );
}

export default App;
