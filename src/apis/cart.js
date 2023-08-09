import http from "@/utils/http.js"

// 添加到购物车
export const addToCartAPI = (data) => {
    return http({
        url: '/member/cart',
        method: 'post',
        data
    })
}

// 拉取新数据
export const fetchNewCartAPI = () => {
    return http({
        url: '/member/cart'
    })
}

// 删除商品
export const delGoodInCartAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCartAPI = (data) => {
    return http({
        url: '/member/cart/merge',
        method: 'post',
        data
    })

}