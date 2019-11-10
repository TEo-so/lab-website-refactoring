import axios from "axios";
import { GET_TEACHER_COURSE, GET_DETAIL_MISSON } from "./actionTypes";
import { getAddTeaCourse } from '../../TeacherMission/store/actionCreators'

export const getCourse = (result) => ({
    type: GET_TEACHER_COURSE,
    result
});

const getDetailMission = (result) => ({

    type: GET_DETAIL_MISSON,
    result
});

export const getCourseApi = () => {
    return dispatch => {

        axios
            .get(`/api/course.json`)
            .then(res => {
                const result = res.data;
                dispatch(getCourse(result));

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

export const AddTeacherCourse = (record) => {
    const id = record.id
    return dispatch => {
        axios
            .get(`/api/detailMission.json?id = ${id}`)  //随便用的id 
            .then(() => {

                dispatch(getAddTeaCourse(record));
            })
            .catch(() => {
                console.log('error')
            });
    };

}
