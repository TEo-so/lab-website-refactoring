import axios from 'axios'

//  创建一个实例 
const instance = axios.create({
    baseURL: '/api',
    // baseURL: 'http://192.168.43.211:8080'
    // timeout: 1000,  请求延时时间  
    // headers: {}     请求头规定
});

//响应拦截暂时未设置



// 封装get post  delete 方法
export default {
    get: (url, params, option) => {
        return instance.get(url, Object.assign({}, option, { params }));
    },
    post: (url, params, option) => {
        return instance.post(url, params, option);
    },
    delete: (url, params, option) => {
        return instance.delete(url, Object.assign({}, option, { params }));
    }
}

