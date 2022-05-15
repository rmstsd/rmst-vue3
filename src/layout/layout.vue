<template>
  <div class="main-layout">
    <aside class="aside-wrapper">
      <Sidebar />
    </aside>

    <section class="right-content">
      <header class="top-header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{ route.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-button class="logout-btn" @click="logout">退出登录</el-button>
      </header>

      <main style="padding: 10px">
        <router-view />
      </main>
    </section>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/store.user'
  import { useRoute } from 'vue-router'
  import Sidebar from './components/SideBar.vue'

  const route = useRoute()
  const userStore = useUserStore()

  const logout = () => {
    userStore.resetState()
  }
</script>

<style lang="scss" scoped>
  .main-layout {
    height: 100%;

    .aside-wrapper {
      width: 200px;
      height: 100%;
      background-color: #304156;

      position: fixed;
      left: 0;
      top: 0;
    }

    .right-content {
      margin-left: 200px;
      min-height: 100%;
    }
  }

  .top-header {
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
</style>
