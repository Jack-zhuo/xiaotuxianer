import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])

    // 添加到购物车
    const addToCart = (good) => {
        const item = cartList.value.find(item => item.skuId === good.skuId)
        if (item) {
            item.count = item.count + good.count
        } else {
            cartList.value.push(good)
        }
    }

    // 删除购物车中商品
    const delCart = (skuId) => {
        const goodIndex = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(goodIndex, 1)
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


    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        addToCart,
        delCart,
        singleChecked,
        selectAll

    }
}, {
    persist: true
})