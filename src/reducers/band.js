import { fromJS } from "immutable";
import { GET_BAND } from "../actionTypes";

const defaultState = fromJS({
    result: [
    ]
});

export default (state = defaultState, action) => {

    if (action.type === GET_BAND) {

        return state.set(
            'result', action.result
        );
    }

    return state;
};
