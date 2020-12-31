import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const SET_SCROLL_VALUE = "layout/SET_SCROLL_VALUE";

export const setScrollValue = createAction(SET_SCROLL_VALUE);

const initialState = Map({
    scroll: "",
});

export default handleActions(
    {
        [SET_SCROLL_VALUE]: (state, action) => state.setIn(["scroll"], action.payload),
    },
    initialState,
);
