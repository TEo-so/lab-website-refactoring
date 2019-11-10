import { fromJS } from "immutable";
import { GET_TEACHER_COURSE, GET_DETAIL_MISSON } from "./actionTypes";

const defaultState = fromJS({
    result: [],
    detailMission: []

});

export default (state = defaultState, action) => {
    if (action.type === GET_TEACHER_COURSE) {
        return state.merge({
            result: action.result
        });
    }
    else if (action.type === GET_DETAIL_MISSON) {
        return state.merge({
            detailMission: action.result
        });
    }
    return state;
};
