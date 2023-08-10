import http from "@/utils/http.js"

export const loginAPI = (form) => {
    console.log(form)
    return http({
        url: '/login',
        method: 'post',
        data: form
    })
}

export const getLikeListAPI = (limit = 4) => {
    return http({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}