import "./style.css";
import { useEffect, useState, useContext } from "react";
import { cardContext } from "../../services/cardContext";
import { useParams } from "react-router-dom";
// import { setData } from "../../services/storage";
const SingleProduct = () => {
  const { card, setCard } = useContext(cardContext);

  const [singleData, setSingleData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCard = (itemId) => {
    const _card = { ...card };

    if (itemId in _card) {
      _card[itemId] += 1;
    } else {
      _card[itemId] = 1;
    }

    if (_card.totalItem) {
      _card.totalItem += 1;
    } else {
      _card.totalItem = 1;
    }

    setCard(_card);
  };

  return (
    <div className="single-page containar flex">
      <div className="text-center single-page-top">
        <h4>category : {singleData.category}</h4>
        <img src={singleData.image} alt="img" />
      </div>
      <div className="single-page-bottom">
        <h3>$ {singleData.price}</h3>
        <h5>{singleData.title}</h5>
        <p>{singleData.description}</p>
        <button className="btn" onClick={() => addToCard(singleData.id)}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
