import axios from "axios";
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user.js";
import router from "@/router/index.js";


const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

http.interceptors.request.use(config => {
    const userStore = useUserStore()
    const { token } = userStore.userInfo
    config.headers.Authorization = `Bearer ${token}`
    return config
}, e => Promise.reject(e))

http.interceptors.response.use(res => res.data, e => {
    const { clearUserInfo } = useUserStore()
    ElMessage({
        message: e.response.data.message,
        type: 'warning'
    })
    if (e.response.status === 401) {
        clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default http