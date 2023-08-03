import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout.js";
import { onMounted, ref } from "vue";

export const useCategoryStore = defineStore('category', () => {

    const categoryList = ref([]);
    const getCategory = async () => {
        const res = await getCategoryAPI();
        if (res.status !== 200) return alert("请求数据失败");
        categoryList.value = res.data.result;
    };

    return {
        categoryList,
        getCategory
    }

})

