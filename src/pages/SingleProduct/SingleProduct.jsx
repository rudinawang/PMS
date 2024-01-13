import { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./SingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Store product data comming in object
  const [product, setProduct] = useState({});

  // delete Product
  const deleteProduct = async () => {
    // api hit to delete
    const response = await axios.delete(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products/" + id
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong. Try Again!");
    }
  };

  // fetch single Product
  const fetchSingleProduct = async () => {
    const response = await axios.get(
      "https://659fcbe45023b02bfe8a8236.mockapi.io/products/" + id
    );
    setProduct(response.data);
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  console.log(product);
  return (
    <>
      <Navbar />
      <div className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        <mark>{product.productMaterial}</mark>
        <br></br>
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={() => navigate(`/editProduct/${product.id}`)}>
          Edit
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
