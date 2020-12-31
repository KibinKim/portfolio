import { combineReducers } from "redux";
import layout from "./layout";
import { penderReducer } from "redux-pender";

// redux의 reducer는 하나만 있어야함
export default combineReducers({
    layout,
    //비동기식 리덕스 액션 관리
    pender: penderReducer,
});
