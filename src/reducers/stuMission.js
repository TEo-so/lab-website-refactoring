import { fromJS } from "immutable";
import { GET_STUDENT_MISSION, GET_DETAIL_MISSON, DELETE_STUDENT_COURSE, ADD_STUDENT_COURSE, GET_WORK } from "../actionTypes";

const defaultState = fromJS({
    result: [],
    detailMission: [],
    work: []

});

export default (state = defaultState, action) => {
    if (action.type === GET_STUDENT_MISSION) {
        return state.merge({
            result: action.result
        });
    }
    else if (action.type === GET_DETAIL_MISSON) {
        return state.merge({
            detailMission: action.result
        });
    } else if (action.type === DELETE_STUDENT_COURSE) {
        const data = action.data;
        const oldResult = data.data;
        const id = data.id;
        return state.merge({
            result: oldResult.filter(item => item.id !== id)
        });
    }
    else if (action.type === ADD_STUDENT_COURSE) {
        const newResult = action.record;
        const oldResult = state.get('result')
        return state.merge({
            result: oldResult.concat(newResult)

        });
    } else if (action.type === GET_WORK) {
        return state.merge({
            work: action.result
        });


    }
    return state;
};
