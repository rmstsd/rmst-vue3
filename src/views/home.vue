<template>
  <!-- <MdEditor v-model="mdStr" /> -->

  <el-divider />

  <NaturTable
    :columns="columns"
    :data="data"
    v-model:pagConfig="pageParameter"
    :total="50"
    ref="naturTableRef"
  >
    <template #age="{ row }">
      <el-button style="color: purple" @click="consoleLog(row)">
        {{ row.age }}
      </el-button>
    </template>

    <template #operate="{ row }">
      <el-button @click="consoleLog(row.id)">删除</el-button>
    </template>
  </NaturTable>

  <n-ellipsis :line-clamp="2">
    电灯熄灭物换星移泥牛入海电灯熄灭物换星移泥牛入海电灯熄灭物换星移泥牛入海 电灯熄灭物换星移泥牛入海
  </n-ellipsis>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { NEllipsis } from 'naive-ui'
  // import MdEditor from '@/components/MdEditor.vue'
  import NaturTable from '@/components/NaturTable.vue'

  onMounted(() => {
    const { elTableRef } = naturTableRef.value

    mdStr.value = '123456'
  })

  const mdStr = ref('')

  const columns = [
    { property: 'id', label: 'ID', fixed: 'left' },
    { property: 'name', label: '名字' },
    { property: 'age', label: '年龄', slot: true },
    { property: 'operate', label: '操作', slot: true }
  ]
  const data = ref([
    { id: 1001, name: '哈哈', age: 24 },
    { id: 1022, name: '快递费', age: 18 },
    { id: 10456, name: '那么', age: 54 }
  ])
  const naturTableRef = ref(null)

  const pageParameter = ref({ pageNo: 1, pageSize: 20 })
  watch(
    () => pageParameter,
    nv => {
      console.log(nv)
    }
  )

  const consoleLog = v => {
    console.log(v)
  }
</script>

<style lang="scss" scoped></style>
