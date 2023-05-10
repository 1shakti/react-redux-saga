import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [],action) => {
    // if(action.type === ADD_TO_CART){
    //     return action.data;
    // }else{
    //     return data;
    // }

    switch(action.type){

        case ADD_TO_CART : 
        return [action.data,...data];
 
        case REMOVE_FROM_CART:
            data.length = data.length > 0 ? data.length - 1 : [];    
        return [...data];

        case EMPTY_CART:
        return [];

        default : 
        return data 

    }

}