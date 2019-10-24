import axios from "axios";
import { GET_RESOURCE } from "./actionTypes";

const getResource = (result) => ({
    type: GET_RESOURCE,
    result
});

export const getResourceApi = () => {
    return dispatch => {
        axios
            .get(`/api/resource.json`)
            .then(res => {
                const result = res.data;
                dispatch(getResource(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
