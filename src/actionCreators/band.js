
import { GET_BAND } from "../actionTypes";
import { API } from '../common/index'

const getBand = (result) => ({
    type: GET_BAND,
    result: result
});


export const getBandApi = () => {
    return dispatch => {
        API.getBand()
            .then(res => {
                const result = res.data.data.items;
                dispatch(getBand(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};

