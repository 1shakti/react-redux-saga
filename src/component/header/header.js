import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./header.css";
import { useSelector } from "react-redux";

export default function Header(){

    const result = useSelector((state) => state.cartData)
    console.log("result",result)
   return (
    <div className="header">
        <div className="cart-div">
            {result.length > 0 && <span>{result.length}</span>}
            <AiOutlineShoppingCart className="cart-icon" />
        </div>
    </div>
   ) 
}