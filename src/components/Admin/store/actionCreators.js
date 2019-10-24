import axios from "axios";
import { GET_LOGIN, GET_LOGIN_OUT, GET_REGISTER } from "./actionTypes";

const getLogin = (result) => ({
    type: GET_LOGIN,
    result
});

const getLoginOut = () => ({
    type: GET_LOGIN_OUT,

});

const getRegister = () => ({
    type: GET_REGISTER,

});

export const getLoginApi = (values) => {
    return dispatch => {

        axios
            // .post(`/api/login.json`, values)
            .get(`/api/login.json`)
            .then(res => {
                const result = res.data;
                dispatch(getLogin(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};


export const getLoginOutApi = () => {
    return dispatch => {

        axios
            .get(`/api/loginOut.json`)
            .then(() => {

                dispatch(getLoginOut());

            })
            .catch(() => {
                console.log('error')
            });
    };
};


export const getRegisterApi = (values) => {
    return dispatch => {
        console.log(values)

        axios
            .get(`/api/register.json`)
            .then(() => {

                dispatch(getRegister());

            })
            .catch(() => {
                console.log('error')
            });
    };
};
