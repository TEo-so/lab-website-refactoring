import { fromJS } from "immutable";
import { GET_LOGIN, GET_LOGIN_OUT, GET_REGISTER } from "../actionTypes";




// 需要的字段 用户名 身份 登录状态 
const defaultState = fromJS({
    username: null,
    type: "teacher",
    isLogin: true,

});

export default (state = defaultState, action) => {


    if (action.type === GET_LOGIN) {

        return state.merge({
            isLogin: true,
            username: action.result.data.userName,
            type: action.result.data.type,

        });
    }
    else if (action.type === GET_LOGIN_OUT) {
        return state.merge({
            isLogin: false,
            username: null,
            type: "visitor",

        });
    }
    else if (action.type === GET_REGISTER) {
        alert("注册提交")
        return state.merge({
            isLogin: false,


        });

    }

    return state;
};


