import "./styles.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./pages/Card";
import SingleProduct from "./pages/SingleProduct";
import { cardContext } from "./services/cardContext";
import { getData, setData } from "./services/storage";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [card, setCard] = useState({});

  useEffect(() => {
    setCard(getData());
  }, []);

  useEffect(() => {
    setData(card);
  }, [card]);

  return (
    <div>
      <BrowserRouter>
        <cardContext.Provider value={{ card, setCard }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/Card" element={<Card />} />
          </Routes>
          <Toaster />
        </cardContext.Provider>
      </BrowserRouter>
    </div>
  );
}
