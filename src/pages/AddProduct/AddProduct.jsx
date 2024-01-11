// import { useState } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar/Navbar";
import "./AddProduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  // FIRST approach
  // const [productImage, setProductImage] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  // const [productMaterial, setProductionMaterial] = useState("");

  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.post(
  //     "https://659fcbe45023b02bfe8a8236.mockapi.io/products",
  //     {
  //       productName: productName,
  //       productImage: productImage,
  //       productDescription: productDescription,
  //       productMaterial: productMaterial,
  //     }
  //   );
  //   console.log(response);
  // };

  // SECOND approach
  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget); // {}
  //   console.log(...formData);
  //   const data = Object.fromEntries(formData);

  //   const response = await axios.post(
  //     "https://659fcbe45023b02bfe8a8236.mockapi.io/products",
  //     data
  //   );
  //   console.log(response);
  // };

  // THIRD approach

  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    productMaterial: "",
    productImage: "",
  });
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products",
      data
    );
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Something went wrong. Try Again!");
    }
  };

  return (
    <>
      <Navbar />
      <div id="product-form">
        <h2>Product Information</h2>
        <form onSubmit={addProduct}>
          {/* FIRST APPROACH
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            onChange={(e) => setProductImage(e.target.value)}
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            onChange={(e) => setProductionMaterial(e.target.value)}
          /> */}
          {/* SECOND APPROACH

          <label htmlFor="productImage">Product Image:</label>
          <input type="text" id="productImage" name="productImage" />

          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input type="text" id="productMaterial" name="productMaterial" /> */}

          <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            onChange={handleChange}
          />
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
          />
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="productMaterial">Product Material:</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
