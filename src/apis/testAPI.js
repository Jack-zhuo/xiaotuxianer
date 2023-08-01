import http from '@/utils/http.js'

export const getCategory = () => {
    return http({
        url: 'home/category/head'
    })
}