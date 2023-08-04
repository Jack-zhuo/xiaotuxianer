import http from "@/utils/http.js"

export const getCategoryAPI = (id) => {
    return http({
        url: `/category?id=${id}`,
        // params: { id }
    })
}

export const getCategoryFilterAPI = (id) => {
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

export const getSubCategoryAPI = (data) => {
    return http({
        url: "/category/goods/temporary",
        method: 'post',
        data,
    })
}