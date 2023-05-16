import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action";
import { Link } from "react-router-dom";
import Cart from "../component/cart/cart";

export default function CartList(){
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData);

    return (
        <>
        <div className="header">
        <Link to="/" >Back To Home</Link>
        </div>
        <Cart />
    </>
    )
}