<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "@/components/home/components/GoodsItem.vue";

const route = useRoute();

// 获取面包屑导航
const categoryFilterList = ref({});
const getCategoryFilter = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  categoryFilterList.value = res.data.result;
};
onMounted(() => getCategoryFilter());
const disabled = ref(false);

// 获取商品数据
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const goodsList = ref([]);
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqData);
  //   goodsList.value = res.data.result.items;
  console.log(res.data.result.items);
  if (res.data.result.items.length === 0) return (disabled.value = true);
  goodsList.value = [...goodsList.value, ...res.data.result.items];
};
onMounted(() => getSubCategory());

function tabChange(e) {
  reqData.value.page = 1;
  getSubCategory();
}
// 无限加载

const load = (e) => {
  reqData.value.page++;
  getSubCategory();
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${categoryFilterList.parentId}` }"
          >{{ categoryFilterList.parentName }}</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ categoryFilterList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <goods-item
          v-for="good in goodsList"
          :good="good"
          :key="good.id"
        ></goods-item>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>