import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
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

  const listProduct = products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        <p>{product.productMaterial}</p>
        <Link to={`/singleProduct/${product.id}`}>See More</Link>
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className="card-container">{listProduct}</div>
    </>
  );
};

export default Home;

// {/* {products.map((product) => {
//       return (
//         <div className="card" key={product.id}>
//           <img src={product.productImage} alt="Product Image" />
//           <h2 className="product-name">{product.productName}</h2>
//           <p className="product-description">
//             {product.productDescription}
//           </p>
//           <p>{product.productMaterial}</p>
//           {/* <a href="/singleProduct">See More</a> */}
//           <Link to={`/singleProduct/${product.id}`}>See More</Link>
//           {/* <button onClick={() => navigate("/singleProduct")}>See More</button> */}
//         </div>
//       );
//     })} */}
