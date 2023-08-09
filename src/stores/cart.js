import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import { addToCartAPI, fetchNewCartAPI, delGoodInCartAPI } from "@/apis/cart.js";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // 更新购物车列表
    const updateNewList = async () => {
        const res = await fetchNewCartAPI()
        cartList.value = res.result
    }

    // 添加到购物车
    const addToCart = async (good) => {
        console.log(isLogin)
        if (isLogin) {
            // 调用添加购物车接口
            await addToCartAPI({
                skuId: good.skuId,
                count: good.count
            })
            await updateNewList()
        } else {
            // 本地商品到本地购物车
            const item = cartList.value.find(item => item.skuId === good.skuId)
            if (item) {
                item.count = item.count + good.count
            } else {
                cartList.value.push(good)
            }
        }

    }


    // 删除购物车中商品
    const delCart = async (skuId) => {
        if (isLogin) {
            delGoodInCartAPI([skuId])
            await updateNewList()
        } else {
            const goodIndex = cartList.value.findIndex(item => item.skuId === skuId)
            cartList.value.splice(goodIndex, 1)
        }

    }

    // 清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    const allCount = computed(() =>
        cartList.value.reduce((pre, item) => pre + item.count, 0)
    );

    const allPrice = computed(() =>
        cartList.value.reduce((pre, item) => pre + item.count * item.price, 0)
    );

    const singleChecked = (skuId, selected) => {
        console.log(skuId, selected)
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }

    const isAll = computed(() => cartList.value.every(item => item.selected))

    const selectAll = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    const allSelectedCount = computed(() =>
        cartList.value.filter(item => item.selected === true).reduce((pre, item) => pre + item.count, 0)
    );

    const allSelectedPrice = computed(() =>
        cartList.value.filter(item => item.selected === true).reduce((pre, item) => pre + item.count * item.price, 0)
    );

    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        allSelectedCount,
        allSelectedPrice,
        updateNewList,
        clearCart,
        addToCart,
        delCart,
        singleChecked,
        selectAll

    }
}, {
    persist: true
})