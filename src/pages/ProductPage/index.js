import "./style.css";
import { useEffect, useState } from "react";
import Product from "../../components/Product";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="containar productpage text-center ">
      {data.map((item) => (
        <Product prod={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductPage;
