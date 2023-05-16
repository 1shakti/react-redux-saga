import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [],action) => {
    // if(action.type === ADD_TO_CART){
    //     return action.data;
    // }else{
    //     return data;
    // }

    switch(action.type){

        case ADD_TO_CART :
        let addData = data;
        data.filter((item) => (item.id === action.data.id) && item).length > 0 ? 
                    addData = addData
             : addData = [action.data,...data]           
        return addData;
 
        case REMOVE_FROM_CART:
        let rmvData = data;
        rmvData = rmvData.filter((item) => (item.id !== action.data.id) && item);    
        return rmvData;

        case EMPTY_CART:
        return [];

        default : 
        return data 

    }

}