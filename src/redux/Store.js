import { createStore } from "redux";
import rootReducer from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";

/*
첫번째 인자로 합친 리듀서를, 두번째 인자로 redux devtools를 사용하기 위한 값을 넘김.
 */
const Store = () => {
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
};

export default Store;
