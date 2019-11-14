import { GET_SOFTWARE } from "../actionTypes";
import { API } from '../common/index'

export const getSoftware = (result) => ({
    type: GET_SOFTWARE,
    result
});

export const getSoftwareApi = () => {
    return dispatch => {
        API.getSoftware()
            .then(res => {
                const result = res.data;
                dispatch(getSoftware(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
