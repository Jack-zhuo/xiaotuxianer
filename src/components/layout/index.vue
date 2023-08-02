<template>
  <layout-nav></layout-nav>
  <layout-header></layout-header>
  <router-view></router-view>
  <layout-footer></layout-footer>
</template>

<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
</script>
