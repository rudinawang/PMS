import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import "./EditProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };

  // edit product
  const editProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products/" + id,
      product
    );
    if (response.status === 200) {
      navigate("/singleProduct/" + id);
    } else {
      alert("Something went wrong. Try Again!");
    }
  };

  // fetch product of id
  const fetchProduct = async () => {
    const response = await axios.get(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products/" + id
    );
    console.log(response);
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Navbar />
      <div id="product-form">
        <h2>Edit Product</h2>
        <form onSubmit={editProduct}>
          <label htmlFor="productImage">Product Image:</label>
          <input
            value={product.productImage}
            type="text"
            id="productImage"
            name="productImage"
            onChange={handleChange}
          />
          <label htmlFor="productName">Product Name:</label>
          <input
            value={product.productName}
            type="text"
            id="productName"
            name="productName"
            // onChange={(e) =>
            //   setProduct({ ...product, productName: e.target.value })
            // }
            onChange={handleChange}
          />
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            value={product.productDescription}
            id="productDescription"
            name="productDescription"
            rows="4"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="productMaterial">Product Material:</label>
          <input
            value={product.productMaterial}
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

export default EditProduct;
