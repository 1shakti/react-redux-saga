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
            <thead>
            <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Brand</b></td>
            <td><b>Color</b></td>
            <td><b>Category</b></td>
            <td><b>Price</b></td>
            <td></td>                
            </tr>
            </thead>
            <tbody>
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
      </tbody>
        </table>
        <div className="price-details">
                <div><h1>Price Details</h1></div>
                <br/>   
                <div className="adjust-price">
                    <span><b>Amount</b></span>
                    <span>{amount}</span>
                </div>
                <div className="adjust-price">
                    <span><b>Discount</b></span>
                    <span>{amount/10}</span>
                </div>
                <div className="adjust-price">
                    <span><b>Tax</b></span>
                    <span>0</span>
                </div>
                <div className="adjust-price">
                    <span><b>Total Amount</b></span>
                    <span>{amount-(amount/10)}</span>
                </div>
        </div>

    </div>
  );
}
