<template>
  <el-table :data="data" v-bind="$attrs" ref="elTableRef" v-loading="loading">
    <el-table-column
      v-for="colItem of columns"
      :key="colItem.property"
      v-bind="(colItem as ElTableColumnType)"
    >
      <template v-if="colItem.slot" #default="scope">
        <slot :name="colItem.property" v-bind="scope" />
      </template>
    </el-table-column>

    <el-table-column ppty></el-table-column>
  </el-table>

  <el-pagination
    v-if="pagConfig"
    v-bind="pagConfig"
    :current-page="pagConfig.pageNo"
    @current-change="currentChange"
    :page-size="pagConfig.pageSize"
    @size-change="sizeChange"
    :total="total"
    background
    layout="total, sizes, prev, pager, next"
    :page-sizes="[5, 10, 20, 30]"
    style="margin-top: 10px"
  />
</template>

<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>

<script setup lang="ts">
  import { PropType, ref } from 'vue'

  import { paginationProps } from 'element-plus'

  type IColumnType = { slot?: boolean }

  const props = defineProps({
    columns: { type: Array as PropType<IColumnType[]>, required: true },
    data: { type: Array, required: true },
    loading: { type: Boolean, default: false },

    pagConfig: {
      type: Object as PropType<{ pageNo: number; pageSize: number }>
      // default: () => ({ pageNo: 1, pageSize: 10 })
    },

    currentPage: { type: Number },
    pageSize: { type: Number },
    total: { type: Number },

    ...paginationProps
  })

  const emit = defineEmits(['update:pagConfig'])
  const elTableRef = ref(null)

  const currentChange = (v: number) => {
    emit('update:pagConfig', { pageNo: v, pageSize: props.pagConfig.pageSize })
  }

  const sizeChange = (v: number) => {
    emit('update:pagConfig', { pageNo: props.pagConfig.pageNo, pageSize: v })
  }

  defineExpose({ elTableRef })
</script>

<style scoped lang="scss"></style>
