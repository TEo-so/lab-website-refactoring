import { API } from '../common/index'
import {
    GET_STUDENT_MISSION,
    GET_DETAIL_MISSON,
    DELETE_STUDENT_COURSE,
    ADD_STUDENT_COURSE,
    GET_WORK
} from "../actionTypes";

export const getMission = (result) => ({
    type: GET_STUDENT_MISSION,
    result
});

const getDetailMission = (result) => ({
    type: GET_DETAIL_MISSON,
    result
});

const getDeleteStuCourse = (data) => ({
    type: DELETE_STUDENT_COURSE,
    data

})

const getWork = (result) => ({
    type: GET_WORK,
    result
})



export const getMissionApi = () => {
    return dispatch => {
        API.getStuMission()
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
        API.getStuDetail()
            .then(res => {
                const result = res.data;
                dispatch(getDetailMission(result));
            })
            .catch(() => {
                console.log('error')
            });
    };
}

export const DeleteStudentCourse = (arg) => {
    return dispatch => {
        API.DeleteStuMission()
            .then(() => {
                dispatch(getDeleteStuCourse(arg));
            })
            .catch(() => {
                console.log('error')
            });
    };
}


export const getAddStuCourse = (record) => ({
    type: ADD_STUDENT_COURSE,
    record
})

export const getWorkApi = (id) => {
    return dispatch => {
        API.getWork()
            .then((res) => {
                const result = res.data;
                dispatch(getWork(result));
            })
            .catch(() => {
                console.log('error')
            });
    };

}

