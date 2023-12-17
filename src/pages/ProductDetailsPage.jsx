import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [productId]);

  console.log(product);

  return (
    <div className="mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="images p-3">
                <div className="text-center p-4">
                  {" "}
                  <img id="main-image" src={product.image} width="250" />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    {" "}
                    <i className="fa fa-long-arrow-left"></i>{" "}
                    <span className="ml-1">Back</span>{" "}
                  </div>{" "}
                  <i className="fa fa-shopping-cart text-muted"></i>
                </div>
                <div className="mt-4 mb-3">
                  {" "}
                  <span className="text-uppercase text-muted brand">
                    {product.category}
                  </span>
                  <h5 className="text-uppercase">{product.title}</h5>
                  <div className="price d-flex flex-row align-items-center">
                    {" "}
                    <span className="act-price">$20</span>
                    <div className="ml-2">
                      {" "}
                      <small className="dis-price">$59</small>{" "}
                      <span>40% OFF</span>{" "}
                    </div>
                  </div>
                </div>
                <p className="about">{product.description}</p>
                <div className="sizes mt-5">
                  <h6 className="text-uppercase">Size</h6>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size" value="S" /> <span>S</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size" value="M" /> <span>M</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size" value="L" /> <span>L</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size" value="XL" />{" "}
                    <span>XL</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size" value="XXL" />{" "}
                    <span>XXL</span>{" "}
                  </label>
                </div>
                <div className="cart mt-4 align-items-center">
                  {" "}
                  <button className="btn btn-danger text-uppercase mr-2 px-4">
                    Add to cart
                  </button>{" "}
                  <i className="fa fa-heart text-muted"></i>{" "}
                  <i className="fa fa-share-alt text-muted"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
