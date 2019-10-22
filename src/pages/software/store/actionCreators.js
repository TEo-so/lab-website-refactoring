import axios from "axios";
import { GET_SOFTWARE } from "./actionTypes";

const getSoftware = (result) => ({
    type: GET_SOFTWARE,
    result
});

export const getSoftwareApi = () => {
    return dispatch => {
        console.log('调用接口')
        axios
            .get(`/api/software.json`)
            .then(res => {
                const result = res.data;
                dispatch(getSoftware(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
