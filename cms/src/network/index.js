import axios from 'axios'
import { ElMessage  } from 'element-plus'
import NProgress from 'nprogress';

// 配置默认的请求地址
axios.default.baseURL=''
axios.default.timeout=60000;

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 进度条开启
    NProgress.start();
    return config
},error =>{
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use((res) => {
    // 进度条关闭
    NProgress.done();
    // 错误处理
    return res;
},error => {
    NProgress.done();
    return Promise.reject(new Error(error));
})



export default axios;
