import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action";
import "./cart.css";

export default function Cart() {

  const cartData = useSelector(state => state.cartData);
  const amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  const dispatch = useDispatch();  

  return (
    <div className="cart-container">
        <table>
            <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Brand</td>
            <td>Color</td>
            <td>Category</td>
            <td>Price</td>
            <td></td>                
            </tr>
            {cartData.map((item, index) => (
        <tr className="cart-item" key={index}>
          <td><img src={item.photo} alt="" /></td> 
          <td>{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.color}</td>
          <td>{item.category}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => dispatch(removeFromCart(item))}>
              Remove From Cart
            </button>
          </td>
        </tr>
      ))}
        </table>
        <div className="price-details">
                <div className="adjust-price">
                    <span>Amount</span>
                    <span>{amount}</span>
                </div>
                <div className="adjust-price">
                    <span>Discount</span>
                    <span>{amount/10}</span>
                </div>
                <div className="adjust-price">
                    <span>Tax</span>
                    <span>0</span>
                </div>
                <div className="adjust-price">
                    <span>Total Amount</span>
                    <span>{amount-(amount/10)}</span>
                </div>
        </div>

    </div>
  );
}
