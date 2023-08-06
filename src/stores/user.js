import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/login'

export const useUserStore = defineStore('user', () => {

    const userInfo = ref({})
    const getUserInfo = async (form) => {
        console.log(form)
        const res = await loginAPI(form)
        userInfo.value = res.result
    }
    // 清除userinfo
    const clearUserInfo = () => {
        userInfo.value = {}
        console.log(userInfo.value, "变了变了变了")
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