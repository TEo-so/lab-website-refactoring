import { fromJS } from "immutable";
import { GET_DEFAULT_SELECT, GET_CHANGE_SELECT, GET_SEARCH, GET_API } from "../actionTypes";

const defaultState = fromJS({
    selectValue: null,
    correctApi: null,
    correctContent: null
});

export default (state = defaultState, action) => {

    if (action.type === GET_DEFAULT_SELECT) {

        return state.merge({
            selectValue: action.selectValue
        });
    } else if (action.type === GET_CHANGE_SELECT) {

        return state.merge({
            selectValue: action.selectValue
        });

    } else if (action.type === GET_SEARCH) {
        return state.merge({
            correctContent: action.correctContent
        });
    } else if (action.type === GET_API) {
        return state.merge({
            correctApi: action.correctApi
        });
    }

    return state;
};
