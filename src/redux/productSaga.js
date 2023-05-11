import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProductData(){
   let data = yield fetch("http://localhost:3500/products");
   data = yield data.json();
   yield put({type:SET_PRODUCT_LIST, data:data})
}


function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProductData)
}

export default productSaga;