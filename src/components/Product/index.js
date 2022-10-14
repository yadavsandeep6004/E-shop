import "./style.css";
import { Link } from "react-router-dom";
import { cardContext } from "../../services/cardContext";
import { useContext, useState } from "react";

const Product = ({ prod }) => {
  const { card, setCard } = useContext(cardContext);
  const [flag, setFlag] = useState(false);

  const addToCard = (e, productId) => {
    e.preventDefault();

    const _card = { ...card };
    // {productId:1,totalItem:2}

    if (productId in _card) {
      _card[productId] += 1;
    } else {
      _card[productId] = 1;
    }

    if (_card.totalItem) {
      _card.totalItem += 1;
    } else {
      _card.totalItem = 1;
    }

    setCard(_card);
    setFlag(true);

    setTimeout(() => {
      setFlag(false);
    }, 1200);
  };

  return (
    <div className="product">
      <Link to={"/product/" + prod.id}>
        <img src={prod.image} alt="img" />

        <div className="flex">
          <h4>$ {prod.price}</h4>

          <button
            className={flag ? "btn active" : "btn"}
            onClick={(e) => addToCard(e, prod.id)}
            disabled={flag}
          >
            ADD{flag ? "ED" : ""}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Product;
