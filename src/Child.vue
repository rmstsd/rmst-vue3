<template>
  <li :data-key="item">{{ item }}</li>
</template>

<script setup lang="ts">
  import { onUpdated } from 'vue'

  interface Props {
    item: string | number
  }
  const { item } = defineProps<Props>()

  onUpdated(() => {
    console.log(2)
  })
</script>

<style scoped>
  li {
    border-bottom: 1px solid #aaa;
  }
</style>
