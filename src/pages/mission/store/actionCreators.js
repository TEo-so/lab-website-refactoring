import axios from "axios";
import { GET_MISSION } from "./actionTypes";

const getMission = (result) => ({
    type: GET_MISSION,
    result
});

export const getMissionApi = () => {
    return dispatch => {
        console.log('调用接口')
        axios
            .get(`/api/mission.json`)
            .then(res => {
                const result = res.data;
                dispatch(getMission(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};
