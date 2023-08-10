import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import Login from '@/components/login/index.vue'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'
import subCategory from '@/components/subCategory/index.vue'
import Detail from '@/components/detail/index.vue'
import CartList from "@/components/cartList/index.vue"
import Checkout from "@/components/Checkout/index.vue"
import pay from "@/components/Pay/index.vue"
import PayBack from "@/components/Pay/PayBack.vue"
import Member from "@/components/Member/index.vue"
import UserInfo from "@/components/Member/components/userInfo.vue"
import UserOrder from "@/components/Member/components/userOrder.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Layout, children: [
        { path: '', component: Home },
        { path: '/category/:id', component: Category },
        { path: '/category/sub/:id', component: subCategory },
        { path: '/detail/:id', component: Detail },
        { path: '/cartlist', component: CartList },
        { path: '/checkout', component: Checkout },
        { path: '/pay', component: pay },
        { path: '/paycallback', component: PayBack },
        {
          path: 'member', component: Member, children: [
            { path: '', component: UserInfo },
            { path: 'user', component: UserInfo },
            { path: 'order', component: UserOrder }
          ]
        }
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
