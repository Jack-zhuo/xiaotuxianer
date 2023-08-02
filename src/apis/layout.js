import http from '@/utils/http.js'

export const getCategoryAPI = () => {
    return http({
        url: '/home/category/head'
    })
}