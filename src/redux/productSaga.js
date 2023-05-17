import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProductData(){
   let data = yield fetch("http://localhost:3005/products");
   data = yield data.json();
   yield put({type:SET_PRODUCT_LIST, data:data})
}

function* getSearchData(queryPara){
    let data = yield fetch(`http://localhost:3005/products?q=${queryPara.query}`);
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST, data:data})
 }
 

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProductData)
    yield takeEvery(SEARCH_PRODUCT, getSearchData)
}

export default productSaga;