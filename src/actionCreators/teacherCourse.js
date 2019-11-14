
import { GET_TEACHER_COURSE, GET_TEA_DETAIL_COURSE } from "../actionTypes";
import { API } from '../common/index'
// import { getAddTeaCourse } from '../../TeacherMission/store/actionCreators'
import { getAddTeaCourse } from './teaMission'

export const getCourse = (result) => ({
    type: GET_TEACHER_COURSE,
    result
});

const getDetailMission = (result) => ({

    type: GET_TEA_DETAIL_COURSE,
    result
});

export const getCourseApi = () => {
    return dispatch => {

        API.getCourse()
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
        API.getTeaCouDetail(id)
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
        API.getAddTeaCourse(id)  //随便用的id 
            .then(() => {

                dispatch(getAddTeaCourse(record));
            })
            .catch(() => {
                console.log('error')
            });
    };

}
