
import { GET_TEACHER_MISSION, GET_TEA_DETAIL_MISSION, ADD_TEACHER_COURSE, DELETE_TEACHER_COURSE } from "../actionTypes";
import { API } from '../common/index'
export const getMission = (result) => ({
    type: GET_TEACHER_MISSION,
    result
});

const getDetailMission = (result) => ({

    type: GET_TEA_DETAIL_MISSION,
    result
});

const getDeleteTeaCourse = (data) => ({
    type: DELETE_TEACHER_COURSE,
    data

})
export const getMissionApi = () => {
    return dispatch => {

        API.getTeaMission()
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

        API.getTeaMisDetail()
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
        API.deleteTeaMission()
            .then(() => {
                dispatch(getDeleteTeaCourse(arg));
            })
            .catch(() => {
                console.log('error')
            });
    };
}
