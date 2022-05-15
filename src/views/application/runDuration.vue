<template>
  <el-form :inline="true">
    <el-form-item>
      <el-select v-model="form.tenantId" filterable placeholder="选择企业" clearable>
        <el-option v-for="item in enterpriseList" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
    </el-form-item>

    <el-form-item label="运行日期:">
      <el-date-picker
        v-model="form.startTime"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="开始日期"
        style="width: 140px"
      />
      <span style="margin: 0 15px">至</span>
      <el-date-picker
        v-model="form.endTime"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="结束日期"
        style="width: 140px"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="runExport(form)" :loading="exportLoading">导出</el-button>
    </el-form-item>
  </el-form>

  <NaturTable
    :columns="columns"
    :data="resData.list || []"
    :loading="loading"
    v-model:currentPage="pageParameter.pageNo"
    v-model:pageSize="pageParameter.pageSize"
    :total="resData.total || 0"
  >
    <template #runTime="{ row }">
      {{ handleRunTime(row.runTime) }}
    </template>
  </NaturTable>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  import { getRunTimeReportList, exportRunDurationExcel } from '@/api/application.api'
  import { getEnterpriseLists } from '@/api/enterprise.api'

  import NaturTable from '@/components/NaturTable.vue'
  import { watchDeep, useRequest } from '@/components/hooks'

  import { parseTime, getCurrDate } from '@/utils/parseTime'
  import { downloadExcel } from '@/utils/byteStream'
  import { handleRunTime } from './constant'

  const { resData: enterpriseList, run: runGetEnterpriseLists } = useRequest(getEnterpriseLists)
  const { loading, resData, run } = useRequest(getRunTimeReportList)
  const { loading: exportLoading, run: runExport } = useRequest(exportRunDurationExcel, {
    onSuccess: res => {
      downloadExcel(res, `运行日志${getCurrDate()}`)
    }
  })

  const columns = [
    { property: 'id', label: 'id', width: 80 },
    { property: 'enterpriseName', label: '企业名称' },
    { property: 'runDate', label: '日期' },
    { property: 'runTime', label: '运行时长', slot: true }
  ]

  const prevDayDate = new Date(Date.now() - 24 * 60 * 60 * 1000) // 前一天

  const Y = prevDayDate.getFullYear()
  const M = prevDayDate.getMonth() + 1
  const D = prevDayDate.getDate()

  const Y_str = String(Y).padStart(2, '0')
  const M_str = String(M).padStart(2, '0')
  const D_str = String(D).padStart(2, '0')

  const dateStr = `${Y_str}-${M_str}-${D_str}`

  const pageParameter = $ref({ pageNo: 1, pageSize: 5 })
  const form = $ref({
    tenantId: null,
    startTime: dateStr,
    endTime: dateStr
  })

  watchDeep(pageParameter, () => getList())
  onMounted(() => {
    runGetEnterpriseLists()
    getList()
  })

  const getList = () => {
    run(Object.assign({}, pageParameter, form))
  }

  const handleSearch = () => {
    pageParameter.pageNo = 1
    run(Object.assign({}, pageParameter, form))
  }
</script>

<style></style>
