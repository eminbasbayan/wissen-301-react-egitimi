import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../context/CartContext";

function Products({ productItems, setProductItems }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  function addToCart(e, item) {
    e.preventDefault();
    const findItem = cart.find((cItem) => cItem.id === item.id);
    if (findItem) {
      //ödev
      const newItem = cart.map((cItem) => {
        if (cItem.id === item.id) {
          return { ...cItem, quantity: cItem.quantity + 1 };
        } else {
          return cItem;
        }
      });
      setCart(newItem);
    } else {
      // setCart([...cart, item]);
      setCart((prevState) => [...prevState, item]);
    }
  }

  const fetchProducts = () => {
    setIsShowLoading(true);
    setProductItems([]);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newProducts = data.map((item) => {
          return {
            id: item.id,
            productTitle: item.title,
            imgUrl: item.image,
            description: item.description,
            productPrice: item.price,
            category: item.category,
          };
        });
        setProductItems(newProducts);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsShowLoading(false));
  };

  useEffect(() => {
    setIsShowLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const newProducts = data.map((item) => {
          return {
            id: item.id,
            productTitle: item.title,
            imgUrl: item.image,
            description: item.description,
            productPrice: item.price,
            category: item.category,
          };
        });
        setProductItems(newProducts.reverse());
      } catch (error) {
        console.log(error);
      } finally {
        setIsShowLoading(false);
      }
    };

    fetchProducts();
  }, [setProductItems]);

  return (
    <div className="products-wrapper">
      {/* <button className="btn btn-lg btn-primary mb-2" onClick={fetchProducts}>
        Ürünleri Getir
      </button> */}
      <div className="products">
        {isShowModal && (
          <Modal
            setIsShowModal={setIsShowModal}
            title="Ürün Silindi!"
            desc="Ürün Başarıyla Silindi!"
          />
        )}
        {isShowLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        )}
        {productItems.map((item) => {
          return (
            <ProductItem
              item={item}
              key={item.id}
              setProductItems={setProductItems}
              productItems={productItems}
              setIsShowModal={setIsShowModal}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
