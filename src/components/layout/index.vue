<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category.js";
const category = useCategoryStore();
category.getCategory();
</script>

<template>
  <layout-fixed></layout-fixed>
  <layout-nav></layout-nav>
  <layout-header></layout-header>
  <!-- <router-view :key="$route.fullPath"></router-view> -->
  <router-view></router-view>
  <layout-footer></layout-footer>
</template>

