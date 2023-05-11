import React from "react";
import { useSelector } from "react-redux";

export default function Temp(){

    const cartResult = useSelector((state) => state.cartData);
    console.log("cartResult",cartResult); 

    return (
        <h1>Hello Temp</h1>
    )
}