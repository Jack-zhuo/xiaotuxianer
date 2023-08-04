import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import Login from '@/components/login/index.vue'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'
import subCategory from '@/components/subCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Layout, children: [
        { path: '', component: Home },
        { path: '/category/:id', component: Category },
        { path: '/category/sub/:id', component: subCategory }
      ]
    },
    { path: '/login', component: Login }

  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
