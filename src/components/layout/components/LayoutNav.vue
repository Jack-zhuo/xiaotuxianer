<script setup>
import { useUserStore } from "@/stores/user.js";
import { useCartStore } from "@/stores/cart.js";
import { useRouter } from "vue-router";
const { userInfo, clearUserInfo } = useUserStore();
const cartStore = useCartStore();
const router = useRouter();

const confirm = () => {
  clearUserInfo();
  cartStore.clearCart();
  gotoLogin();
};
const gotoLogin = () => {
  router.push("/login");
};
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userInfo.token">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-user"></i>{{ userInfo.account }}</a
            >
          </li>
          <li>
            <el-popconfirm
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="confirm"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li>
            <a @click="$router.push('/member')">会员中心</a>
          </li>
        </template>
        <template v-else>
          <li>
            <a href="javascript:;" @click="gotoLogin">请先登录</a>
          </li>
          <li>
            <router-link to="/login">请先登录</router-link>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>