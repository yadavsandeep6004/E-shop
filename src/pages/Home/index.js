import "./style.css";
import ProductPage from "../ProductPage";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="containar flex align-center home">
        <div className="home-text">
          <h4>Welcome to E-Shop</h4>
          <h1> 60% off</h1>
          <Link to="/Card" className="btn">
            Order Now
          </Link>
        </div>
        <div className="poster">
          <img
            src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="poster"
          />
        </div>
      </div>
      <ProductPage />
    </>
  );
};

export default Home;

//https://fakestoreapi.com/products
