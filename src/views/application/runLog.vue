<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="form.search" placeholder="手机号/企业名称/应用名称" clearable style="width: 220px" />
    </el-form-item>
    <el-form-item label="运行端：">
      <el-select placeholder="请选择" clearable v-model="form.runSource" style="width: 110px">
        <el-option label="studio" :value="1" />
        <el-option label="robot" :value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="用户类型：">
      <el-select placeholder="请选择" clearable v-model="form.userSource" style="width: 110px">
        <el-option v-for="[value, label] of userSourceMap" :value="value" :label="label" :key="value" />
      </el-select>
    </el-form-item>
    <el-form-item label="运行状态：">
      <el-select placeholder="请选择" clearable v-model="form.runStatus" style="width: 110px">
        <el-option v-for="[value, label] of runStatusMap" :value="value" :label="label" :key="value" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSearch" :loading="loading" style="width: 80px">查询</el-button>
    </el-form-item>

    <el-form-item>
      <el-button @click="runExport(form)" :loading="exportLoading" style="width: 80px">导出</el-button>
    </el-form-item>
  </el-form>

  <!-- v-model:currentPage="pageParameter.pageNo"
    v-model:pageSize="pageParameter.pageSize" -->

  <NaturTable
    :columns="columns"
    :data="resData.list || []"
    :loading="loading"
    v-model:pagConfig="pageParameter"
    :total="resData.total || 0"
  >
    <template #userSource="{ row }">
      {{ userSourceMap.get(row.userSource) }}
    </template>

    <template #runSource="{ row }">
      {{ runSourceMap.get(row.runSource) }}
    </template>

    <template #runTime="{ row }">
      {{ handleRunTime(row.runTime) }}
    </template>

    <template #runStatus="{ row }">
      {{ runStatusMap.get(row.runStatus) }}
    </template>
  </NaturTable>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'

  import { exportRunTimeExcel, getRunTimeList } from '@/api/application.api'

  import NaturTable from '@/components/NaturTable.vue'
  import { useRequest } from '@/components/hooks'

  import { parseTime, getCurrDate } from '@/utils/parseTime'
  import { downloadExcel } from '@/utils/byteStream'

  import { userSourceMap, runSourceMap, runStatusMap, handleRunTime } from './constant'

  onMounted(() => {
    const ff = Object.assign({}, pageParameter, form)
    getRunTimeList(ff).then(res => {
      console.log(res.list[0].createdTime)
    })
  })

  const { loading, resData, run } = useRequest(getRunTimeList)
  const { loading: exportLoading, run: runExport } = useRequest(exportRunTimeExcel, {
    // onSuccess: res => {
    //   downloadExcel(res, `运行日志${getCurrDate()}`)
    // }
  })

  const columns = [
    { property: 'id', label: 'id', width: 80 },
    { property: 'phone', label: '手机号码', width: 120 },
    { property: 'userSource', label: '用户类型', slot: true },
    { property: 'name', label: '企业名称', 'show-overflow-tooltip': true },
    { property: 'appName', label: '应用名称', 'show-overflow-tooltip': true },
    { property: 'appVersion', label: '版本号' },
    { property: 'runSource', label: '运行端', width: 70, slot: true },
    { property: 'startTime', label: '启动时间', 'min-width': 130 },
    { property: 'endTime', label: '结束时间', 'min-width': 130 },
    { property: 'runTime', label: '运行时长', slot: true },
    { property: 'runStatus', label: '运行状态', slot: true }
  ]

  const pageParameter = $ref({ pageNo: 1, pageSize: 5 })
  const form = $ref({
    search: '',
    runSource: null,
    userSource: null,
    runStatus: null
  })

  watch(
    () => pageParameter,
    () => {
      getList()
    }
  )
  onMounted(() => getList())

  const getList = () => {
    run(pageParameter)
  }

  const handleSearch = () => {
    pageParameter.pageNo = 1
    run(Object.assign({}, pageParameter, form))
  }
</script>

<style></style>
