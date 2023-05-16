import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";
import { Link } from "react-router-dom";

export default function CartList(){
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData);

    return (
        <>
        <div className="header">
        <Link to="/" >Back To Home</Link>
        </div>
        <div className="product-container">
        {cartData.map((item,index) => 
            <div className="product-item" key={index}>
                <img src={item.photo} alt="" />
                <div>Name: {item.name}</div>
                <div>Brand: {item.brand}</div>
                <div>Color: {item.color}</div>
                <div>Category: {item.category}</div>
                <div>Price: {item.price}</div>
                <div>
                <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove From Cart</button>
                </div>
            </div>
        )}
    </div>
    </>
    )
}