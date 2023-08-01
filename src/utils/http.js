import axios from "axios";

const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// http.interceptors.request.use(() => { }, () => { })
// http.interceptors.response.use(() => { }, () => { })

export default http