import { getCategoryAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export const useCategory = () => {
    const route = useRoute();
    const categoryList = ref({});
    const getCategory = async (id = route.params.id) => {
        console.log("ceshi", id)
        const res = await getCategoryAPI(id);
        categoryList.value = res.data.result;
    };
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    });
    onMounted(() => {
        getCategory();
    })
    return {
        categoryList
    }
}