import { combineReducers } from "redux";
import layout from "./layout";

/* 
redux의 reducer는 하나만 있어야하므로 여러 리듀서가 있으면 하나로 합쳐줘야함.
이 작업을 combineReducer라고 함.
*/
const rootReducer = combineReducers({
    layout,
});

export default rootReducer;
