<template>
  <el-button @click="add" type="primary">新增</el-button>
  <NaturTable
    :columns="columns"
    :data="resData.list || []"
    :loading="loading"
    v-model:currentPage="pageParameter.pageNo"
    v-model:pageSize="pageParameter.pageSize"
    :total="resData.total || 0"
  >
    <template #iconUrl="{ row }">
      <el-image style="width: 40px; height: 40px" :src="row.iconUrl" fit="cover" />
    </template>

    <template #appStatus="{ row }">
      <el-tag :type="row.appStatus === 1 ? 'success' : 'danger'">
        {{ row.appStatus === 1 ? '已上架' : '未上架' }}
      </el-tag>
    </template>

    <template #isPay="{ row }">
      <el-tag :type="row.isPay === 1 ? 'danger' : 'success'">
        {{ row.isPay === 1 ? '付费' : '免费' }}
      </el-tag>
    </template>

    <template #operate="{ row }">
      <el-button-group>
        <el-button round :type="row.appStatus === 0 ? 'primary' : 'danger'">
          {{ row.appStatus === 0 ? '上架' : '下架' }}
        </el-button>
        <el-button round type="primary">修改</el-button>
        <el-button round>指定用户安装</el-button>
      </el-button-group>
    </template>
  </NaturTable>
</template>

<script setup>
  import { isRef, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage, ElMessageBox } from 'element-plus'

  import { getAppPage } from '@/api/appStore.api'

  import NaturTable from '@/components/NaturTable.vue'
  import { watchDeep, useRequest } from '@/components/hooks'

  const router = useRouter()

  const { loading, resData, run } = useRequest(getAppPage)

  const columns = [
    { property: 'id', label: 'appId', width: 80 },
    { property: 'iconUrl', label: 'icon', slot: true, width: 70 },
    { property: 'appName', label: '应用名称', width: 180 },
    { property: 'appVersion', label: '最新版本' },
    { property: 'appStatus', label: '状态', slot: true },
    { property: 'isPay', label: '是否付费', slot: true },
    { property: 'unitPrice', label: '价格' },
    { property: 'downloadCount', label: '下载次数' },
    { property: 'averageScore', label: '平均评分' },
    { property: 'operate', label: '操作', width: 280, align: 'center', slot: true }
  ]

  const pageParameter = $ref({ pageNo: 1, pageSize: 5 })

  watchDeep(pageParameter, () => getList())
  onMounted(() => getList())

  const getList = () => {
    run(pageParameter)
  }

  const add = () => {
    // router.push({ name: 'bannerEdit' })
  }
</script>

<style></style>
