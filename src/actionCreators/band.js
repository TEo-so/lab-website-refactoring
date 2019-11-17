
import { GET_BAND } from "../actionTypes";
import { API } from '../common/index'

const getBand = (result) => ({
    type: GET_BAND,
    result: result
});


export const getBandApi = (page) => {
    return dispatch => {
        API.getBand(`?page = ${page}`)
            .then(res => {
                const result = res.data.data;
                dispatch(getBand(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};

