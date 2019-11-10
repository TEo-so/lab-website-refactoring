import { fromJS } from "immutable";
import { GET_TEACHER_MISSION, GET_DETAIL_MISSON, ADD_TEACHER_COURSE, DELETE_TEACHER_COURSE } from "./actionTypes";

const defaultState = fromJS({
    result: [],
    detailMission: []

});

export default (state = defaultState, action) => {
    if (action.type === GET_TEACHER_MISSION) {
        return state.merge({
            result: action.result
        });
    }
    else if (action.type === GET_DETAIL_MISSON) {
        return state.merge({
            detailMission: action.result
        });
    } else if (action.type === ADD_TEACHER_COURSE) {
        const newResult = action.record;
        const oldResult = state.get('result')
        return state.merge({
            result: oldResult.concat(newResult)

        });
    } else if (action.type === DELETE_TEACHER_COURSE) {
        const data = action.data;
        const oldResult = data.data;
        const id = data.id;
        return state.merge({
            result: oldResult.filter(item => item.id !== id)
        });
    }
    return state;
};
