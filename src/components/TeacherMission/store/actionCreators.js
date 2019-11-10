import axios from "axios";
import { GET_TEACHER_MISSION, GET_DETAIL_MISSON, ADD_TEACHER_COURSE, DELETE_TEACHER_COURSE } from "./actionTypes";

export const getMission = (result) => ({
    type: GET_TEACHER_MISSION,
    result
});

const getDetailMission = (result) => ({

    type: GET_DETAIL_MISSON,
    result
});

const getDeleteTeaCourse = (data) => ({
    type: DELETE_TEACHER_COURSE,
    data

})
export const getMissionApi = () => {
    return dispatch => {

        axios
            .get(`/api/teaMission.json`)
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

export const getAddTeaCourse = (record) => ({
    type: ADD_TEACHER_COURSE,
    record
})

export const DeleteTeadentCourse = (arg) => {
    return dispatch => {
        axios
            .get(`/api/deleteStudent.json?id= ${arg.id}`)
            .then(() => {
                dispatch(getDeleteTeaCourse(arg));
            })
            .catch(() => {
                console.log('error')
            });
    };
}
