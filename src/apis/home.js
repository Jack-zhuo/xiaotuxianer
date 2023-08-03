import http from '@/utils/http.js'

export const getBannerAPI = (params = {}) => {
    const { distributionSite = '1' } = params
    return http({
        url: "home/banner",
        params: {
            distributionSite
        }
    })
}
export const findNewAPI = () => {
    return http({
        url: 'home/new'
    })
}
export const getGoodsAPI = () => {
    return http({
        url: "/home/goods"
    })
}