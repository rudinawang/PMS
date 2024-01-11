// import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products"
    );
    setProducts(response.data);
    // console.log(response);
  };

  useEffect(() => {
    // do something
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <>
      <Navbar />
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.productImage} alt="Product Image" />

            <h2 className="product-name">{product.productName}</h2>
            <p className="product-description">{product.productDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
