import axios from "axios";
import { GET_MISSION, GET_DETAIL_MISSON } from "./actionTypes";

const getMission = (result) => ({
    type: GET_MISSION,
    result
});

const getDetailMission = (result) => ({

    type: GET_DETAIL_MISSON,
    result
});

export const getMissionApi = () => {
    return dispatch => {

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

export const getDetailMissionApi = (id) => {

    return dispatch => {

        axios
            .get(`/api/detailMission.json?id = ${id}`)
            .then(res => {
                const result = res.data;
                console.log(result)

                dispatch(getDetailMission(result));

            })
            .catch(() => {
                console.log('error')
            });
    };

}
