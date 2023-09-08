import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import router from "@/router";


// 创建 Axios 实例，配置基地址
const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000,
});

// axios 请求拦截器，在请求被 then 或 catch 处理前拦截它们。
httpInstance.interceptors.request.use(
    (config) => {
        //...
    },
    (error) => Promise.reject(error)
);


// axios 响应式拦截器
httpInstance.interceptors.response.use(
    (res) => res.data,
    (e) => {
        //...
    }
);

export default httpInstance;