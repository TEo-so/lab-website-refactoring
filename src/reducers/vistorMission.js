import { fromJS } from "immutable";
import { GET_MISSION, GET_VISITOR_DETAIL_MISSION } from "../actionTypes";

const defaultState = fromJS({
    result: [],
    detailMission: []

});

export default (state = defaultState, action) => {
    if (action.type === GET_MISSION) {
        return state.merge({
            result: action.result
        });
    }
    else if (action.type === GET_VISITOR_DETAIL_MISSION) {
        return state.merge({
            detailMission: action.result
        });
    }
    return state;
};
