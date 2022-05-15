<template>
  <el-scrollbar wrap-class="aside-scrollbar-container">
    <el-menu
      mode="vertical"
      :default-active="active"
      unique-opened
      background-color="transparent"
      active-text-color="#1890ff"
      text-color="#bfcbd9"
    >
      <SideBarItem v-for="route in permissionRoutes" :key="route.path" :routeItem="route" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import { permissionRoutes } from '@/router/router.index'
  import SideBarItem from './SideBarItem.vue'

  const route = useRoute()

  const active = computed(() => {
    return route.name
  })
</script>

<style lang="scss">
  .aside-scrollbar-container {
    height: 100%;

    .el-menu {
      border-right: none;
    }

    .el-sub-menu {
      .el-menu {
        background-color: #263546;
      }
    }

    .el-sub-menu__title {
      &:hover {
        background-color: #384d66 !important;
      }
    }
  }
</style>
