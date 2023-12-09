import ProductItem from "./ProductItem";
import "./Products.css";

const productsData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
    productTitle: "Elma",
    productPrice: 20,
  },
  {
    id: 2,
    imgUrl:
      "https://media.istockphoto.com/id/1478735849/tr/foto%C4%9Fraf/nag-phal-in-isolated-background.jpg?s=612x612&w=0&k=20&c=_fU_T2s7k93dsXF2jtM_oHhrhe_qj9N9peLVHlErl58=",
    productTitle: "Armut",
    productPrice: 50,
  },
  {
    id: 3,
    imgUrl:
      "https://media.istockphoto.com/id/1454823790/tr/foto%C4%9Fraf/%C3%BCz%C3%BCm-do%C4%9Fal-k%C4%B1rm%C4%B1z%C4%B1-tatl%C4%B1-organik.jpg?s=612x612&w=0&k=20&c=-DVr_9FUFy8rWHVGsmraBYLbd6b88DkgX6LBtjd40x0=",
    productTitle: "Üzüm",
    productPrice: 80,
  },
];

function Products() {
  return (
    <div className="products">
      {productsData.map((item) => {
        return <ProductItem item={item} key={item.id}></ProductItem>;
      })}
    </div>
  );
}

export default Products;
