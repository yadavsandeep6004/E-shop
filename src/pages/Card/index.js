import "./style.css";
import { cardContext } from "../../services/cardContext";
import { useContext, useEffect, useState } from "react";
import { getApi } from "../../api";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../../services/storage";
import toast from "react-hot-toast";

const Card = () => {
  const { card, setCard } = useContext(cardContext);
  const [data, setData] = useState([]);
  let totalPrice = 0;

  useEffect(() => {
    let arr = Object.keys(card);
    getApi(arr).then((res) => {
      setData(res);
    });
  }, []);

  const increment = (productId) => {
    const _card = { ...card };
    _card[productId] += 1;
    _card.totalItem += 1;
    setCard(_card);
  };

  const decrement = (productId) => {
    const _card = { ...card };
    if (_card[productId] === 1) {
      return;
    }
    _card[productId] -= 1;
    _card.totalItem -= 1;
    setCard(_card);
  };

  const deletebtn = (productId) => {
    const _card = { ...card };
    let countNum = _card[productId];
    delete _card[productId];
    _card.totalItem -= countNum;
    setCard(_card);
    setData((prev) => prev.filter((item) => item.id !== productId));
  };

  const singleItemPrice = (productId, price) => {
    let add = card[productId] * price;
    totalPrice += add;
    return add;
  };

  const orderplaced = () => {
    removeItem();
    setCard({});
    setData([]);
    toast.success("Order Plesced SuccessFull");
  };

  return (
    <>
      {card.totalItem ? (
        <div className="card-wapper containar">
          {data.map((item) => (
            <div
              key={item.id}
              className="card flex justify-between align-center "
            >
              <div className="card-image-wapper flex justify-between align-center">
                <img src={item.image} alt="img" />
                <div>
                  <p>{item.category}</p>
                  <h5>$ {item.price}</h5>
                </div>
              </div>

              <div className="flex card-button-wapper">
                <button className="btn" onClick={() => decrement(item.id)}>
                  -
                </button>
                <span>{card[item.id]}</span>
                <button className="btn" onClick={() => increment(item.id)}>
                  +
                </button>
              </div>

              <div className="flex justify-between align-center card-delete-wapper">
                <h5>$ {singleItemPrice(item.id, item.price)}</h5>
                <MdDelete
                  className="delete"
                  onClick={() => deletebtn(item.id)}
                />
              </div>
            </div>
          ))}

          <br />
          <hr />
          <br />

          <div className="totale-price">
            <h4>Total: $ {totalPrice}</h4>
            <button className="btn" onClick={orderplaced}>
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img
            className="empty-card"
            src="https://cdn.pixabay.com/photo/2015/11/03/09/00/shopping-cart-1019925_960_720.jpg"
            alt="Add Item in card"
          />
        </div>
      )}
    </>
  );
};

export default Card;
