import React from "react";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const product = {
    name: "i phone",
    type: "mobile",
    price: 10000,
    color: "red"
  }
  return (
    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
  );
}

export default App;
