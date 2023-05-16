import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../../redux/action";
import { productList } from "../../redux/productAction";
import "./main.css";

export default function Main(){
    const dispatch = useDispatch();
    const result = useSelector(state => state.productData);
    const cartData = useSelector(state => state.cartData);

    const product = {
        name: "i phone",
        type: "mobile",
        price: 10000,
        color: "red"
    }
    useEffect(() => {
        dispatch(productList());
    },[])

    return (
        <> 
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        <div className="product-container">
            {result.map((item,index) => 
                <div className="product-item" key={index}>
                    <img src={item.photo} alt="" />
                    <div>Name: {item.name}</div>
                    <div>Brand: {item.brand}</div>
                    <div>Color: {item.color}</div>
                    <div>Category: {item.category}</div>
                    <div>Price: {item.price}</div>
                    <div>
                    <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                    {cartData.filter((cartItem) => (cartItem.id === item.id) && cartItem).length > 0 && <button onClick={() => dispatch(removeFromCart(item))}>Remove From Cart</button>}
                    </div>
                </div>
            )}
        </div>
        </>
    )
}