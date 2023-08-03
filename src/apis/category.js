import http from "@/utils/http.js"

export const getCategoryAPI = (id) => {
    return http({
        url: `/category?id=${id}`,
        // params: { id }
    })
}