import React from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="card">
        <img src="your_product_image.jpg" alt="Product Image" />

        <h2 className="product-name">Product Name</h2>
        <p className="product-description">
          Product Description goes here. This is a brief description of the
          product.
        </p>
      </div>
    </>
  );
};

export default Home;
