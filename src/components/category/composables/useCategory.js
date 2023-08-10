import { getCategoryAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export const useCategory = () => {
    const route = useRoute();
    const categoryList = ref({});
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryList.value = res.result;
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