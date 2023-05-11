import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { createSagaMiddleware } from "redux-saga";
import productSaga from "./productSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(productSaga);

export default store