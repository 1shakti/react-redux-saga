import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../../redux/productAction";

export default function Header(){

    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
   return (
    <div className="header">
        <h3 className="logo">E COMM</h3>
        <div className="search-box">
            <input type="text" placeholder="Search product" onChange={(e) => dispatch(searchProduct(e.target.value))} name="search_product" id="search_product" />
        </div>
        <Link to="/cartList" ><div className="cart-div">
            {result.length > 0 && <span>{result.length}</span>}
            <AiOutlineShoppingCart className="cart-icon" />
        </div>
        </Link>
    </div>
   ) 
}