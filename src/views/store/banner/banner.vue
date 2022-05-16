<template>
  <el-button @click="add" type="primary">新增</el-button>
  <NaturTable :columns="columns" :data="data" v-model:pagConfig="pageParameter" :total="total">
    <template #imageUrl="{ row }">
      <el-image style="width: 100px; height: 80px" :src="row.imageUrl" fit="cover" />
    </template>

    <template #bannerType="{ row }">
      {{ bannerTypeMap.get(row.bannerType) }}
    </template>

    <template #bannerStatus="{ row }">
      <el-tag :type="row.bannerStatus === 1 ? 'success' : 'danger'">
        {{ bannerStatusMap.get(row.bannerStatus) }}
      </el-tag>
    </template>

    <template #operate="{ row }">
      <el-button-group>
        <el-button v-if="row.bannerStatus == 1" type="info" round @click="cancelPublish(row.id)">
          取消发布
        </el-button>

        <template v-else>
          <el-button round type="primary" @click="publish(row.id)">发布</el-button>
          <el-button round type="danger" @click="deleteItem(row.id)">删除</el-button>
        </template>
      </el-button-group>
    </template>
  </NaturTable>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { getBannerList, pushBanner, unPush, deleteBanner } from '@/api/appStore.api'

  import NaturTable from '@/components/NaturTable.vue'
  import { ElMessage, ElMessageBox } from 'element-plus'

  import { bannerTypeMap } from './constant'

  const router = useRouter()

  const bannerStatusMap = new Map([
    [0, '未发布'],
    [1, '已发布']
  ])

  const columns = [
    { property: 'id', label: 'ID', width: 80 },
    { property: 'imageUrl', label: '图片', slot: true },
    { property: 'bannerName', label: '名称' },
    { property: 'bannerType', label: '跳转类型', slot: true },
    { property: 'bannerValueName', label: '跳转值' },
    { property: 'bannerStatus', label: '状态', slot: true },
    { property: 'operate', label: '操作', width: 180, slot: true }
  ]
  const data = ref([])

  const pageParameter = ref({ pageNo: 1, pageSize: 2 })
  const total = ref(0)

  watch(
    () => pageParameter,
    () => getList()
  )
  onMounted(() => getList())

  const getList = () => {
    getBannerList(pageParameter.value).then(res => {
      // console.log(res)

      data.value = res.list
      total.value = res.total
    })
  }

  const publish = id => {
    pushBanner({ bannerId: id }).then(() => {
      ElMessage.success('操作成功')

      getList()
    })
  }
  const cancelPublish = id => {
    unPush({ bannerId: id }).then(() => {
      ElMessage.success('操作成功')

      getList()
    })
  }
  const deleteItem = id => {
    ElMessageBox.confirm('确认删除？', '提示', { type: 'warning' }).then(() => {
      deleteBanner({ bannerId: id }).then(() => {
        ElMessage.success('操作成功')

        getList()
      })
    })
  }

  const add = () => {
    router.push({ name: 'bannerEdit' })
  }
</script>

<style></style>
