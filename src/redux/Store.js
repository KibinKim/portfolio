import { createStore, applyMiddleware, compose } from "redux";
import penderMiddleware from "redux-pender";
import modules from "./modules";
//modules를 선언하기 위해서는 경로에 reducer가 존재해야 함

const isDevelopment = process.env.NODE_ENV === "development";
const composeEnhancers = isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

/*
미들웨어는 action과 reducer의 중간자 역할을 한다고 보면됨
 */
const Store = (initialState) => {
    const store = createStore(modules, initialState, composeEnhancers(applyMiddleware(penderMiddleware())));
    return store;
};

export default Store;
