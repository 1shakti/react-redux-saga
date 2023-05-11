import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(){

    const result = useSelector((state) => state.cartData)
    console.log("result",result)
   return (
    <div className="header">
        <Link to="/temp" >Temp Link</Link>
        <div className="cart-div">
            {result.length > 0 && <span>{result.length}</span>}
            <AiOutlineShoppingCart className="cart-icon" />
        </div>
    </div>
   ) 
}