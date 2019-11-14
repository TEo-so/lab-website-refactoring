import axios from "axios";
import { GET_MISSION, GET_VISITOR_DETAIL_MISSION } from "../actionTypes";
import { getAddStuCourse } from '../actionCreators/stuMission'

import { API } from '../common/index'

export const getMission = (result) => ({
    type: GET_MISSION,
    result
});

const getDetailMission = (result) => ({

    type: GET_VISITOR_DETAIL_MISSION,
    result
});





export const getMissionApi = () => {
    return dispatch => {

        API.getVisMission()
            .then(res => {
                const result = res.data;
                dispatch(getMission(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};

export const getDetailMissionApi = (id) => {
    return dispatch => {
        axios
            .get(`/api/detailMission.json?id = ${id}`)
            .then(res => {
                const result = res.data;
                dispatch(getDetailMission(result));
            })
            .catch(() => {
                console.log('error')
            });
    };

}


export const AddStudentCourse = (record) => {
    const id = record.id
    return dispatch => {
        API.getVisDetMission(id)
            .then(() => {

                dispatch(getAddStuCourse(record));
            })
            .catch(() => {
                console.log('error')
            });
    };

}