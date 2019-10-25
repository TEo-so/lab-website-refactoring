import axios from "axios";
import { GET_BAND } from "./actionTypes";

const getBand = (result) => ({
    type: GET_BAND,
    result: result
});

export const getBandApi = () => {
    return dispatch => {

        axios
            .get(`/api/band.json`)
            .then(res => {
                const result = res.data.data.items;
                dispatch(getBand(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
