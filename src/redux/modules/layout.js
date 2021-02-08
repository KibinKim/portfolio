import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

//Ducks Pattern

//액션 타입 정의
const SET_SCROLL_VALUE = "layout/SET_SCROLL_VALUE";

//액션 생성 함수
export const setScrollValue = createAction(SET_SCROLL_VALUE);

/* 
초기 값 설정
Immutable.js의 Map을 이용한 불변성 유지
*/
const initialState = Map({
    scroll: "",
});

//reducer
export default handleActions(
    {
        [SET_SCROLL_VALUE]: (state, action) => state.set("scroll", action.payload),
    },
    initialState,
);
