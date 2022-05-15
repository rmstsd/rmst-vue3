<template>
  <NaturTable
    :columns="columns"
    :data="data"
    row-key="id"
    default-expand-all
    :tree-props="{ children: 'childList' }"
    :pagination="false"
    border
  >
    <template #operate="{ row }">
      <el-button-group>
        <el-button type="primary" round @click="edit(scope.row)">编辑</el-button>
        <el-button type="danger" round @click="deleted(scope.row)">删除</el-button>
      </el-button-group>
    </template>
  </NaturTable>
</template>

<script setup>
  import { onMounted } from 'vue'
  import NaturTable from '@/components/NaturTable.vue'

  import { getMenuTree, deleteMenu, getMenuList, updatedMenu } from '@/api/system.api'

  const columns = [
    { property: 'menuName', label: '菜单名称' },
    { property: 'menuUrl', label: '请求地址' },
    { property: 'createdTime', label: '创建时间' },
    { property: 'operate', label: '操作', width: 150, align: 'center', slot: true }
  ]
  const data = ref([])

  onMounted(() => {
    getMenuTree().then(res => {
      data.value = res
    })
  })
</script>

<style lang="less" scoped></style>
