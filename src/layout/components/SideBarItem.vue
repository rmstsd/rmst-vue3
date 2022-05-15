<template>
  <template v-if="!routeItem.hidden">
    <router-link
      v-if="!routeItem.children || routeItem.children.length === 1"
      :to="{ name: onlyRouteItem.name }"
    >
      <el-menu-item :index="onlyRouteItem.name">
        {{ onlyRouteItem?.meta?.title }}
      </el-menu-item>
    </router-link>

    <el-sub-menu v-else :index="routeItem.name" popper-append-to-body>
      <template #title>
        {{ routeItem?.meta?.title }}
      </template>

      <!-- 递归组件 和文件名字一样就行 -->
      <SideBarItem v-for="childItem in routeItem.children" :key="childItem.path" :routeItem="childItem" />
    </el-sub-menu>
  </template>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    routeItem: Object
  })
  const onlyRouteItem = computed(() => {
    const { routeItem } = props
    if (routeItem.children && routeItem.children.length === 1) return routeItem.children[0]
    else return routeItem
  })
</script>

<style lang="scss" scoped>
  a {
    display: inline-block;
    width: 100%;
  }

  a,
  a:focus,
  a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
</style>
