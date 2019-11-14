import { fromJS } from "immutable";
import { GET_RESOURCE } from "../actionTypes";

const defaultState = fromJS({
    result: [

    ]
});

export default (state = defaultState, action) => {
    if (action.type === GET_RESOURCE) {
        return state.merge({
            result: action.result
        });
    }
    return state;
};
