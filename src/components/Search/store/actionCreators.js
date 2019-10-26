
import { GET_DEFAULT_SELECT, GET_CHANGE_SELECT, GET_API } from "./actionTypes";
import { getMission } from '../../../pages/mission/store/actionCreators'
import { getResource } from '../../../pages/resource/store/actionCreators'
import { getSoftware } from '../../../pages/software/store/actionCreators'



import axios from 'axios'

export const getDefaultSelect = (value) => ({
    type: GET_DEFAULT_SELECT,
    selectValue: value
});

export const getChangeSelect = (value) => ({
    type: GET_CHANGE_SELECT,
    selectValue: value
});

export const getApi = (value) => ({
    type: GET_API,
    correctApi: value
})

// const getSearchContent = (value) => ({
//     type: GET_SEARCH,
//     correctContent: value
// })

export const getSearchApi = (value) => {


    return dispatch => {
        axios
            .get(value)
            .then(res => {
                const result = res.data;
                if (value.includes('mission')) {
                    dispatch(getMission(result))
                } else if (value.includes('resource')) {
                    dispatch(getResource(result))
                } else if (value.includes('software')) {
                    dispatch(getSoftware(result))

                }

            })
            .catch(() => {
                console.log('error')
            });
    };


}






