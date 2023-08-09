import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/login'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cart'


export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})
    const getUserInfo = async (form) => {
        console.log(form)
        const res = await loginAPI(form)
        userInfo.value = res.result
        // 合并购物车
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }
    // 清除userinfo
    const clearUserInfo = () => {
        userInfo.value = {}
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }


},
    {
        persist: true,
    },)