import axios from 'axios'


let url = process.env.NODE_ENV !== 'production' ? '' : 'https://www.zhihu.com/api';
// 根据当前到底是开发环境 还是生产环境来决定 基础路径是哪个 开发环境下 不需要基础路径
// 因为 开发环境下  我们就是让请求  去localhost:8080 然后node会根据配置的 proxy代理
// 将请求 转接到 对应的远程地址 ; proxy只在开发环境下有用  生产环境下 是没用的
const http = axios.create({
    baseURL: url,
    // transformRequest(data) {
    //     console.log(data)
    //     // lodash
    //     let str = '';
    //     for(let k in data){
    //         str += `${k}=${data[k]}&`
    //     }
    //     return str;
    // },
    params: {
        t: Math.random()
    },
    timeout: 1000
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    console.log(response.data)

    // 在发送请求之前做些什么
    return response.data;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
export default http
