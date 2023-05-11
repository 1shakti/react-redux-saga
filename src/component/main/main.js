import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../../redux/action";
import { productList } from "../../redux/productAction";

export default function Main(){
    const dispatch = useDispatch();
    const product = {
        name: "i phone",
        type: "mobile",
        price: 10000,
        color: "red"
    }

    return (
        <>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        <button onClick={() => dispatch(productList(product))}>Get Product List</button>
        </>
    )
}