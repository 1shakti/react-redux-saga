import { ADD_TO_CART } from "./constant";

export const cartData = (data = [],action) => {
    if(action.type === ADD_TO_CART){
        return action.data;
    }else{
        return data;
    }

}