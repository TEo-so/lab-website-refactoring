import { GET_RESOURCE } from "../actionTypes";
import { API } from '../common/index'

export const getResource = (result) => ({
    type: GET_RESOURCE,
    result
});

export const getResourceApi = () => {
    return dispatch => {
        API.getResource()
            .then(res => {
                const result = res.data;
                dispatch(getResource(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
