import http from "@/utils/http.js"

export const loginAPI = (form) => {
    console.log(form)
    return http({
        url: '/login',
        method: 'post',
        data: form
    })
}