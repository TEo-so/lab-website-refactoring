import { fromJS } from "immutable";
import { GET_LOGIN, GET_LOGIN_OUT, GET_REGISTER } from "../actionTypes";




// 需要的字段 用户名 身份 登录状态 
const defaultState = fromJS({
    username: null,
    type: "visitor",
    isLogin: false,

});

export default (state = defaultState, action) => {
    if (action.type === GET_LOGIN) {
        if (true) {
            return state.merge({
                isLogin: true,
                username: action.result.data.userName,
                type: action.result.data.type,

            });
        } else {
            alert('登录失败')
        }

    }

    else if (action.type === GET_LOGIN_OUT) {
        return state.merge({
            isLogin: false,
            username: null,
            type: "visitor",

        });
    }
    else if (action.type === GET_REGISTER) {
        const result = action.result.error_code
        if (result === 0) {
            alert('注册成功！请等待老师或者管理员审核！')
            return state.merge({
                isLogin: false,
            });
        }


    }

    return state;
};


